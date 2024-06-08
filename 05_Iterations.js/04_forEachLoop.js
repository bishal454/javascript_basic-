const coding=['java','cpp','javascript','python','ruby','flask']
// coding.forEach(function(items){
//     console.log(items)
// })
coding.forEach((item,index,arr)=>{

        console.log(item,index,arr)
    })
    function printMe(items){
        console.log(items)
    }
    coding.forEach(printMe)