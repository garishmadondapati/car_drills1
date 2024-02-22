// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.


//let inventory = require('./data')

function carYearsData(data){
    let result = [];

    for(let i = 0 ; i < data.lengtgh ; i++){
        result.push(data[i].car_year)
    }

    return result;
}

//let carYearsResult = carYearsData(inventory);
//console.log(carYearsResult);

module.exports=carYearsData