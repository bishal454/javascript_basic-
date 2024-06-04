let mavrel_hero=["Ironman","Thor","Spiderman"]
let dc_heros=["Flash","Superman","Joker"]

let combined=mavrel_hero.concat(dc_heros)
// console.log(mavrel_hero[3][1])
console.log(  combined)

const all_heros=[...mavrel_hero, ...dc_heros]
console.log(all_heros)

const array=[1,2,3,[3,22,1,3,3],33,332,[2,1,356,[2,4,56,2]]]
const readeable_array=array.flat(Infinity)
console.log(readeable_array)

console.log(Array.isArray("Bishal"))
console.log(Array.from("Bishal"))

let score1=[200.,100]
let score2=300
let score3=500
// console.log( Array.of(score1,score2,score3), Array.flat()) 
