// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

let inventory = require('./data')

function cars(data){
    let BMWandAUDI=data.reduce((acc,cv)=>{
        if(cv.car_make === "Audi"  || cv.car_make ==="BMW"){
            acc.push(cv.car_model)
        }
        return acc;
    },[]);
return JSON.stringify(BMWandAUDI)    
}
console.log(cars(inventory))
//console.log(carsNewArray)

module.exports = cars