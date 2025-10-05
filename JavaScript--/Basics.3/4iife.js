// (IIFE) immediately invoked function expresions


( function chai (){
    // named iife
    console.log(`DB CONNECTED`);
    
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})("sumit")