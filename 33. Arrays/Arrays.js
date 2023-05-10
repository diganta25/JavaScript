// array = think of it as a variable, 
//         that can store multiple values

let fruits = ["apple", "orange", "banana"];

// fruits[0] = "coconut";  //update

fruits.push("lemon");   // add an element
fruits.pop();           // removes an element
fruits.unshift("mango");// add element to the beginning  
fruits.shift();         // removes element from the beginning

let length = fruits.length;
let index = fruits.indexOf("kiwi"); // if returns -1 = element not found

console.log(fruits);
console.log(length);
console.log(index);