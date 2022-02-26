// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  //handle the obj is string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  //handle the obj is booleans,  numbers, return the string representation
  if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return '' + obj;
  }
  //handle the obj is array
  if (Array.isArray(obj)) {
    //check the empty array
    if (obj.length < 1) {
      return '[]';
    }

    var res = '[';
    for (var i = 0; i < obj.length; i++) {
      res += stringifyJSON(obj[i]) + ',';
    }

    res = res.substring(0, res.length - 1) + ']';
    return res;
  }

  // handle the obj is object, check for undefined or function
  if (typeof obj === 'object' && !Array.isArray(obj)) {
    var accumulator = [];
    for (var key in obj) {
      if (obj[key] !== undefined && typeof obj[key] !== 'function') {
        accumulator.push('"' + key + '"' + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + accumulator + '}';
  }

};
