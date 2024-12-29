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
// Any, Number, Null, Never, Boolean, BigInt, String, Symbol, Unknown, Undefined, Void

let type1;                      // Any
let type2: number = 13;          // Number
let type3: null = null;         // Null   
let type5: boolean = true;        // Boolean        
let type6: bigint;  // BigInt            
let type7: string = "raghav";    // String            
let type8: symbol;              // Symbol
let type9: unknown;            // Unknown
let type10: undefined = undefined; // Undefined    

// Void --> never return value this code
function type11(): void {
    console.log("Hey")
}

// Never --> never run this code 
function type4(): never {
    while (true) { }
}

// Array 
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3, true, "raghav"]
let arr3 = [1, 2, 3, true, "raghav", { fullname: "raghavsethi" }]
let arr4: number[] = [1, 2, 4, 5, 6, 7, 8, 9, 10]

// Tuples 
let arr5: [string, number] = ["raghav", 18]
let arr6: [string, number, boolean] = ["raghav", 18, true]

// Objects
const obj1: { type: string, model: string, year: number } = { type: "Toyota", model: "Fortuner", year: 2025 };

// Enum - Enumerations
enum StatusCode {
    NOTFOUND = "not found status code 404",
    SUCCESS = "succes status code 200"
}
console.log(StatusCode.SUCCESS)

// Interfaces-------------------------------------------------
let inter1 = 12   //this is a number --> its upon on value of data
let inter2 = "13"  //this is a string --> its upon on value of data
let inter3 = true  //this is a boolean --> its upon on value of data

interface User {
    name: string,       // bina diya code run nahi hoga 
    email: string,      // bina diya code run nahi hoga 
    password: string,   // bina diya code run nahi hoga    
    gender?: string     // Optional hai do ya, mat do koi farak nahi padta 
}

function getDataOfUser(obj: User) {
    obj.name
    obj.email
    obj.password
    obj.gender
}
getDataOfUser({ name: 'raghav', email: 'raghavsethi@gmail.com', password: 'raghav123' })

// Extends with Interfaces
interface Admin extends User {                  // Extra use additional user data 
    admin: string
}
function getDataOfUserWithAdmin(obj: Admin) {   // Admin k sath sath User ka data bhi ayega 
    obj.name
    obj.email
    obj.password
    obj.gender
    obj.admin
}
getDataOfUserWithAdmin({ name: "raghav", email: "sethi@gmail.com", password: "rs123", gender: "male", admin: "user", })

// same name interfaces 
interface SameName {          // 1 interfaces                                 
    firstname: string
}
interface SameName {          // 2 interfaces                                                   
    middlename: string
}
interface SameName {          // 3 interfaces                                  
    lastname: string
}
function fullname(obj: SameName) {    // 1,2,3 interfaces marged 
    obj.firstname
    obj.middlename
    obj.lastname
}

//Type Aliases---------------------------------
type value = string | number
let aliases1: value = "raghav"
let aliases2: value = 12

type allValue = number | null | boolean | bigint | string | symbol | undefined | unknown | never | void | any
let aliases3: allValue = 123
let aliases4: allValue = null
let aliases5: allValue = true
let aliases6: allValue = "raghavsethi"
let aliases7: allValue = undefined
let aliases8: allValue

// Type Aliases Second Method
type CarYear = number
type CarType = string
type CarModel = string
type Car = {
    year: CarYear,
    type: CarType,
    model: CarModel
}

const carYear: CarYear = 2001
const carType: CarType = "Toyota"
const carModel: CarModel = "Corolla"
const car: Car = {
    year: carYear,
    type: carType,
    model: carModel
};

// Annotations--------------------------------
let anno1: number = 13         // defined the type of data 
let anno2: string = "raghav"   // defined the type of data 
let anno3: boolean = true      // defined the type of data 

// Union---------------------------------------
let union1: number | string | boolean = "raghavsethiji"
let union2: number | string | boolean = 123456789
let union3: number | string | boolean = true

function aliaseFunc(obj: value) {
}
aliaseFunc("raghav")  //  String   Allow
// aliaseFunc(true)   //  Boolean  Don't Allow
aliaseFunc(123456)    //  Number   Allow

// Intersection (&)--------------------------------------
type IntersectionUser = {
    name: string
    email: string
}
type IntersectionUser2 = IntersectionUser & {
    getDetails(user: string): void
}
function interFunc(a: IntersectionUser2) {
    a.name
    a.email
    a.getDetails
}

// Classes----------------------------------
class Device {
    name = "lg"
    price = 12000
    category = "Digital"
    loaction = "Noida"
}
let d1 = new Device  //both variable are same 
let d2 = new Device  //both variable are same 

























