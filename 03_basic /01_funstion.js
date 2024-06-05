function addTwoNumbers(num1,num2){
    // console.log(num1+num2)
    return num1+num2
}
  const result=addTwoNumbers(3,2)
  console.log(`result is ${result}`)

  function  loggedIn(usernName="bis"){
    if(!usernName){
        console.log(`Please enter  name`)
        return 
    }
    
    return  `${usernName} just logged inside the website `
}
let view =loggedIn()
console.log(view)
