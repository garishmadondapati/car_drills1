// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

let inventory = require('./data')

function carYears(data,year){
    let older_cars = data.filter((element)=>{
        if(element.car_year<year){
            return element;
        }
    })
    return older_cars.length;
}
console.log(carYears(inventory,2000))
//console.log(carYearsnewArray)

module.exports =carYears