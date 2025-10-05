const user = {
  username: "Sumitt",
  loginCount: 5,
  signedIn: true,

  getUserDetails: function () {
    // console.log("Got user details from database");
    // console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function(){
console.log(`Welcome ${this.username}`);
    
  }

  return this

}

const userOne = new User("Sumit", 23, true)
const userTwo = new User("JavaScript", 34, false)

console.log(userOne);
console.log(userOne.constructor);
console.log(userTwo);
