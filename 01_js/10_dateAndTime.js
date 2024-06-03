// let myDate=new Date
// console.log(myDate.getFullYear())
// console.log(myDate)
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())


let createdDate=new Date(2024,6,13,10,15)
console.log(createdDate.toLocaleString())
let anotherCreatedDate=new Date("01-01-2023")
console.log(anotherCreatedDate.toDateString())

console.log(Math.floor(Date.now()/1000))