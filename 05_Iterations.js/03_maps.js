// const map=new Map()
// map.set('IN','India')
// map.set('Nep','Nepal')
// map.set('USA',"United State Of America")
// console.log(map)

//  for (const [key,value] of map) {
//     console.log(key, ':-' ,value)
    
//  }





// let myObj={
//     'game1':'NBA',
//     'game2':'GTA6'

// }
// for (const game of myObj) {
//     console.log(game)
    
// }

const myObject={
    js:"Javascript",
    cpp:"c++",
    swift:"swift by apple",
    rb:"ruby",
    c:"c language"


}
for (const key in myObject) {
    console.log( `${key} is the shortcut of ${myObject[key]}`)
 
}
