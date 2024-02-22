// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.


let inventory = require('./data')

function carYearsData(data){
    let car_years=data.map((element)=>{
        return element.car_year;
    })
    return car_years

};


console.log(carYearsData(inventory));


module.exports=carYearsData