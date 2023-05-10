// useful string properties and methods

let userName = "Victor Stroboveski  ";
let phoneNumber = "123-456-7890";

console.log(userName.length);
console.log(userName.charAt(0));
console.log(userName.indexOf("S")); //case sensitive
console.log(userName.lastIndexOf("o")); //case sensitive

console.log(userName.trim());
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

console.log(phoneNumber.replaceAll("-", "/")); // for all
console.log(phoneNumber.replace("-", "")); // for single