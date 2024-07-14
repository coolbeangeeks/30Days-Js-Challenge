// Declaring variables of different data types
let myString = "Hello, World!";
let myNumber = 42;
let myBoolean = true;
let myObject = { name: "Alice", age: 30 };
let myArray = [1, 2, 3, 4, 5];
let myFunction = function() { return "I am a function"; };
let myUndefined;
let myNull = null;
let mySymbol = Symbol("symbol");

// Logging the type of each variable
console.log("Type of myString: " + typeof myString); // string
console.log("Type of myNumber: " + typeof myNumber); // number
console.log("Type of myBoolean: " + typeof myBoolean); // boolean
console.log("Type of myObject: " + typeof myObject); // object
console.log("Type of myArray: " + typeof myArray); // object (arrays are objects in JS)
console.log("Type of myFunction: " + typeof myFunction); // function
console.log("Type of myUndefined: " + typeof myUndefined); // undefined
console.log("Type of myNull: " + typeof myNull); // object (this is a known quirk in JS)
console.log("Type of mySymbol: " + typeof mySymbol); // symbol
