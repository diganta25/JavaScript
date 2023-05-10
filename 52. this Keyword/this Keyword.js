// this = reference to a particular object
//        the object depends on the immediate context


this.name = "myCoolWindow";
console.log(this.name);

const car1 = {
    model: "Mustang",
    colour: "red",
    year: 2023,

    drive: function(){
        console.log(`You drive the ${this.model}`); //car1.model
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
        console.log(`You drive the ${this.model}`); //car2.model
    },

    break: function(){
        console.log("You step on the breaks");
    }

}

car1.drive();
car2.drive();