// const user={
//     name:"Bishal",
//     price:299,
//     loggedInMesssage:function(){
//         console.log(`${this.name} welcome to our website `)
//         console.log(this)
//     }
// }
// // user.loggedInMesssage()
// // user.name="Ranjan"
// // user.loggedInMesssage()
// // console.log(this )
// // global object is  window object 
// function forThis(){
//     let user="Bishal"
//     console.log(this)
//     // console.log(this.user) //we cannot access this insde the function we can only access insode the object 
// }
// forThis()
//  const  forThis2=function (){
//     let user="Bishal"
//     console.log(this)
//     // console.log(this.user) //we cannot access this insde the function we can only access insode the object 
// }
// here this is global object so `this` is identified in this type of function 
// decleration but in the arrow function `this ` is not applicablie or is invalid 

// const  forThis3= ()=>{ //arrow function decleration 
//     let user="Bishal"
//     console.log(this);
//     // console.log(this.user) //we cannot access this insde the function we can only access insode the object
// }

const addTwo=(num1,num2) =>{
    return num1+num2
} 
const addTwo1=(num1,num2) => (num1+num2) //implicite return
const myObj=()=>({name:"bishal"})
console.log(myObj()) 


console.log(addTwo(4,7))
