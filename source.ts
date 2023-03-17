export type Compact<A> = A extends Function ? A : { [K in keyof A]: A[K] } & {};
