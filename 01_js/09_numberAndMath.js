const amount=new Number(5000)
console.log(amount.toString())
let amountIntoString=amount.toString()
console.log(amountIntoString)
let newString=new String(amountIntoString)
console.log(newString.indexOf('0'))

let number=2123
console.log(number.toFixed(5))
console.log(number.toPrecision(2))
console.log(number.toPrecision(7))
console.log(number.toExponential(2))



const balance =2323132242
console.log(balance.toLocaleString('en-IN'))




// 
// Math
// 

console.log(Math.abs(-32.45))
console.log(Math.round(-32.45))
console.log(Math.ceil(-32.45))
console.log(Math.floor(-32.45))
console.log(Math.cos(-32.45))
console.log(Math.min(-32.45,45,0,1,3,6,3,9,53,3,1))
console.log(Math.max(-32.45,45,0,1,3,6,3,9,53,3,1))
console.log(Math.random())
min =1
max=6
console.log(Math.floor(Math.random()*(max-min+1)+min))