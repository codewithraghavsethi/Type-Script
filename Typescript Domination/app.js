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
var type1; // Any
var type2 = 13; // Number
var type3 = null; // Null   
var type5 = true; // Boolean        
var type6; // BigInt            
var type7 = "raghav"; // String            
var type8; // Symbol
var type9; // Unknown
var type10 = undefined; // Undefined    
// Void --> never return value this code
function type11() {
    console.log("Hey");
}
// Never --> never run this code 
function type4() {
    while (true) { }
}
// Array 
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3, true, "raghav"];
var arr3 = [1, 2, 3, true, "raghav", { fullname: "raghavsethi" }];
var arr4 = [1, 2, 4, 5, 6, 7, 8, 9, 10];
// Tuples 
var arr5 = ["raghav", 18];
var arr6 = ["raghav", 18, true];
// Objects
var obj1 = { type: "Toyota", model: "Fortuner", year: 2025 };
// Enum - Enumerations
var StatusCode;
(function (StatusCode) {
    StatusCode["NOTFOUND"] = "not found status code 404";
    StatusCode["SUCCESS"] = "succes status code 200";
})(StatusCode || (StatusCode = {}));
console.log(StatusCode.SUCCESS);
// Interfaces-------------------------------------------------
var inter1 = 12; //this is a number --> its upon on value of data
var inter2 = "13"; //this is a string --> its upon on value of data
var inter3 = true; //this is a boolean --> its upon on value of data
function getDataOfUser(obj) {
    obj.name;
    obj.email;
    obj.password;
    obj.gender;
}
getDataOfUser({ name: 'raghav', email: 'raghavsethi@gmail.com', password: 'raghav123' });
function getDataOfUserWithAdmin(obj) {
    obj.name;
    obj.email;
    obj.password;
    obj.gender;
    obj.admin;
}
getDataOfUserWithAdmin({ name: "raghav", email: "sethi@gmail.com", password: "rs123", gender: "male", admin: "user", });
function fullname(obj) {
    obj.firstname;
    obj.middlename;
    obj.lastname;
}
var aliases1 = "raghav";
var aliases2 = 12;
var aliases3 = 123;
var aliases4 = null;
var aliases5 = true;
var aliases6 = "raghavsethi";
var aliases7 = undefined;
var aliases8;
var carYear = 2001;
var carType = "Toyota";
var carModel = "Corolla";
var car = {
    year: carYear,
    type: carType,
    model: carModel
};
// Annotations--------------------------------
var anno1 = 13; // defined the type of data 
var anno2 = "raghav"; // defined the type of data 
var anno3 = true; // defined the type of data 
// Union---------------------------------------
var union1 = "raghavsethiji";
var union2 = 123456789;
var union3 = true;
function aliaseFunc(obj) {
}
aliaseFunc("raghav"); //  String   Allow
// aliaseFunc(true)   //  Boolean  Don't Allow
aliaseFunc(123456); //  Number   Allow
function interFunc(a) {
    a.name;
    a.email;
    a.getDetails;
}
// Classes----------------------------------
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 12000;
        this.category = "Digital";
        this.loaction = "Noida";
    }
    return Device;
}());
var d1 = new Device; //both variable are same 
var d2 = new Device; //both variable are same 
// console.log(d1)
// Device {
//     name: 'lg',
//     price: 12000,
//     category: 'Digital',
//     loaction: 'Noida'
//   }
// console.log(d2)
//   Device {
//     name: 'lg',
//     price: 12000,
//     category: 'Digital',
//     loaction: 'Noida'
//   }
// Constructor-----------------------------
// cunstructor biscket nahi biscket maker hoga jisse app or bhi jayada bisckets bna sakte hai and consume kar sakte hai 
var BottelMaker = /** @class */ (function () {
    function BottelMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottelMaker;
}());
var bottel1 = new BottelMaker("Milton", 1200);
// console.log(bottel1)
// BottelMaker { name: 'Milton', price: 1200 }
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandsome) {
        this.name = name;
        this.isHandsome = isHandsome;
        this.age = 0;
    }
    return HumanMaker;
}());
var human1 = new HumanMaker("raghav", true);
// console.log(human1)
// HumanMaker { name: 'raghav', isHandsome: true, age: 0 }
var human2 = new HumanMaker("sethiji", true);
console.log(human2);
