const  myNum=[1,2,3,4,5,6,7,8,9]
const myValue=myNum
                    .map((num)=>num*20)
                    .map((num)=>num-4)
                    .filter((num)=>num>30)
    console.log(myValue)
    