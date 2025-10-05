const coding = ["Python", "Ruby", "C++", "JavaScript", "Swift"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })


// coding.forEach(    (item) => {
//     // console.log(item);
    
// })


// //PrintMe Method 
// function printMe(item) {
//     console.log(item);
    
// }
// coding.forEach(printMe)


coding.forEach( (item, index, arr) =>{
    // console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
    {
        languageName: "Java",
        languageFileName: "Java"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.languageName);
    
})