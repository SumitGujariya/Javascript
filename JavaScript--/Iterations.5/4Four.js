const myObject = {
    js: "Javscript",
    cpp: "c++",
    rb: "Ruby",
    swipt: "Swipt by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcuts for ${myObject[key]}`);
    
}

const programming = ["c++", "ruby", "javascript", "rust", "python"]

for (const key in programming) {
    // console.log(programming[key]);
    
}

//Map method in use forin loop...

const map = new Map()  //They want only unique value for each entry is case of map they not print reapiting value!!

map.set('IN', "India")
map.set('USA', "United State of America")
map.set('Fr', "France")  
map.set('IN', "India")

for (const key in map) { // We can not iteration on map!!
    console.log(key);
    
}




// Notes
// points to remember where we use particular loop for rach (method)...

// Object ke andar we use (forin) loop ka use karte h 
// Array ke andar we use (forof) loop ka use karte h