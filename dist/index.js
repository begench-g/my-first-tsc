"use strict";
let id = 5;
let company = "Nokat";
let isPublished = true;
let x = "Hello";
let ids = [2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//tuple
let person = [1, 'brad', true];
//if i change order of tupple tsc get me error
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
//union
let pid = 22;
pid = '22';
//enum
// value dakmasan default yagdayy durn yerindaki indexine gora
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "UP";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
//objects
const user = {
    id: 1,
    name: 'John'
};
const user2 = {
    id: 1,
    name: 'John'
};
//Type Assertion
let cid = 1;
let customerId = cid;
let customerId2 = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
//void
function log(message) {
    console.log(message);
}
//? optional yagny user1 de age bolmasada error berenok.
//goymasan error beryar
//readonly de assign value edip bolonok
//ex: user1.id=7
const user1 = {
    id: 1,
    name: 'John'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    //private etsen dine classyn ichinde id ulanyp bolar
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const brad = new Person(1, 'Brad tr');
const mike = new Person(2, 'mike');
console.log(brad.register());
class Person2 {
    //private etsen dine classyn ichinde id ulanyp bolar
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
        //return 1 diysen yalnysh sebabi register string diyip gorkezilen
    }
}
//subclases
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.name);
//generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
numArray.push('hello');
//generics
function getArray1(items) {
    return new Array().concat(items);
}
let numArray1 = getArray1([2, 2, 3, 4, 5]);
let strArray1 = getArray1(['brad', 'john', 'Jill']);
