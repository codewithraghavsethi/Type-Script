// Get Started -- Terminal Code
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// console.log(StatusCode.SUCCESS)
// succes status code 200
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
var BottelMakerOne = /** @class */ (function () {
    function BottelMakerOne(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottelMakerOne;
}());
var bottel1 = new BottelMakerOne("Milton", 1200);
// console.log(bottel1)
// BottelMakerOne { name: 'Milton', price: 1200 }
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
// console.log(human2)
// HumanMaker { name: 'sethiji', isHandsome: true, age: 0 }
var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
    return Music;
}());
var djraghav = new Music("success", "raghav", 'sound cheack', 2, true);
// console.log(djraghav)
// Music {
//     name: 'success',
//     artist: 'raghav',
//     thumbnail: 'sound cheack',
//     length: 2,
//     free: true
//  }
// Classes and Objects Parameter Properties Method
// BottelMakerTwo and BottelMakerThree code are same
var BottelMakerTwo = /** @class */ (function () {
    function BottelMakerTwo(name) {
        this.name = name;
    }
    return BottelMakerTwo;
}());
var bottel2 = new BottelMakerTwo("Milton");
var BottelMakerThree = /** @class */ (function () {
    function BottelMakerThree(name) {
        this.name = name;
    }
    return BottelMakerThree;
}());
var bottel3 = new BottelMakerThree("Brass");
// Classes and Object with Public and Private Methods--------------------------------------------------------------------
// Public Method
var BottelMakerFour = /** @class */ (function () {
    function BottelMakerFour(name) {
        this.name = name;
        this.name = name;
    }
    BottelMakerFour.prototype.change = function () {
        this.name = "chilton";
    };
    return BottelMakerFour;
}());
var bottel4 = new BottelMakerFour("milton"); // BottelMakerFour { name: 'milton' }
bottel4.change(); // BottelMakerFour { name: 'chilton' }
// console.log(bottel4)
// Private Method
// Change to hoga but error bhi ayega but tarika galat hai, so don't do this 
var BottelMakerFive = /** @class */ (function () {
    function BottelMakerFive(name) {
        this.name = name;
        this.name = name;
    }
    BottelMakerFive.prototype.change = function () {
        this.name = "mitu";
    };
    return BottelMakerFive;
}());
var bottel5 = new BottelMakerFive("titu"); // BottelMakerFive { name: 'titu' }
bottel5.change(); // BottelMakerFive { name: 'mitu' }
// console.log(bottel5)         
// Classes and Objects with Extends Method------------------------------------------------------------
var BottelMakerSix = /** @class */ (function () {
    function BottelMakerSix(name) {
        this.name = name;
    }
    return BottelMakerSix;
}());
var NewBottelMakerSix = /** @class */ (function (_super) {
    __extends(NewBottelMakerSix, _super);
    function NewBottelMakerSix(name, type) {
        var _this = _super.call(this, name) || this;
        _this.type = type;
        return _this;
    }
    return NewBottelMakerSix;
}(BottelMakerSix));
var bottel6 = new BottelMakerSix("chilton");
var newbottel6 = new NewBottelMakerSix("milton", "brass");
//console.log(newbottel6)      // NewBottelMakerSix { name: 'milton', type: 'brass' }
//console.log(bottel6)         // BottelMakerSix { name: 'chilton' }
// Classes and Objects Protected Access Modifier Method---------------------------------------------------------------------
var BottelMakerSeven = /** @class */ (function () {
    function BottelMakerSeven() {
        // private name = "milton"
        this.name = "milton";
    }
    return BottelMakerSeven;
}());
var NewBottelMakerSeven = /** @class */ (function (_super) {
    __extends(NewBottelMakerSeven, _super);
    function NewBottelMakerSeven() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "metal";
        return _this;
    }
    NewBottelMakerSeven.prototype.changeName = function () {
        this.name = "some other name";
    };
    return NewBottelMakerSeven;
}(BottelMakerSeven));
var bottel7 = new NewBottelMakerSeven();
// console.log(bottel7)    NewBottelMakerSeven { name: 'milton', material: 'metal' }
var BottelMakerEight = /** @class */ (function () {
    function BottelMakerEight() {
        // public name = "milton"
        // private name = "milton"
        this.name = "milton";
    }
    return BottelMakerEight;
}());
var NewBottelMakerEight = /** @class */ (function (_super) {
    __extends(NewBottelMakerEight, _super);
    function NewBottelMakerEight() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.material = "metal";
        return _this;
    }
    NewBottelMakerEight.prototype.changeName = function () {
        this.name = "some other name";
    };
    return NewBottelMakerEight;
}(BottelMakerSeven));
var bottel8 = new NewBottelMakerSeven();
bottel8.changeName();
// console.log(bottel8)   NewBottelMakerSeven { name: 'some other name', material: 'metal' }
// Q:- What is deffrence between the public, private and protected
// public :- sabhi jagha axis ho sakta hai
// private :- sabhi jagha axis nahi hoga only block scop hota hai
// protect :- sabhi jagha to axis nahi hoga but extend karne per axis ho jata hai 
// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
// Classes and Objects Readonly Properties-------------------------------------------------------------
var BottelMakerNine = /** @class */ (function () {
    function BottelMakerNine(name) {
        this.name = name;
    }
    BottelMakerNine.prototype.change = function () {
        //this.name = "lelo"   
        //Cannot assign to 'name' because it is a read-only property.
    };
    return BottelMakerNine;
}());
var bottel9 = new BottelMakerNine("milton");
// Classes and Objects Optional Properties------------------------------------------------------------
var OptionalUser = /** @class */ (function () {
    function OptionalUser(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    return OptionalUser;
}());
var optionuser1 = new OptionalUser("raghav", 20);
var optionuser2 = new OptionalUser("raghav", 20, "male");
// console.log(optionuser1)
// console.log(optionuser2)
// OptionalUser { name: 'raghav', age: 20, gender: undefined }
// OptionalUser { name: 'raghav', age: 20, gender: 'male' }
// constructor properties 
// class User {
//     public name;
//     public age;
//     constructor(name : string, age: number){
//         this.name=name
//         this.age=age
//     }
// }
// Parameter Properties
// class User{
//     constructor(public name: string, public age: number){}
// }
// Classes and Objects Getters and Setters----------------------------------------------------------
var GetAndSetUser1 = /** @class */ (function () {
    function GetAndSetUser1(name, age) {
        this.name = name;
        this.age = age;
    }
    GetAndSetUser1.prototype.getName = function () {
        return this.name;
    };
    GetAndSetUser1.prototype.getAge = function () {
        return this.age;
    };
    GetAndSetUser1.prototype.setName = function (value) {
        this.name = value;
    };
    GetAndSetUser1.prototype.setAge = function (value) {
        this.age = value;
    };
    return GetAndSetUser1;
}());
var user1 = new GetAndSetUser1("raghav", 25);
// console.log(user1)
// console.log(user1.getName())
// console.log(user1.getAge())
// console.log(user1.setName("sethisahab"))
// console.log(user1.setAge(20))
// console.log(user1.getName())
// console.log(user1.getAge())
// console.log(user1)
// GetAndSetUser { name: 'raghav', age: 25 }
// raghav
// 25
// undefined
// undefined
// sethisahab
// 20
// GetAndSetUser { name: 'sethisahab', age: 20 }
// Getter and Setter method use with variable get and set 
var GetAndSetUser2 = /** @class */ (function () {
    function GetAndSetUser2(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    Object.defineProperty(GetAndSetUser2.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GetAndSetUser2.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    return GetAndSetUser2;
}());
var user2 = new GetAndSetUser1("srashti", 20);
// console.log(user2)
// console.log(user2.name)
// console.log(user2.age)
// console.log(user2.name = "khushi")
// console.log(user2.age = 18)
// console.log(user2)
// GetAndSetUser1 { name: 'srashti', age: 20 }
// srashti
// 20
// khushi
// 18
// GetAndSetUser1 { name: 'khushi', age: 18 }
// Static Members ---------------------------------------------------------------------
var getRandomNumber = /** @class */ (function () {
    function getRandomNumber() {
    }
    getRandomNumber.prototype.getNum = function () {
        return Math.random();
    };
    return getRandomNumber;
}());
var getnum1 = new getRandomNumber();
// you cannot getNum function without create variable.
// console.log(getnum1.getNum()) 
// 0.13885064369686993
var getRandomNumberWithStatic = /** @class */ (function () {
    function getRandomNumberWithStatic() {
    }
    getRandomNumberWithStatic.getNum = function () {
        return Math.random();
    };
    return getRandomNumberWithStatic;
}());
// you can getNum function without create variable.
// console.log(getRandomNumberWithStatic.getNum())
// 0.9900869600867499
var SethiSoftware = /** @class */ (function () {
    function SethiSoftware() {
    }
    SethiSoftware.version = 1.13;
    return SethiSoftware;
}());
// You can call this function without any create the new model variable of the SethiSoftware
// console.log(SethiSoftware.version)
// 1.13
// Classes and Objects Abstract Methods---------------------------------------------------------------------
var CookingEssentials = /** @class */ (function () {
    function CookingEssentials(gas, gasName) {
        this.gas = gas;
        this.gasName = gasName;
    }
    return CookingEssentials;
}());
var Sabji = /** @class */ (function (_super) {
    __extends(Sabji, _super);
    function Sabji() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sabji;
}(CookingEssentials));
var Cake = /** @class */ (function (_super) {
    __extends(Cake, _super);
    function Cake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Cake;
}(CookingEssentials));
// FUNCTION--------------------------------------------------------------------------------------------------
// Introduction to Function ---------------------------------------------------------------------------------
// Function Types 
function funOne() {
}
function funTwo() {
    return "Hi Raghav Sethi";
}
function funThree() {
    return 1331;
}
// Function Callback  
function funCallBackOne(name, age, cb) {
    cb("Hey! Raghav");
}
funCallBackOne("raghav", 25, function (arg) {
    // console.log("Argument-Print-Hoga:-",arg)
    // Argument-Print-Hoga:- Hey! Raghav
});
// Functin Optional and Default Parameter 
function funWithGender(name, age, gender) {
    if (gender === void 0) { gender = "not to be disclosed"; }
    console.log(name, age, gender);
}
//funWithGender("raghav", 24, "male")
//funWithGender("xyz", 18)                                            // this code will be run without gender because you have alredy give the parameter "not to be disclosed"
//funWithGender("xyz")                                            // this code will not be run because you don't define the age of the user
//funWithGender()                                             // this code will not be run because you don't define the name and age of the user 
// raghav 24 male
// xyz 18 not to be disclosed
// Function Rest Parameters
// ... Three dots are The REST Operator and The SPREAD Operator 
function sum() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    console.log(arg);
}
// sum(1,2,3,4,5,6,7,8,9,10)
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]
function CollectionOfTheFriends() {
    var fr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fr[_i] = arguments[_i];
    }
    console.log(fr);
    console.log(fr[0]);
    console.log(fr[1]);
    console.log(fr[2]);
    console.log(fr[3]);
    console.log(fr[4]);
    console.log(fr[5]);
    console.log(fr[6]);
    console.log(fr[7]);
}
function OverOne(a, b) {
    if (typeof a === "string" && b === "undefined") {
        console.log("Hey Buddy");
    }
    if (typeof a === "string" && typeof b === "number") {
        console.log(123);
    }
    else
        throw new Error("Something went wrong");
}
OverOne("hey");
OverOne("hey", 12);
