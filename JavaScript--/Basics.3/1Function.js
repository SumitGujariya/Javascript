function sayMyName() {
  console.log("s");
  console.log("u");
  console.log("m");
  console.log("i");
  console.log("t");
}
// sayMyName()

// first method
function addTwoNumbere(number1, number2) {
  // console.log(number1 + number2);
}

// addTwoNumbere(5, 5)
// addTwoNumbere(5, "5")
// addTwoNumbere(5, null)

// second method
function addTwoNumbere(number1, number2) {
  // let result = number1 + number2
  // console.log("Sumit");
  // return result
  return number1 + number2;
}

const result = addTwoNumbere(3, 5);
// console.log("Result: ", result);

function loginUserMessage(username = "samm") {
  if (!username) {
    console.log("Pleade enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("sumittt"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage("seccccccc"))

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 300, 400, 5000))

const user = {
  username: "sumit",
  price: 999,
};

function handleObject(antObject) {
  console.log(
    `username is ${antObject.username} and the price is ${antObject.price}`
  );
}

// handleObject(user)
handleObject({
  username: "akhil",
  price: 199,
});

const myNewArray = [200, 300, 400, 500];

function returnSecondValue(getArray){
  return getArray[2];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500]));

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// // console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));
