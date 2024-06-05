 const mySymbole=Symbol("key1")
let myObj={
    name:"Bishal",
    [mySymbole]:"myKey1",
    email:"bishalranjan44@gmail.com",
    age:22,
    loction:"Janakpur",
    lastLoggedIn:"yeserday",
    "Full Name":"Bishal Ranjan Sah",


}
console.log(myObj["Full Name"])
console.log(myObj[mySymbole])
console.log( typeof myObj[mySymbole])
console.log(myObj)
myObj.email="bishalranjan@google.com"
// Object.freeze(myObj)
myObj.email="bishalranjan@wordpree.com"
console.log(myObj.email)

myObj.greeting=function(){
    console.log("Hello JS user ")
}


myObj.greetingTwo=function(){
    console.log(`Hello JS user , ${this.name}`  )
}

console.log(myObj.greeting())
console.log(myObj.greetingTwo())


