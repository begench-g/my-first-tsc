let id: number = 5
let company: string = "Nokat"
let isPublished: boolean = true;
let x: any = "Hello"
let ids: number[]=[2,3,4,5]
let arr:any[]=[1,true,'Hello']

//tuple
let person: [number, string, boolean]=[1,'brad', true]
//if i change order of tupple tsc get me error

let employee: [number,string][]

employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
]
//union
let pid: string | number = 22

pid = '22'

//enum
// value dakmasan default yagdayy durn yerindaki indexine gora
enum Direction1 {
    Up=1,
    Down=2,
    Left=3,
    Right=4
}

enum Direction2 {
    Up='UP',
    Down='Down',
    Left='Left',
    Right='Right'
}
 //objects

 const user: {
    id: number,
    name: string
 } = {
    id: 1,
    name: 'John'
 }

 type User = {
    id: number,
    name: string
 }

 const user2: User ={
    id: 1,
    name: 'John'
 }

 //Type Assertion
 let cid: any = 1
 let customerId = <number>cid
 let customerId2 = cid as number

 //Functions
 function addNum(x:number,y:number):number{
    return x+y
 }
 //void
 function log( message : string | number ): void {
    console.log(message)
}

//intefaces
 interface UserInterface {
    readonly id: number
    name: string
    age?:number
 }
 //? optional yagny user1 de age bolmasada error berenok.
 //goymasan error beryar
 //readonly de assign value edip bolonok
 //ex: user1.id=7

 const user1: UserInterface = {
    id: 1,
    name: 'John'
 }

 //interface type yaly yone ashakdaky dine type de bolya interfacede bolanok

 type Point = number | string
 const p1: Point = 1

 interface MathFunc {
    (x: number, y: number):number 
 }

 const add: MathFunc = (x:number,y:number):number => x+y
 const sub: MathFunc = (x:number,y:number):number => x-y

 interface PersonInterface {
    id: number
    name: string
    register(): string
 }


//classes

class Person {
    private id: number
    name: string
//private etsen dine classyn ichinde id ulanyp bolar
    constructor(id:number,name: string){
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now registered`
    }
}
const brad = new Person(1,'Brad tr')
const mike = new Person(2, 'mike')

console.log(brad.register())

class Person2 implements PersonInterface {
    id: number
    name: string
//private etsen dine classyn ichinde id ulanyp bolar
    constructor(id:number,name: string){
        this.id = id
        this.name = name
    }
    register(){
        return `${this.name} is now registered`
        //return 1 diysen yalnysh sebabi register string diyip gorkezilen
    }
}
//subclases
class Employee extends Person {
    position: string 

    constructor(id:number, name: string, position: string){
        super(id,name)
        this.position = position
    }
}

const emp = new Employee(3, 'Shawn', 'Developer')

console.log(emp.name)