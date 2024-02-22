// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.

//let inventory = require('./data')

function carYears(data){
    let newArray =[]
    for(let i = 0;i<data.length;i++){
        if(data[i].car_year<2000){
            newArray.push(data[i].car_model)
        }
    }
    return newArray
}
//let carYearsnewArray= carYears(inventory)
//console.log(carYearsnewArray)

module.exports =carYears