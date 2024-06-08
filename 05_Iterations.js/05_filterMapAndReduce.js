// const coding=['java','cpp','javascript','python','ruby','flask']
// const value=coding.forEach( (item)=>{
//     console.log(item)
//     return item //does not return any value . so it is undefined . so we use filter method 
//// if we want to return any value  or check any condition .
// })
// console.log(value)


// const myNum=[1,2,3,4,5,6,7,8,9,10]
// const newNum=myNum.filter((num)=>num>4)
// console.log(newNum)
// const value=[]
// myNum.forEach((num)=>{
//     if (num>4){
//         value.push(num)
//     } 
//     })
//     console.log(value)

    const books = [
        { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
        { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
        { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
        { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
        { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
        { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
        { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
        { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
        { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
      ];
    // const userbook=books.filter((bk)=> bk.genre==='History')
    const userbook=books.filter((bk)=>bk.publish>=2000)
    console.log(userbook)