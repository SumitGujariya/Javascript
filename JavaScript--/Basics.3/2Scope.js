//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);

}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "sumit"

    function two(){
        const website = "Youtube"
        // console.log(username);
        
    }
        // console.log(website);
        two()

}

one()


if (true) {
    const username = "sumit"
    if (username === "sumit") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(9));
function addone(num){
    return num + 1
}


const addtwo = function(num){
    return num + 1
}
console.log(addtwo(99));
