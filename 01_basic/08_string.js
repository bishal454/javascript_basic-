let myName="Bishal"
let repoCount=4

console.log(`My name is ${myName} and my reporisitory count is ${repoCount}`)

let newWayName= new String("Bishal")
console.log(newWayName[0])
console.log(newWayName.__proto__)
console.log(newWayName.length)
console.log(newWayName.endsWith())
console.log(newWayName.indexOf('i'))
console.log(newWayName.toUpperCase())
let newString =newWayName.substring(0,4)
console.log(newString)
let anotherString=newWayName.slice(-1,-8)
console.log(anotherString)

let state="                           Uttar Pradesh                       "
console.log(state.trim())

let site="https://youtube.com-codingbishal45"
console.log(site.includes('bishal'))

let forSplit="bishal-ranjan-sah"
console.log(forSplit.split('-'))
let arr1=forSplit.split('-')
console.log(arr1[1])