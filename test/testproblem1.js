let inventory = require('../data.js')

let problem1 = require('../problem-1.js')

let result = problem1(inventory,33);
console.log(`car 33 is a ${result.car_year}  ${result.car_make}  ${result.car_model}`)
