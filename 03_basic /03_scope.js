let a=300
if(true){
    let a=25
    console.log(`the valueof a inside braces is ${a}`)
}
console.log(`the valueof a outside  braces is ${a}`)



function one(){
    let user="bishal"
    function two(){
        let website="youtube"
        console.log(user)

    }
    // console.log(website)
    two()

}
one()

if(true){
    let user="Bishal"
    if(user==="Bishal"){
        let website =" youtube "
        console.log(...user, ...website)

    }
    // console.log(website)

}
// console.log(user)

// function can be defined in two ways 
console.log(addone(7))
function addone(num){
    return num+1
}
 let addtwo=function(num){
    return num+2
 }
 console.log(addtwo(9))
 console.log(typeof addtwo)
 