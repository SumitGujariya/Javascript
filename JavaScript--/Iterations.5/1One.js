for (i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    // console.log("5 Is best number!");
  }
  //   console.log(element);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`Outer loop value ${i}`);
  for (let j = 1; j <= 10; j++) {
    // console.log(`Inner loop value ${j} and Inner loop value ${i}`);
    // console.log(i + "*" + j + ' = ' + i*j);
  }
}

let myArray = ["Ironman", "Spiderman", "Batman"];
// console.log(myArray.length);

for (let index = 0; index <= myArray.length; index++) {
  const element = myArray[index];
//   console.log(element);
  
}


for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        // console.log(`Detected 5`);
        continue // With the help of continue the loop is running continue after ignoring the 5
        break // / With the help of breal statement the loop is stop that time the 5 is detect by in running loop
    }    
    // console.log(`Value of i is ${index}`);
    
}

