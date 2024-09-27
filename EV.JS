let Name = 'ahmed'
let age = 25
console.log (`This is my name ${Name} \nThis is my age ${age}`);
age = 23
console.log(age)
age = true
console.log(age)
let x = '26'
let y = 5
console.log(x + y)
console.log(x - y)
console.log(x % y)
console.log(x / y)
console.log(x * y)
// str = any valiue between ""
// to add any value with the var with out any addition code { `this is my name ${} `}
// let = can be changed after a while 
// const = cant be changed just take one value and it cant be change  

//  Challenge 1
let marKMass = 78;
let markHeight = 1.69;
let johnMass = 95;
let johnHieght =1.76;
let bniMark = marKMass/markHeight
let bniJohn = johnMass/johnHieght
console.log(`BNI = ${marKMass /markHeight**2}\nBNI = ${johnMass/johnHieght**2}`)

// console.log('Mark BNI =' + markmass/markheight**2)
// to show the value u have to put = inside the '' like 'mark bni=' 
// === compare type and value 
// == compare value 
// and  must all condition success and true 

// Challenge2 
if(bniMark < bniJohn){
    console.log('marke has the bigger bni')

}else if (bniMark >bniJohn){
    console.log('John has the bigger bni')
}
let con = 22 
con >= 18 ? console.log('yes you can drive') : console.log('no you cant drive')

