export const items = [1, 2, 3, 4, 5, 5]; // use this array to test your code.
/*
    Complete the following functions.
    These functions only need to work with arrays.
    A few of these functions mimic the behavior of the `Built` in JavaScript Array Methods.
    The idea here is to recreate the functions from scratch BUT if you'd like,
    feel free to Re-use any of your functions you build within your other functions.
    **DONT** Use for example. .forEach() to recreate each, and .map() to recreate map etc.
    You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating

*/

export function each(elements, cb) {
    for (let i = 0; i < elements.length; i++) {
        cb(elements[i], i);
    }
}

export function map(elements, cb) {
    const arr = [];
    for(let i=0; i<elements.length; i++){
        arr.push(cb(elements[i], i));
    }
    return arr;
}

export function reduce(elements, cb, startingValue) {
    let acc, index;
    if(startingValue !== undefined){
        acc = startingValue;
        index = 0;
    }
    else{
        acc = elements[0];
        index = 1;
    }

    for (let i = index; i < elements.length; i++) {
        acc = cb(acc, elements[i]);
    }
    return acc;
}

export function find(elements, cb) {
    for (let i = 0; i < elements.length; i++) {
        if(cb(elements[i])){
            return elements[i];
        }
    }
    return undefined;
}

export function filter(elements, cb) {
    const arr = [];
    for (let i = 0; i < elements.length; i++) {
        if(cb(elements[i])){
            arr.push(elements[i]);
        }
    }
    return arr;
}

export const nestedArray = [1, [2], [[3]], [[[4]]]]; // use this to test 'flatten'

export function flatten(elements) {
    let arr = [];
    for (let i = 0; i < elements.length; i++) {
        if(Array.isArray(elements[i])){
            arr = arr.concat(flatten(elements[i]));
        }
        else{
            arr.push(elements[i]);
        }
    }
    return arr;
}