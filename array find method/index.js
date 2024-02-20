// ARRAY METHOD Find() 
// it return the element which match the condition , once the condition met it , it will stop and return the element

const cars = [
    {
        id: 1,
        name: "Corolla",
        make: "Toyota",
        color: "White"
    },
    {
        id: 2,
        name: "Yamaha",
        make: "Yamaha",
        color: "Red"
    },
    {
        id: 2,
        name: "G Wagon",
        make: "Mercedes",
        color: "White"
    },
    {
        id: 4,
        name: "Kawasaki Ninja",
        make: "Kawaski",
        color: "White"
    },

]

// let a = [1, 2, 3, 4, 5]

// let matchingCar = {
//     id: 2,
//     name: "Yamaha",
//     make: "Yamaha",
//     color: "Red"
// }

const newCar = cars.find(d => d.id === 2)
// const newCar = cars.map(d => d)
// const newCar = cars.filter(d => d.id === 2)

console.log("Specific Data ===>>",  newCar)