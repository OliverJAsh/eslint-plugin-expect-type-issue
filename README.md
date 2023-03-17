```console
$ yarn
$ eslint test.ts

/Users/oliverash/Development/eslint-plugin-expect-type-issue/test.ts
  10:1  error  Expected type to be: { a: number; b: number; } | { a: number; c: number; }, got: Compact<Record<"a" | "b", number> | Record<"a" | "c", number>>  expect-type/expect

✖ 1 problem (1 error, 0 warnings)
```
