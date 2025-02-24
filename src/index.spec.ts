import expect from '.';

expect(5).toBe<number>();
// @ts-expect-error equal should be strict
expect(5).toEqual(6);
expect(5).toEqual(5);
// @ts-expect-error
expect(5).not.toEqual(5);
expect(5).not.toEqual(6);
expect('str').toEqual('str');
// @ts-expect-error
expect('str').toEqual('notStr');
expect(true).toEqual(true);
expect(undefined).toBeUndefined();
expect(1).toBeDefined();
// @ts-expect-error
expect(undefined).toBeDefined();
// @ts-expect-error
expect('abc').toBeUndefined();
expect({}).toBeEmpty();
// @ts-expect-error
expect({}).not.toBeEmpty();
// @ts-expect-error
expect<{ a: number }>().toBeEmpty();
expect<{ a: number }>().not.toBeEmpty();
expect<{ a: number }>().toHaveProperty('a');
// @ts-expect-error
expect<{ a: number }>().not.toHaveProperty('a');
// @ts-expect-error
expect<{ a: number }>().toHaveProperty('b');
expect<{ a: number }>().not.toHaveProperty('b');
expect<() => void>().toBeFunction()
expect<() => void>().toHaveParameters<[]>();
// @ts-expect-error
expect<() => void>().toHaveParameter<string>();
// @ts-expect-error
expect<() => void>().toHaveParameters<[string]>();
expect<never>().toBeNever();
