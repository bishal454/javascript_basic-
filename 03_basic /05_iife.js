// () for function writting ()for calling the function immediately bcz we dont want that 
// the global vairable scope   doesnot have that much effect in the local scope variable
// and distrub the function values . in one word due to the global scope pollution .;to stope context

(function chai(){
    // named IIEF (immediately invoked function)
    console.log(`DB CONNECTED`)
})();
((name)=>{
    console.log(`DB CONNECTED TO ${name }.`)

})("BISHAL")
