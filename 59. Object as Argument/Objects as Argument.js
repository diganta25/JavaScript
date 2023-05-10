
class Car{

    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");


changeColour(car3, "gold");
displayInfo(car3);


function displayInfo(car){
    console.log(car.model);
    console.log(car.year);
    console.log(car.color);

}

function changeColour(car, color){
    car.color = color
}