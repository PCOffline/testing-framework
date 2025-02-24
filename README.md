# Type-Level Testing Library

**This project is NOT production ready and is for learning purposes only**

Test and assert your types

```
expect("abc").toBeString()
expect("abc").toBeNumber() // Error!

expect({ field: "abc" }).toBeObject()
expect({ field: "abc" }).toBe<{ field: string }>()
expect({ field: "abc" }).toBe<Record<string, string>>()
expect({ field: "abc" }).not.toBeArray()