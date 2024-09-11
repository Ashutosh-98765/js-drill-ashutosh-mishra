export const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" }; // use this object to test your functions

// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.
// Check and use MDN as well
// PROJECT RESTRICTION: You can't use the built in Object methods.  Only use native JavaScript for loops. No other types of loops are allowed.
// PROJECT RESTRICTION: You can't use the underscore library or any other external library.

export function keys(obj) {
  const arr = [];
  for (let key in obj) {
    arr.push(key);
  }
  return arr;
}

export function values(obj) {
  const arr = [];
  for(let key in obj){
    arr.push(obj[key]);
  }
  return arr;
}

export function mapObject(obj, cb) {
  const object = {};
  for(let key in obj){
    object[key] = cb(obj[key]);
  }
  return object;
}

export function pairs(obj) {
  const list = [];
  for(let key in obj){
    list.push([key, obj[key]]);
  }
  return list;
}

/* STRETCH PROBLEMS */

export function invert(obj) {
  const object = {};
  for(let key in obj){
    object[obj[key]] = key;
  }
  return object;
}

export function defaults(obj, defaultProps) {
  for(let key in defaultProps){
    if(obj[key] === undefined){
      obj[key] = defaultProps[key];
    }
  }
  return obj;
}