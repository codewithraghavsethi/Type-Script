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
let boolean = true
let number = 13
let string = "sethiji"
// bigInt, Symbol, Any, Unknown, Never, Undefined, Null, Void

// Array 
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3, true, "raghav"]
let arr3 = [1, 2, 3, true, "raghav", {fullname: "raghavsethi"}]
// Typescript Array 
let arr4: number[] = [1, 2, 4, 5, 6, 7, 8, 9, 10]

// Typescript Tuples 
let arr5:[string, number] = ["raghav", 18]
let arr6:[string, number, boolean] = ["raghav", 18, true]

// enum - enumerations
enum StatusCode {
    NOTFOUND = "not found status code 404",
    SUCCESS = "succes status code 200"
}
console.log(StatusCode.SUCCESS)