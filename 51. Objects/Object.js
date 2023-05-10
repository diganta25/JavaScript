// object = A group of properties and methods
//          properties = what an object has
//          methods = what an object can do
//          use. to access properties/methods

const car1 = {
    model: "Mustang",
    colour: "red",
    year: 2023,

    drive: function(){
        console.log("You drive the car");
    },

    break: function(){
        console.log("You step on the breaks");
    }

}

const car2 = {
    model: "Corvett",
    colour: "blue",
    year: 2024,

    drive: function(){
        console.log("You drive the car");
    },

    break: function(){
        console.log("You step on the breaks");
    }

}

console.log(car1.model);
console.log(car1.colour);
console.log(car1.year);
car1.drive();
car1.break();

console.log(car2.model);
console.log(car2.colour);
console.log(car2.year);
car1.drive();
car1.break();