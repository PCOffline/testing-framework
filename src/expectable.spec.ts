import expect from ".";

// Number
expect(5).toBe<number>();
// @ts-expect-error
expect(5).toEqual(6);
expect(5).toEqual(5);

// String
expect("str").toEqual("str");
// @ts-expect-error
expect("str").toEqual("notStr");

// Boolean
expect(true).toEqual(true);

// Defined & Undefined
expect(1).toBeDefined();
expect(undefined).toBeUndefined();
// @ts-expect-error
expect(undefined).toBeDefined();
// @ts-expect-error
expect("abc").toBeUndefined();

// Empty
expect({}).toBeEmpty();
// @ts-expect-error
expect({}).not.toBeEmpty();
// @ts-expect-error
expect<{ a: number }>().toBeEmpty();
expect<{ a: number }>().not.toBeEmpty();
expect([]).toBeEmpty();
// @ts-expect-error
expect([]).not.toBeEmpty();
// @ts-expect-error
expect([1, 2, 3]).toBeEmpty();
expect([1, 2, 3]).not.toBeEmpty();

// Unknown
declare const _unknown: unknown;
expect(_unknown).toBeUnknown();
// @ts-expect-error
expect(_unknown).not.toBeUnknown();
// @ts-expect-error
expect(_unknown).not.toBe<unknown>();
expect(_unknown).toBe<unknown>();
expect(_unknown).not.toBe<never>();
expect(_unknown).not.toBeNever();
// @ts-expect-error
expect(_unknown).toBeNever();


// Never
declare const _never: never;
expect(_never).toBeNever();
// @ts-expect-error
expect(_never).not.toBeNever();
// @ts-expect-error
expect(_never).not.toBe<never>();
expect(_never).toBe<never>();
expect(_never).not.toBe<unknown>();
expect(_never).not.toBeUnknown();
// @ts-expect-error
expect(_never).toBeUnknown();
expect(_never).not.toBeFunction();
// @ts-expect-error
expect(_never).toBeFunction();

