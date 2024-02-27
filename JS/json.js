// JSON JavaScript

/*

Server gave your data follow some way

1. Plane data
2. XML data
3. Notation data

*/

// What is Notation ? => A series or system of written symbols used to represent numbers, amounts, or elements in something such as music or mathematics.


// JSON : JavaScript Object Notation (String)



const user = { name: 'pappu', id: '14749', dip: 'cse' } // JavaScript Object Data

// Convert JavaScript Object Data To JSON String Data

const stringified = JSON.stringify(user) // JSON String Data
console.log('Convert JavaScript Object Data To JSON String Data, Now type of JavaScript object to', typeof (stringified))
console.log('Data = ', stringified)


// Convert JSON String Data To JavaScript Object Data

const StringToParse = JSON.parse(stringified);
console.log('Convert JSON String Data To JavaScript Object Data, Now type of string to', typeof (StringToParse))
console.log('Data = ', StringToParse)


