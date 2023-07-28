{/*EXPLICIT TYPES*/
let myName : string = 'nam'
let age: number
let isAuthenticated: boolean

myName = 'henry'
// myName = 30
// age = 'henry'
age = 30
//isAuthenticated = 50
isAuthenticated = false
//arrays
let students:string[]=['nam','hung']

//students.push(5)
students.push('lan')

//union
let mixed: (string|number|boolean)[]

mixed =['henry',5,true]
mixed.push(6)
//mixed.push({a:2, b:9})

let id: string|number
id ='123'
id = 123

let hobby: 'book'|'music'
hobby = 'book'
//hobby = 'cooking'

//objects
let person: object
person ={name: 'pen', age: 30};
person = [1,2,3]

console.log(person)

let student: {
    name: string,
    age: number,
    isGood: boolean
}

student = {
    name: 'henry',
    
}
}