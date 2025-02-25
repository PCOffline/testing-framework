import type { IsAny, IsNever, IsUnknown } from 'type-plus';
import type {
  EmptyFunctionHelper,
  ParamFunctionHelper,
  ArgsHelper,
  BeHelper,
  NeverHelper,
} from './helpers';

export interface Expectable<T, Not extends boolean = false> {
  to: Expectable<T, Not>;
  not: Expectable<T, Not extends true ? false : true>;
  be: EmptyFunctionHelper<T, Not>;
  equal: ParamFunctionHelper<T, Not>;
  beNull: BeHelper<T, null, Not>;
  beDefined: BeHelper<T, undefined, Not extends true ? false : true>;
  beUndefined: BeHelper<T, undefined, Not>;
  beString: BeHelper<T, string, Not>;
  beNumber: BeHelper<T, number, Not>;
  beBoolean: BeHelper<T, boolean, Not>;
  beFunction: BeHelper<T, (...args: any) => any, Not>;
  beArray: BeHelper<T, any[] | readonly any[], Not>;
  beObject: BeHelper<T, object, Not>;
  beSymbol: BeHelper<T, symbol, Not>;
  beVoid: BeHelper<T, void, Not>;
  beUnknown: BeHelper<true, IsUnknown<T>, Not>;
  beNever: BeHelper<true, IsNever<T>, Not>;
  beAny: BeHelper<true, IsAny<T>, Not>;
}

export interface ExpectableObject<T extends object, Not extends boolean = false>
  extends Omit<Expectable<T, Not>, 'to' | 'not'> {
  to: ExpectableObject<T, Not>;
  not: ExpectableObject<T, Not extends true ? false : true>;
  haveProperty: <const U extends string>(
    property: NeverHelper<U, keyof T, Not, U, never>,
  ) => void;
  beEmpty: BeHelper<T, IsNever<keyof T, T, never>, Not>;
}

interface ExpectableArray<
  T extends any[] | readonly any[],
  Not extends boolean = false,
> extends Omit<ExpectableObject<T, Not>, 'to' | 'not' | 'beEmpty'> {
  to: ExpectableArray<T, Not>;
  not: ExpectableArray<T, Not extends true ? false : true>;
  beEmpty: BeHelper<T, [] extends T ? T : never, Not>;
  beTuple: never;
}

export interface ExpectableFunction<
  T extends (...args: any) => any,
  Not extends boolean = false,
> extends Omit<Expectable<T, Not>, 'to' | 'not'> {
  to: ExpectableFunction<T, Not>;
  not: ExpectableFunction<T, Not extends true ? false : true>;
  haveReturnType: EmptyFunctionHelper<ReturnType<T>, Not>;
  haveParameter: ParamFunctionHelper<Parameters<T>[number], Not>;
  haveParameters: <U extends any[]>(
    ...type: ArgsHelper<Parameters<T>, U, Not>
  ) => void;
  haveNthParameter: <Index extends number, U>(
    ...arg: ArgsHelper<Parameters<T>[Index], U, Not>
  ) => void;
}

export type TypedExpectable<T> = IsNever<
  T,
  Expectable<T>,
  T extends any[] | readonly any[]
    ? ExpectableArray<T>
    : T extends (...arg: any) => any
    ? ExpectableFunction<T>
    : T extends object
    ? ExpectableObject<T>
    : Expectable<T>
>;
