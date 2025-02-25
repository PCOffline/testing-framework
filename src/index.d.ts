import type { TypedExpectable } from './expectable';

export default function expect<const T> (t?: T): TypedExpectable<T>;
// TODO: export function assert<const T>(t?: T): TypedAssertable<T>;