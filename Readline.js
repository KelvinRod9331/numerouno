/* Question #1
Write a program that reads the user input one line at a time. 
Every time the user inputs a new line, the program will show all the lines that have been input before.
*/


// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// var userHistory = ''

// rl.on('line', function(input) {

// userHistory += input
// userHistory += "\n"
// console.log(userHistory)

// })

// console.log("Enter an input")

/* Question #2 
Write a program that reads the user input one line at a time. 
After each input the program will log the sum of all numbers that the user had input. 
If the input is not a number the program will ignore it.
*/

// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f');
//   }

// var sum = 0

// rl.on('line', function(input) {
// if(!isNaN(input)){
//     sum += Number(input)
// }
// console.log("Your total is " + sum) 


// })

// console.log("Enter an input")

/*
Write a program that the user input one line at a time. 
It would expect the user input to be a sequence of numbers and space. 
For example: "3 4 9".  T
he program will add all the numbers and log the result. 
The program will ignore any non-numerical input, but would still add up the rest.
*/


// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f');
// }

// function sumArr(input) {
//     var sum = 0
//     var input_Arr = input.split(' ')
//     for (var i = 0; i < input_Arr.length; i++) {
//         if(!isNaN(input_Arr[i]))
//         sum += Number(input_Arr[i])
//     }
//     return sum
// }

// rl.on('line', function (input) {

//     console.log("Your total is " + sumArr(input))


// })

// console.log("Enter an input")
