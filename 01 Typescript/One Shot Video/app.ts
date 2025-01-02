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
// console.log(StatusCode.SUCCESS)
// succes status code 200

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
class BottelMakerOne {
    constructor(public name: string, public price: number) {

    }
}
let bottel1 = new BottelMakerOne("Milton", 1200)
// console.log(bottel1)
// BottelMakerOne { name: 'Milton', price: 1200 }

class HumanMaker {
    age = 0;
    constructor(public name: string, public isHandsome: boolean) { }
}
let human1 = new HumanMaker("raghav", true)
// console.log(human1)
// HumanMaker { name: 'raghav', isHandsome: true, age: 0 }
let human2 = new HumanMaker("sethiji", true)
// console.log(human2)
// HumanMaker { name: 'sethiji', isHandsome: true, age: 0 }

class Music {
    public name
    public artist
    public thumbnail
    public length
    public free
    constructor(name: string, artist: string, thumbnail: string, length: number, free: boolean) {
        this.name = name
        this.artist = artist
        this.thumbnail = thumbnail
        this.length = length
        this.free = free
    }
}
let djraghav = new Music("success", "raghav", 'sound cheack', 2, true)
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
class BottelMakerTwo {
    public name
    constructor(name: string) {
        this.name = name
    }
}
let bottel2 = new BottelMakerTwo("Milton")

class BottelMakerThree {
    constructor(public name: string) { }
}
let bottel3 = new BottelMakerThree("Brass")

// Classes and Object with Public and Private Methods--------------------------------------------------------------------
// Public Method
class BottelMakerFour {
    constructor(public name: string) {
        this.name = name
    }
    change() {
        this.name = "chilton"
    }
}
let bottel4 = new BottelMakerFour("milton")    // BottelMakerFour { name: 'milton' }
bottel4.change()                              // BottelMakerFour { name: 'chilton' }
// console.log(bottel4)

// Private Method
// Change to hoga but error bhi ayega but tarika galat hai, so don't do this 
class BottelMakerFive {
    constructor(private name: string) {
        this.name = name
    }
    change() {
        this.name = "mitu"
    }
}
let bottel5 = new BottelMakerFive("titu")     // BottelMakerFive { name: 'titu' }
bottel5.change()                             // BottelMakerFive { name: 'mitu' }
// console.log(bottel5)         

// Classes and Objects with Extends Method------------------------------------------------------------
class BottelMakerSix {
    constructor(public name: string) { }
}
class NewBottelMakerSix extends BottelMakerSix {
    constructor(name: string, public type: string) {
        super(name)
    }
}
let bottel6 = new BottelMakerSix("chilton")
let newbottel6 = new NewBottelMakerSix("milton", "brass")
//console.log(newbottel6)      // NewBottelMakerSix { name: 'milton', type: 'brass' }
//console.log(bottel6)         // BottelMakerSix { name: 'chilton' }

// Classes and Objects Protected Access Modifier Method---------------------------------------------------------------------
class BottelMakerSeven {
    // private name = "milton"
    public name = "milton"
}
class NewBottelMakerSeven extends BottelMakerSeven {
    public material = "metal"
    changeName() {        // if your name variable is private then error
        this.name = "some other name"
    }
}
let bottel7 = new NewBottelMakerSeven()
// console.log(bottel7)    NewBottelMakerSeven { name: 'milton', material: 'metal' }

class BottelMakerEight {
    // public name = "milton"
    // private name = "milton"
    protected name = "milton"
}
class NewBottelMakerEight extends BottelMakerSeven {
    public material = "metal"
    changeName() {        // if your name variable is private then error
        this.name = "some other name"
    }
}
let bottel8 = new NewBottelMakerSeven()
bottel8.changeName()
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
class BottelMakerNine {
    constructor(public readonly name: string) {
    }
    change() {
        //this.name = "lelo"   
        //Cannot assign to 'name' because it is a read-only property.
    }
}
let bottel9 = new BottelMakerNine("milton")

// Classes and Objects Optional Properties------------------------------------------------------------
class OptionalUser {
    constructor(public name: string, public age: number, public gender?: string) { }
}
let optionuser1 = new OptionalUser("raghav", 20)
let optionuser2 = new OptionalUser("raghav", 20, "male")
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
class GetAndSetUser1 {
    constructor(public name: string, public age: number) {
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    setName(value: string) {
        this.name = value
    }
    setAge(value: number) {
        this.age = value
    }
}
let user1 = new GetAndSetUser1("raghav", 25)
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
class GetAndSetUser2 {
    constructor(public _name: string, public _age: number) {
    }
    get name() {
        return this._name
    }
    get age() {
        return this._age
    }
    set name(value: string) {
        this._name = value
    }
    set age(value: number) {
        this._age = value
    }
}
let user2 = new GetAndSetUser1("srashti", 20)

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
class getRandomNumber {
    getNum() {
        return Math.random()
    }
}
let getnum1 = new getRandomNumber()
// you cannot getNum function without create variable.
// console.log(getnum1.getNum()) 
// 0.13885064369686993

class getRandomNumberWithStatic {
    static getNum() {
        return Math.random()
    }
}
// you can getNum function without create variable.
// console.log(getRandomNumberWithStatic.getNum())
// 0.9900869600867499

class SethiSoftware {
    static version = 1.13
}
// You can call this function without any create the new model variable of the SethiSoftware
// console.log(SethiSoftware.version)
// 1.13

// Classes and Objects Abstract Methods---------------------------------------------------------------------
class CookingEssentials {
    constructor(protected gas: string, protected gasName: string) { }
}
class Sabji extends CookingEssentials { }
class Cake extends CookingEssentials { }







// FUNCTION--------------------------------------------------------------------------------------------------
// Introduction to Function ---------------------------------------------------------------------------------

// Function Types 

function funOne(): void {

}

function funTwo(): string {
    return "Hi Raghav Sethi"
}

function funThree(): number {
    return 1331
}

// Function Callback  
function funCallBackOne(name: string, age: number, cb: (arg: string) => void) {
    cb("Hey! Raghav")
}

funCallBackOne("raghav", 25, (arg: string) => {
    // console.log("Argument-Print-Hoga:-",arg)
    // Argument-Print-Hoga:- Hey! Raghav
})


// Functin Optional and Default Parameter 
function funWithGender(name: string, age: number, gender: string = "not to be disclosed"){
    console.log(name, age, gender)
}

//funWithGender("raghav", 24, "male")
//funWithGender("xyz", 18)                                            // this code will be run without gender because you have alredy give the parameter "not to be disclosed"
//funWithGender("xyz")                                            // this code will not be run because you don't define the age of the user
//funWithGender()                                             // this code will not be run because you don't define the name and age of the user 

// raghav 24 male
// xyz 18 not to be disclosed


// Function Rest Parameters
// ... Three dots are The REST Operator and The SPREAD Operator 

function sum(...arg: number[]){
    console.log(arg)
}
// sum(1,2,3,4,5,6,7,8,9,10)
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10
//   ]

function CollectionOfTheFriends(...fr: string[]){
    console.log(fr)
    console.log(fr[0])
    console.log(fr[1])
    console.log(fr[2])
    console.log(fr[3])
    console.log(fr[4])
    console.log(fr[5])
    console.log(fr[6])
    console.log(fr[7])
}
// CollectionOfTheFriends("raghav","sethi","raghavji","sethiji","sethisahab","selflover")
// [ 'raghav', 'sethi', 'raghavji', 'sethiji', 'sethisahab', 'selflover' ]
// raghav
// sethi
// raghavji
// sethiji
// sethisahab
// selflover
// undefined
// undefined

// Function Overloading 

// function over(a: string): void
// function over(a: string, b: number): number
// function over(a: any, b?: any ){
//     if(typeof a === "string" && typeof b === "undefined" ){
//         console.log("Hey Buddy")
//     }
//     if(typeof a === "string" && typeof b === "number"){
//         console.log(123)
//     }
//     else throw new Error("Something went wrong");
// }
// over("hey")
// over("hey", 12)








