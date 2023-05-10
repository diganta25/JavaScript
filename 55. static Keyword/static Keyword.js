// static = belongs to the class, not the objects
//          properties: useful for caches, fixed-configuration
//          methods:    useful for utility functions

// example = Math class (Math.round)

class Car{

    static numberOfCars = 0;
    constructor(model){
        this.model = model;
        Car.numberOfCars +=1;
    }

    static startRace(){
        console.log("3...2...1...GO!");
    }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvett");
const car3 = new Car("BMW");

// console.log(car1.numberOfCars);
// console.log(car2.numberOfCars);
// console.log(car3.numberOfCars);

// console.log(Car.numberOfCars);

Car.startRace();