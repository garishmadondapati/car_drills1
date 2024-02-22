// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*"


let inventory = require('./data')

function findOutLastCarInTheData(data){
    let lastCar = data[data.length -1]
       return lastCar;
}

let carResult = findOutLastCarInTheData(inventory)
console.log(`Last car is a ${carResult.car_make} ${carResult.car_model}`)