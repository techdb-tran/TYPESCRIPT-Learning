{/*FUNCTION*/
const square = (side: number) =>side*side
console.log(square(3))
let greet:Function
greet = () => console.log('hello')
greet()

const add = (a:number, b:number, c:number) => a+b+c;
console.log(add(1,2,3))
const sum = (a:number, b:number, c:number|string)=>{
    console.log(a+b);
    console.log(c)
}
sum(1,2,3)
sum(1,4,'hen');
const addDefault = (a: number, b: number, c: number|string =10)=>{
    console.log('sum', a+b);
    console.log(c)
}
addDefault(1,3)
const minus = (a:number, b:number):number =>a-b
}