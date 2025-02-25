import expect from '.';

expect(5).to.be<number>();
// @ts-expect-error equal should be strict
expect(5).to.equal(6);
expect(5).to.equal(5);
// @ts-expect-error
expect(5).to.not.equal(5);
expect(5).to.not.equal(6);
expect('str').to.equal('str');
// @ts-expect-error
expect('str').to.equal('notStr');
expect(true).to.equal(true);
expect(undefined).to.beUndefined();
expect(1).to.beDefined();
// @ts-expect-error
expect(undefined).to.beDefined();
// @ts-expect-error
expect('abc').to.beUndefined();
expect({}).to.beEmpty();
// @ts-expect-error
expect({}).not.beEmpty();
// @ts-expect-error
expect<{ a: number }>().to.beEmpty();
expect<{ a: number }>().to.not.beEmpty();
expect<{ a: number }>().to.haveProperty('a');
// @ts-expect-error
expect<{ a: number }>().to.not.haveProperty('a');
// @ts-expect-error
expect<{ a: number }>().to.haveProperty('b');
expect<{ a: number }>().to.not.haveProperty('b');
expect<() => void>().to.beFunction()
expect<() => void>().to.haveParameters<[]>();
// @ts-expect-error
expect<() => void>().to.haveParameter<string>();
// @ts-expect-error
expect<() => void>().to.haveParameters<[string]>();
expect<never>().to.beNever();


expect<[]>().to.not.haveProperty('0');
expect<[string]>().to.haveProperty('0');
// TODO: Unions
expect<[] | [string]>().to.beArray()
// @ts-expect-error '0' is not valid for an empty array
expect<[] | [string]>().to.haveProperty('0')
// @ts-expect-error
expect<[] | [string]>().to.haveProperty('abc')
expect<[] | [string]>().to.not.haveProperty('abc')
expect <readonly []>().to.haveProperty('length')
expect <readonly [string]>().to.haveProperty('length')
expect <readonly [] | readonly [number]>().to.not.haveProperty('abc')
expect <readonly [] | readonly [number]>().to.haveProperty('length')
// @ts-expect-error
expect <readonly [] | readonly [number]>().to.haveProperty('abc')
