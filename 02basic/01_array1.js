let myArr=[2,33,43,'Bishal',34.5]
let arr=new Array(1,2,3,4,5,6,7)
console.log(myArr[3])
console.log(arr[3])

arr.push(12)
console.log(arr)
arr.push(1234)
console.log(arr)
arr.pop()
console.log(arr)
arr.unshift(32)
console.log(arr)
arr.unshift(45)
console.log(arr)



let arr2=arr.join()
console.log(arr)
console.log(arr2)
console.log(typeof arr2)
console.log(arr2.length)
console.log(arr2.toUpperCase()) 
arr.shift()
console.log(arr)

let myA1=[0,1,2,3,4,5,6,7,8,9]
console.log("A " ,myA1 )
let myA2=myA1.slice(1,4)
console.log( "B ",myA1)
console.log(myA2)
let myA3=myA1.splice(1,4)
console.log( "C ",myA1)
console.log(myA3)






