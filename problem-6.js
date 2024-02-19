// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

let inventory = require('./data')

function cars(data){
    let newArray=[]

    for(let i = 0 ; i < data.length ; i++){
        if (data[i].car_make==="BMW" || data[i].car_make === "AUDI"){
            newArray.push(data[i] . car_model)
        }
    }
    return newArray
}
let carsNewArray = cars(inventory)
console.log(carsNewArray)