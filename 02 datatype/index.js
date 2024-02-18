//   ------------------------- DATA TYPES------------------------------------

// 1) Number ------12345
// 2) string------- "" --''-- ``(backtick)
// 3) boolean------- "True"-- "False"
// 4) BigInT------ above 2*1o^63
// 5)Null-------null
// 6)Undefined------ example--- let y;
// 7)SYMBOL -----Unique identifier
// 8)object---- key value pairs
// for example
// let a={key :value}
// let car={name:"toyota", model: 2022,}

// */

// console.log("sadeeq ullah");
// 1)  Number
// let x = 10;
// console.log(typeof x);

// 2) String
// let x = "Sadeeq ullah khan";
// let x = `sadeeq`;
// let x = "sadeeeq ullah";
// let x = ""; ----------important   type will be string
// console.log(typeof x);

// 3) boolean
// var sadeeq = false;
// console.log(typeof sadeeq);
// var sadeeq = true;
// console.log(typeof sadeeq);
// let x = 3;
// let y = 4;
// let z = x > y;
// console.log(typeof z);
// console.log(z)


// 4) bigInt
// let x = (2 * 10) ^ 100;------ important
// console.log(typeof x);

// 5) null
// let x = null;--------important   result will be  object
// console.log(x)    the output will be    null
// console.log(typeof x);

// myValue = null;
// if (myValue === null) {
//   console.log("null");
// } else {
//   console.log(" not null.");
// }

// 6) undefined
// let y;
// console.log(typeof y);

// 7) Object
// let x = { car: "toyota", model: 2020, color: "gray" };
// console.log(typeof x);

// let x = (2 * 10) ^ 200;
// document.write(typeof x);

//   ------------------------- OPERATORS------------------------------
//  Arthmetic operater + - *  /  % ( modulus) reminder

// -------------ADDITION------------

// let x = 2;
// let y = 3;
// let z = x + y;
// console.log(z);

// let x = 2;
// let y = 3;
// var z = x + y;
// console.log(z);

// let x = 2;
// y = 3;
// z = x + y;
// console.log(z);

// let x = 3;
// let x = 4;
// let y = 3;
// let z = y + x;
// console.log(z);

// let x = 3;
// x = 4;
// let y = 3;
// let z = y + x;
// console.log(z);

// var x = 3;
// var x = 4;
// var y = 6;
// var z = x + y;
// console.log(z);

// var x = 3;
// var x = 4;
// var y = 6;
// let z = x + y;
// console.log(z);

// let x = "5" + 2 + 3;
// console.log(x);    output 523

// let x = 2 + 3 + "5";
// console.log(x);
//output 55
//------------MODULUS------------
// let x = 30;
// let y = 6;
// let z = x % y;
// console.log(z);
// ans is 0

//if the divisor value is greater then the divident it will simply give the divident value in output
//for example
// let x = 30;
// let y = 89;
// let z = x % y;
// console.log(z);
// 30 is the output

//------------DIVISION------------
// let X = 7;
// let y = 3;
// let z = 7 / 3;
// console.log(z);

// -------------------Comparesion Operators--------------
// == or ===
// <=
// >
// <
// <=
// !== or !=

// Examples

// let x = 5;
// let y = 5;
// console.log(x == y);

// let x = 5;
// let y = 4;
// console.log(x == y);

// let x = 5; number
// let y = "5"; string
// console.log(x == y); result is true bcoz
//  Double Equal only check the values of both the variables (does not check the data type of variables)

// let x = 4;
// let y = "4";
// console.log(x == y);

//  now triple equal

// let x = 4;
// let y = "4";
// console.log(x === y);
// Check the values of both variable and also check the datatypes of both variables.
// If values and datatypes are matched, it will return true.

// let x = 4;
// let y = 1 + 3;
// console.log(x === y);

// let x = 4;
// let y = 2;
// console.log(x === y);

// let x = 4;
// let y = 5;
// console.log(x <= y);

// let x = 4;
// let y = 5;
// console.log(x >= y);

// let x = 4;
// let y = 5;
// console.log(x < y);

// let x = 4;
// let y = 5;
// console.log(x > y);

// let a = 4;
// let b = 3;
// console.log(a != b);

// let x = 4;
// let y = "4";
// console.log(x !== y);
//  it will also check the datatype of both the variables

// let x = 4;
// let y = 4;
// console.log(x != y);

// -------------Assignment Operator--------------
// * =, +=, -=, /=, *=, %=

// let x = 2;
// let y = 2;
// console.log((x = y));

// let x = 2;
// let y = 2;
// console.log(x == y);

// let x = 2;
// let y = "2";
// console.log(x === y);

// let x = 100;
// let y = 24;
// console.log((x += y));

// let x = 100;
// let y = "24";
// console.log((x += y));
// x+=y --->>> x = x+y ---->>  x = 100 +  "24" ---->15 --only concatinate it coz both have different data types
//only cancatenate in += condition , otherwise not

// let x = 100;
// let y = 4;
// console.log((x -= y));

// let x = 100;
// let y = "ahmad";
// console.log((x -= y));

// let x = 100;
// let y = 3.6;
// console.log((x -= y));

// let x = 100;
// let y = "24";
// console.log((x -= y));

// let x = 100;
// let y = 5;
// console.log((x *= y));

// let x = 100;
// let y = "5";
// console.log((x *= y));

// let x = 100;
// let y = "ahmad";
// console.log((x *= y));

// let x = "ahmad";
// let y = "ali";
// console.log((x += y));

// let x = "ahmad";
// let y = "ali";
// console.log((x -= y));

// let x = "ahmad";
// let y = "ad";
// console.log((x -= y));

// let x = "ahmad";
// let y = "ad";
// console.log((x *= y));

// let x = "ahmad";
// let y = "ad";
// console.log((x /= y));

// let x = 4;
// let y = 4;
// console.log((x /= y));

// let x = 4;
// let y = "4";
// console.log((x /= y));

// let x = 4;
// let y = "ahmad";
// console.log((x /= y));

// var isTeacher = false;
// console.log(typeof isTeacher);
// var isStudestunt = "true";
// console.log(typeof isStudent);
// var isStudestunt = true;
// console.log(typeof isStudent);

//---------------------------------- Logical operator-----------
// Logical operators perform logical operations and return a boolean value, either true or false. For example,
// logical and &&
// var x = 5;
// var y = 3;
// console.log(x < 6 && y < 5);

// console.log(true && true);
// console.log(true || true);
// console.log(!true);
// console.log(true || false);
// console.log(false && false);
// console.log(!false);
var x = 5;
var y = 7;
// console.log(x < y || y < x);
console.log(x != y);
