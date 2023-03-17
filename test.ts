import { Compact } from "./source";

declare const any: any;

const x: Compact<Record<"a" | "b", number> | Record<"a" | "c", number>> = any;

// ❌ Error:
//  Expected type to be: { a: number; b: number; } | { a: number; c: number; }, got: Compact<Record<"a" | "b", number> | Record<"a" | "c", number>>
// $ExpectType { a: number; b: number; } | { a: number; c: number; }
type Test1 = typeof x;

// ✅ No error
type Test2 = typeof x;
//   ^? type Test2 = {
//          a: number;
//          b: number;
//      } | {
//          a: number;
//          c: number;
//      }
