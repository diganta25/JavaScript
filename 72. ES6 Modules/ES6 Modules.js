// The idea behind a module is that it's a file of rusable code
// We can import sections of pre-written code to use whenever we want
// Great for any general utility values and functions
// Help to make your code more reusable and maintanable
// Think of modules as separate chapters of a book

//import{PI, getCircumference, getArea} from "./circle_util.js"
import * as Circle from "./circle_util.js"

console.log(Circle.PI);

let circumference = Circle.getCircumference(10);
console.log("Circumference:",circumference);

let area = Circle.getArea(7);
console.log("Area:", area);