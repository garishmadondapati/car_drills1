// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*"


let inventory = require('./data')

function findOutLastCarInTheData(data){
    let result = data.find((element)=>{
        if(element.id === data.length){
            return `Last car is a ${element.car_make} ${element.car_model}`
        }
    });

    return result;
}

console.log( findOutLastCarInTheData(inventory))


module.exports = findOutLastCarInTheData