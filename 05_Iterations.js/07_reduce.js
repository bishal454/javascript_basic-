const myArr=[1,2,3,4]
const myTotal=myArr.reduce((acc,currvalue)=>(acc+currvalue),0)
console.log(myTotal)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const  myTotalInCart=shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(myTotalInCart)