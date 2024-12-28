// Get Started -- Terminal Code
// Install --> npm install -g typescript 
// Cheack --> tsc --version 
// Create Confige File --> npx tsc --init
// create new ts file --> app.ts
// Compiling
// Code Compileing --> tsc app.ts
// Auto Code Compileing --> tsc --watch
// Data Types - 2 Types fo datatypes
// 1. Primitives -- Simple Types -- Special Types 
// 2. Non Primitives - Reference 
// Primitives Data Types 
var boolean = true;
var number = 13;
var string = "sethiji";
// bigInt, Symbol, Any, Unknown, Never, Undefined, Null, Void
// Array 
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, true, "raghav"];
var arr3 = [1, 2, 3, true, "raghav", { fullname: "raghavsethi" }];

// enum - enumerations
var StatusCode;
(function (StatusCode) {
    StatusCode["NOTFOUND"] = "not found status code 404";
    StatusCode["SUCCESS"] = "succes status code 200";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.SUCCESS);
