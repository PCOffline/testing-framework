import type { IsAny, IsNever, IsUnknown } from 'type-plus';
import type { EmptyFunctionHelper, ParamFunctionHelper, NotHelper, ArgsHelper, ToBeHelper, ParamHelper } from './helpers';

export interface Expectable<T, Not extends boolean = false> {
  not: Expectable<T, Not extends true ? false : true>;
  toBe: EmptyFunctionHelper<T, Not>;
  toEqual: ParamFunctionHelper<T, Not>;
  toBeNull: ToBeHelper<T, null, Not>;
  toBeDefined: ToBeHelper<T, undefined, Not extends true ? false : true>;
  toBeUndefined: ToBeHelper<T, undefined, Not>;
  toBeString: ToBeHelper<T, string, Not>;
  toBeNumber: ToBeHelper<T, number, Not>;
  toBeBoolean: ToBeHelper<T, boolean, Not>;
  toBeFunction: ToBeHelper<T, (...args: any) => any, Not>;
  toBeArray: ToBeHelper<T, any[] | readonly any[], Not>;
  toBeObject: ToBeHelper<T, object, Not>;
  toBeSymbol: ToBeHelper<T, symbol, Not>;
  toBeVoid: ToBeHelper<T, void, Not>;
  toBeUnknown: ToBeHelper<T, IsUnknown<T, T, never>, Not>;
  toBeNever: ToBeHelper<true, IsNever<T, true, false>, Not>;
  toBeAny: ToBeHelper<true, IsAny<T, true, false>, Not>;
}

export interface ExpectableObject<T extends object, Not extends boolean = false>
  extends Expectable<T, Not> {
  not: ExpectableObject<T, Not extends true ? false : true>;
  toHaveProperty: <const U extends string>(
    ...property: ArgsHelper<U, keyof T, Not>
  ) => void;
  toBeEmpty: ToBeHelper<T, IsNever<keyof T, T, never>, Not>;
}

export type ExpectableArray<
  T extends any[] | readonly any[],
  Not extends boolean = false,
> = Omit<ExpectableObject<T, Not>, 'to' | 'not' | 'toBeEmpty'> & {
  not: ExpectableArray<T, Not extends true ? false : true>;
  // TODO
  toBeTuple: never;
};

export interface ExpectableFunction<T extends (...args: any) => any, Not extends boolean = false> extends Expectable<T, Not> {
  not: ExpectableFunction<T, Not extends true ? false : true>;
  toHaveReturnType: FunctionHelper<ReturnType<T>, Not>;
  toHaveParameter: FunctionHelper<Parameters<T>[number], Not>;
  toHaveParameters: <U extends any[]>(...type: ArgsHelper<Parameters<T>, U, Not>) => void;
  toHaveNthParameter: <Index extends number, U>(...arg: ArgsHelper<Parameters<T>[Index], U, Not>) => void;
}

export type TypedExpectable<T> = T extends any[] | readonly any[]
  ? ExpectableArray<T>
  : T extends (...arg: any) => any
    ? ExpectableFunction<T>
    : T extends object
      ? ExpectableObject<T>
      : Expectable<T>;

type A = Expectable<never>['toBe'];
