let myName = "sumit       "
let myChannel = "Same-kumar"

// console.log(myName.truelength);
// console.log(myChannel.length);

// Next 

let myHeros = ["Thor", "Spiderman"]


let heroPower = {
    thor: "Hammer",
    spiderman: "Sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.sumit = function(){
    console.log(`sumit is present in all object`);
    
}

Array.prototype.heySumit = function(){
    console.log(`Hey sumit says hello`);
    
}

// heroPower.sumit()
// myHeros.sumit()
// myHeros.heySumit()
// heroPower.heySumit()


// Inheritance 
const  User = {
    name: "Sumitt",
    email: "same@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TaSupport = {
    makingAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// mmodern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

// Next 


let anotherUserName = "FullStackDeveloper        "

String.prototype.truelength = function(){
    console.log(`${this}`);
    console.log(`Ture length is: ${this.trim().length}`);
    
}

anotherUserName.truelength()
"sumit".truelength()
"iceTea".truelength()