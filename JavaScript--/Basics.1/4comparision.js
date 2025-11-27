// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1);
console.log("02" > 1);


// The reason is that an equality check == and comaparisons > < >= <= word diffenetly.
// Comparisons convert null to a number, treating is as 0.
// That's why (3) null >= 0 is true and (1) null > 0 is false.
console.log(null > 0);  // Null becomes 0 in comparison, and 0 > 0 is false, Becaose null is empty value.
console.log(null == 0); // == does NOT convert null to number.
console.log(null >= 0); // Null becomes 0, and 0 >= 0 is true.

console.log(undefined == 0); // no conversion undefined only equals null
console.log(undefined > 0); // Number(undefined) → NaN NaN < 0 is false
console.log(undefined < 0); // Number(undefined) → NaN NaN < 0 is false

// === 

console.log("2" === 2);
