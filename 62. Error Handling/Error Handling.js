// error = object with a description of 
//         something that went wrong

// throw = executes a user-defined error

//          Can't open a file
//          Lose connection
//          User types incorrect input
//          TypeError

try {
    // console.lag();
    let x = window.prompt("Enter a number:");
    x = Number(x);

    if(isNaN(x)) throw "That was not a number!";
    if(x == "") throw "That was empty!";

    console.log(`${x} is a number`)

} 
catch (error) {
    console.log(error);
    
}
finally{
    console.log("This always executes");
}