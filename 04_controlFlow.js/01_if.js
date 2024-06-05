let temp=200
if(temp>100){
    const power="fly"
    console.log(`The power is ${power}`)
}
// console.log(`The power is ${power}`)
// short hand notation 
const balance=1000
if(balance<500) console.log(`balace is less than 500`);
else if(balance<650) console.group("Balance is less than 650.");
else if(balance<900) console.log("Balance is less than 900");
else console.log("Balance is less than 1200")

const user=true
const loggedIn=true
const fromGoogle=false
const fromEmail=true
if(user&&loggedIn) console.log(`Have access`)
if(fromGoogle||fromEmail) console.log(`You can change`)