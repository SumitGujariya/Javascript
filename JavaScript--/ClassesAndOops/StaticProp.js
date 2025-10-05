class User {
  constructor(Username) {
    this.Username = Username;
  }

  logMe() {
    console.log(`Username: ${this.Username}`);
  }

  static createId() {
    return `123`;
  }
}

const sumit = new User("sumit")
// console.log(sumit.createId())

class Teacher extends User {
    constructor(Username, email){
        super(Username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());

 