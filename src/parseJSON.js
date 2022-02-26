// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
// Input: string
// Output: datatype associated with the string:string, number, boolean, object, array, null
// Edge:
// Constraints:
// Strategy: split string input first and last quote (single or double), check type of contents,
// iterate through array/object(key/value), output content in original type
//string :""
//array: []
//object:{}
//number: 9
//boolean: true false
// Psuedo:


var parseJSON = function(json) {
  var result;

  if (typeof json === 'string') {
    json = json.substring(0, json.length);
  }

  //Base Case: return original type of json
  if (typeof json === 'boolean' || typeof json === 'number' || typeof json === null) {
    return json;
  }

  if (typeof json === undefined) {
    return '' + json;
  }

  //Recursive Case: run parseJSON on individual array inputs, keys, key-value
  if (Array.isArray(json)) {
    result = [];
    json.forEach(function(item) {
      result.push(parseJSON(item));
    });
  }

  if (typeof input === 'object') {
    result = {};

  }

  return result;
};


// test case
// basic stuff
// '[]',
// '{"foo": ""}',
// '{}',
// ç,
// 'ç,
// '{"a": "b", "c": "d"}',
// '[null,false,true]',
// '{"foo": true, "bar": false, "baz": null}',
// '[1, 0, -1, -0.3, 0.3, 1343.32, 3345, 0.00011999999999999999]',
// '{"boolean, true": true, "boolean, false": false, "null": null }',

// // basic nesting
// '{"a":{"b":"c"}}',
// '{"a":["b", "c"]}',
// '[{"a":"b"}, {"c":"d"}]',
// '{"a":[],"c": {}, "b": true}',
// '[[[["foo"]]]]',

// // escaping
// '["\\\\\\"\\"a\\""]',
// '["and you can\'t escape thi\s"]',