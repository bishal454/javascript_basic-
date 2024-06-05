function addToMyCart(...num1){
    return num1
}
console.log(addToMyCart(12,1323,23434,70000))
const user= {
    name:"bishal",
    email:"bishal@.com"
}
function passObject(anyobject){
    return `name is ${anyobject.name} and their email is ${anyobject.email}`

}
console.log(passObject(user))
console.log(passObject({
    name:"ranjan",
    email:"ranjan@.com"
}))



let myArr=[200,24,565]
function secondElement(getMyArray){
    return getMyArray[1]
}
console.log(secondElement(myArr))