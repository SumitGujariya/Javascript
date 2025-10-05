class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this._password.toUpperCase()
        return `${this._password}sumiittt`
    }

    set password(value){
        this._password = value
    }
}


const sumit = new User("s@umit.ai", "abcd")
console.log(sumit.password);
console.log(sumit.email);
