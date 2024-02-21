// Map Method



// STATEMENT NO# 1
// Double the Numbers: Given an array of numbers,
//  use the map method to create a new array where each number is doubled.

let array=[1, 2, 3, 4, 5];

// Use the map method to create a new array with doubled numbers
const doubledArray= array.map(number => number * 2);

console.log("Doubled numbers:", doubledArray);






// STATEMENT N0# 2
// Uppercase Names: Given an array of names, use map to create a
//  new array where each name is converted to uppercase.

const names = ["Ali", "Ahmad", "maaz", "kamraan", "bilal"];
const uppercaseNames = names.map(name => name.toUpperCase());
console.log("Uppercase names:", uppercaseNames);


// STATEMENT NO# 3
// Calculate Square Roots: Given an array of numbers,
//  use map to create a new array where each number is replaced with its square root.
const numbers = [1, 4, 9, 16, 25];
const squareRoots = numbers.map(number => Math.sqrt(number));
console.log("Square roots:", squareRoots);



// STATEMENT NO# 4
// Extract Titles: Given an array of objects representing books with title properties, 
// use map to create a new array containing only the book titles.

const books = [
    { title: "Book 1", author: "Ali" },
    { title: "Book 2", author: "Bilal" },
    { title: "Book 3", author: "Ahmad" },
    { title: "Book 4", author: "Kamraan" },
    { title: "Book 5", author: "sohail" },
  ];  
  const bookTitles = books.map(book => book.title);
  
  console.log("Book titles:", bookTitles);