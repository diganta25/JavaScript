// slice() extracts a section of a string 
//             and returns it as a new string, 
//             without modifying the original string

let fullName = "Snoop Dogg";
let firstName;
let lastName;

// firstName = fullName.slice(0,7);
// lastName = fullName.slice(7);

firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1); // +1 to counter *space*

console.log(firstName);
console.log(lastName);