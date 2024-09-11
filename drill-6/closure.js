export function counterFactory() {
    let counter = 10;
    let obj = {
      increment: () => ++counter,
      decrement: () => --counter,
    };
    return obj;
  }
  
  export function limitFunctionCallCount(cb, n) {
      let count = 0;
      return (data) => {
          if(count < n){
              count++;
              return cb(data);
          }
          return null;
      };
  }
  
  export function cacheFunction(cb) {
      const cache = {};
      return (key) => {
          if(cache[key]){        // "cache.hasOwnProperty(key)"
              return cache[key];
          }
          let result = cb(key);
          cache[key] = result;
          return result;
      };
  }