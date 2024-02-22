let inventory = require('../data.js')

let problem2 = require('../problem-2.js')

let carResult = problem2(inventory)
console.log(`Last car is a ${carResult.car_make} ${carResult.car_model}`)

