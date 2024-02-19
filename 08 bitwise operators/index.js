// & (AND) , | (OR) ,~ (NOT) , ^ (XOR)  or exclusiv OR, << left shift

// Bitwise  operator work on bits.
// Bitwise  operater work on 32 bits number.
//first convert number to bits , then it convert to number
// 0100= 4
// 0101=5
// operation will done on binary (& | etc ) then the resuled binary will be converted to number again

var a = 4;
var b = 5;

console.log(a & b);
console.log(a | b);

// ~ in this The 0 will be replace with one and vice versa
// 0101=5
// ~5= 1010
// console.log(~1);------------------      32bit

// ^ (XOR)  or exclusive OR,
// if both bits are  change (one is 1 and other is 0) the result will b 1 otherwise it would b 0
// console.log(3 ^ 2);

// console.log(5 << 1);

// console.log(5 >> 1);

// Object
// let x ={car: "toyota", model: 1239 , color: "gray"}
// console.log(x)