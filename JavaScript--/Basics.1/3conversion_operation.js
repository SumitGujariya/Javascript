// Conversion in JavaScript 
// We write the any conversion method with capital of the conversion we want.

let score = "33abc"

// console.log(typeof score); // you can write the score wtih the help of both method the first one 
// console.log(typeof (score)); // second one in brecets

let valueInNumber = Number(score) // Conversion into number value
// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = ""
let boleanIdLoggedIn = Boolean(isLoggedIn) // conversion into boolean value
// console.log(boleanIdLoggedIn);


// This are the example of some conversion.
// 1 => true; 0 => false
// "" => false
// "sumit" => true

let stringInNumber = 22
let srtingIsNumber = String(stringInNumber) // converison into string value.
// console.log(srtingIsNumber);
// console.log(typeof srtingIsNumber);


/************** OPERATIONS ***************/


let value = 5
let negValue = -value
// console.log(negValue); // THe output is = -5


// This all are method of operation in javascript.
// console.log(2+2); // Addition
// console.log(2-2); // Substraction
// console.log(2*2);  // Multiplication
// console.log(2**3); // Power 
// console.log(2/3); // Devide 
// console.log(2%3); // Modulo


let str1 = "hello"
let str2 = " sumit"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2); // The output is = 12
// console.log(1 + "2"); // The output is = 12
// console.log("1" + 2 + 2); // if string comes first they treat all like string. the output is = 122
// console.log(1 + 2 + "2"); // if string comes in last so they complete the conversion first. the output is = 32

// console.log( (3 + 4) * 5 % 3); // Use bracets.

// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 2 + 2

// console.log(num1);

// It's tricky question some times companies ask what's the output of the gamecounter.
let gameCounter = 199
++gameCounter; // Prefix
gameCounter++; // Postfix
// console.log(gameCounter); // (The output is = 200) It's gives same result/output with both method.