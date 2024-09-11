import { items, each, map, reduce, find, filter, nestedArray, flatten } from "./items.js";


// 1:

each(items, (element, index) => {
    console.log(`${index} : ${element * 2}`);
});

// 2:

map(items, (element, index) => {
    console.log(`${index} : ${element * 10}`);
});

// 3:

console.log(reduce(items, (acc, element) => {
    return acc *= element;
}, 1));

// 4:

console.log(find(items, (element) => {
    return element > 4;
}));

// 5:

console.log(filter(items, (element) => {
    return element > 2;
}));

// 6:

console.log(flatten(nestedArray));