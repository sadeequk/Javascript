// filter and Map

// Filter 
// The filter() method in JavaScript is used to create a new array by filtering out elements from an existing array that meet a specified condition.
//  It does not modify the original array; instead, it returns a new array containing the elements that pass the provided test function.
let array=[1,2,3,4,5,6,7,8,9,0,56,78,9,933,444,555,66,786,13]

let b= array.filter(filteredarray);
function filteredarray(){
    return array>5;
}


 // Array filter method:
 //Returns a new array of the elements that returns true
 
const student = [1, 2, 3, 4, '55', 66]
// let newArray = []
// for (let index = 0; index < student.length; index++) {
//     const element = student[index];
//     // console.log(element)
//     if(element == 5 || element === 6){
//         newArray.push(element)
//     }
// }
// console.log(newArray)
// let filteredArray = student.filter((el) => el == 5 || el === 6)

