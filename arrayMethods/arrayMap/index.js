/**
 * ! Array Map Method:
 * & Loop through the whole array and print the data
 */

let student = [
    {
        id: 1,
        name: 'Bakhti',
        age: 40,
    },
    {
        id: 2,
        name: 'Kotak',
        age: 30
    },
    {
        id: 3,
        name: 'Nisaan',
        age: 20
    }
]

let newStudent = {
    id: 4,
    name: "Sadeeq",
    age: 99
}
console.log(newStudent.age, newStudent.id)
// student.map(student => {
//     console.log(student.name)
// })

student.map((el, i) =>{
    console.log("Array element index ", i)
    console.log("Array element", el)
})

/**
 * ! Array Assignment:
 * Sort array in ascending order
 */