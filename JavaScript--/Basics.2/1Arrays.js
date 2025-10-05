// Arrays

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["Batman", "Spiderman"]

const myArray2 = new Array(1, 2, 3, 4, 10)

// console.log(myArray[1]);
// console.log(myHeros);
// console.log(myArray2);

// Arrays method

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

// myArray.unshift(8)
// myArray.shift()

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

// console.log(myArray);


// const newArr = myArray.join()

// console.log(myArray);
// console.log(typeof newArr);



// slice, splice

console.log("A ", myArray);

const myn1 = myArray.slice(1, 4) // Slice
console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 4) // Splice
console.log(myn2);
console.log("C ", myArray);

