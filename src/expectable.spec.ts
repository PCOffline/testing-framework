import expect from ".";

// Number
expect(5).be<number>();
// @ts-expect-error
expect(5).equal(6);
expect(5).equal(5);

// String
expect("str").equal("str");
// @ts-expect-error
expect("str").equal("notStr");

// Boolean
expect(true).equal(true);

// Defined & Undefined
expect(1).beDefined();
expect(undefined).beUndefined();
// @ts-expect-error
expect(undefined).beDefined();
// @ts-expect-error
expect("abc").beUndefined();

// Empty
expect({}).beEmpty();
// @ts-expect-error
expect({}).not.beEmpty();
// @ts-expect-error
expect<{ a: number }>().beEmpty();
expect<{ a: number }>().not.beEmpty();
expect([]).beEmpty();
// @ts-expect-error
expect([]).not.beEmpty();
// @ts-expect-error
expect([1, 2, 3]).beEmpty();
expect([1, 2, 3]).not.beEmpty();

// Unknown
declare const _unknown: unknown;
expect(_unknown).beUnknown();
// @ts-expect-error
expect(_unknown).not.beUnknown();
// @ts-expect-error
expect(_unknown).not.be<unknown>();
expect(_unknown).be<unknown>();
expect(_unknown).not.be<never>();
expect(_unknown).not.beNever();
// @ts-expect-error
expect(_unknown).beNever();


// Never
declare const _never: never;
expect(_never).beNever();
// @ts-expect-error
expect(_never).not.beNever();
// @ts-expect-error
expect(_never).not.be<never>();
expect(_never).be<never>();
expect(_never).not.be<unknown>();
expect(_never).not.beUnknown();
// @ts-expect-error
expect(_never).beUnknown();
expect(_never).not.beFunction();
// @ts-expect-error
expect(_never).beFunction();

