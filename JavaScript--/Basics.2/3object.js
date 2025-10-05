// Singletone
// Object.JsUser

// Object literals 

const mySym = Symbol("key1");

const JsUser = {
  name: "Sumit",
  "full name": "Sumit gujariya",
  [mySym]: "key1",
  age: 21,
  location: "ratlam",
  email: "sumit@gmail.com",
  isloggedin: false,
  lastLoginDays: ["monday", "saturday"],
};

// console.log(JsUser.email); 
// console.log(JsUser["email"]); // This will aplly in somecondition
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // Important

JsUser.email = "sumit@google.com";
// Object.freeze(JsUser)
JsUser.email = "sumitgujariya@chatgpt.com";
// console.log(JsUser);
 
// Funstions

JsUser.greeting = function () {
  console.log("Hello JsUser");
};

JsUser.greetinTwo = function () {
  console.log(`Hello JsUser, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greetinTwo());

