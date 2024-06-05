// false,{},0n,0,-0,null, BigInt,undefined,NaN    ++>>>>>considered as falasy value 
// truthy value +++++>>>>> "0",'false'," ", [],{},funstion(){}
// === is called exact equality 

const myObj={}
if(Object.keys(myObj).length===0){
    console.log(`Object is empty`)
}


// NULL COALESCING OPERATOR (??): USED FRO NULL  AND  UNDEFINED 

let var1;
// var1=null ?? 20
// var1=undefined ?? 30
var1=null ?? undefined ??40 
console.log(var1)

// terniary operator this is used for comparision and is far differe from null coalescing operator 

const temp=5
 temp>=40 ? console.log(` temperaturer is greater than 40`):console.log(`temp is less than 40`)