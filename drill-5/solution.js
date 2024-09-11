import { testObject, keys, values, mapObject, pairs, invert, defaults } from "./object.js";

console.log(keys(testObject));

console.log(values(testObject));

console.log(mapObject(testObject, (value) => typeof value === 'number' ? value + value : value + " " + value));

console.log(pairs(testObject));

console.log(invert(testObject));

console.log(defaults(testObject, {age: 20, weight: "70 kg", height: "6'0 feet"}));