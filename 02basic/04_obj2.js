let user = new Object()
console.log(user)
user.name="bishal"
user.email="bishal@gmail.com"
user.age=22



let anotherObj={
    email:"bishal@gmail.com",
    fullName:{
        userFullNam:{
            firstName:"Bishal",
            lastName:"sah",
        }
    }
}
console.log(anotherObj)

let obj1={1:"a",2:"b"}
let obj2={3:"z",4:"y"}
let obj3={obj1,obj2}
console.log(obj3)
let add=Object.assign( {},obj1,obj2)
console.log(add)


let obj4={...obj1, ...obj2}
console.log(obj4)

let user1=[
    {
        id:"24",
        email:"bsi@.com",
    },
    {
        id:"43",
        email:"dkd@.com"

    }
]
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

console.log(user.hasOwnProperty('age'))