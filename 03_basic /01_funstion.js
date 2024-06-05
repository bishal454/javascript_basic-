function addTwoNumbers(num1,num2)// parameter
{
    // console.log(num1+num2)
    return num1+num2
}
  const result=addTwoNumbers(3,2)// argument 
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
