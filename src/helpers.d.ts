export type ExtendsHelper<
  T,
  U,
  Not extends boolean,
  Success = T,
  Failure = never,
> = Not extends true
  ? T extends U
    ? Failure
    : Success
  : T extends U
    ? Success
    : Failure;
export type BeHelper<T, U, Not extends boolean> = ExtendsHelper<T, U, Not, () => void, (__invalidType: never) => void>;
export type ArgsHelper<T, U, Not extends boolean, Invalid extends any[] = [never]> = ExtendsHelper<T, U, Not, [] | [U], Invalid>;
export type ParamHelper<T, U, Not extends boolean, Invalid = never> = ExtendsHelper<T, U, Not, U, Invalid>;
export type EmptyFunctionHelper<T, Not extends boolean, Invalid extends any[] = [never]> = <const U>(...args: ArgsHelper<T, U, Not, Invalid>) => void;
export type ParamFunctionHelper<T, Not extends boolean, Invalid = never> = <const U>(arg: ParamHelper<T, U, Not, Invalid>) => void;
