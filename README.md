# Type-Level Testing Library

**This project is NOT production ready and is for learning purposes only**

Test and assert your types

```ts
expect("abc").to.BeString()
// @ts-expect-error
expect("abc").to.BeNumber()

expect({ field: "abc" }).to.beObject()
expect({ field: "abc" }).to.be<{ field: string }>()
expect({ field: "abc" }).to.equal({ field: "abc" })
expect({ field: "abc" }).to.not.beArray()
```