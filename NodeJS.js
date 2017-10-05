/* count would be initially zero. 
The app will start by displaying the count and prompting the user for input. 
valid input strings are: 'inc', 'dec', 'res'. 
The user input may be in uppercase, lowercase, or any combination of the two. 
On input of 'inc' and 'dec', the counter will be incremented / decremented by 1. 
On input of 'res'  the counter will be reset. 
Following each of these, the new count will be displayed, followed by a relevant message (e.g. 'the counter has been incremented') followed by a prompt to the user for more input. */

// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })

// var counter = 0
// rl.on('line', function (input) {

//     if (input.toLowerCase() === 'inc') {
//         console.log(counter+=1,'The counter has been incremented')
//     } else if (input.toLowerCase() === 'dec') {
//         console.log(counter-=1,'The counter has been decremented')
//     } else if(input.toLowerCase() === 'res') {
//         console.log(counter = 0,"You reseted the counter")
//     }else{
//         console.log("Invalid Input")
//     }

// })
// console.log("The counter is: " + counter + " Will you like to increment (inc) or decrement (dec) or reset (res)")


/* Question #2
Write a program that reads the user input one line at a time. 
It would expect the user input to start with one of four mathematical symbols: + - * / followed by two numbers, separated by spaces. 
For example: + 4 2 . The program will perform the desired mathematical operation (addition, subtraction, multiplication or division) and log the result. 

The program will display an explanatory message if:

1. the operation is invalid.

2. The operation is not followed by the expected two numbers (with spaces)

For example, if the user enters: * 2 3 the program will log 6. */


var readline = require('readline')

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


rl.on('line', function (input) {
var inputArr = input.split(' ')
    if (inputArr[0] === '+') {
        var sum = Number(inputArr[1]) + Number(inputArr[2])
        console.log(sum)
    } else if (inputArr[0] === '-') {
        var dif =  Number(inputArr[1]) - Number(inputArr[2])
        console.log(dif)
    } else if(inputArr[0] === '*') {
       var mul =  Number(inputArr[1]) * Number(inputArr[2])
       console.log(mul)
    }else if(inputArr[0] === '/') {
        var div =  Number(inputArr[1]) / Number(inputArr[2])
        console.log(div)
     }else{
         console.log("The Operation is Invalid")
     }

})
console.log("Add an Operation (+,-,*,/) and two numbers")



// var readline = require('readline')

// var rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })
// function clear() {
//     process.stdout.write('\u001B[2J\u001B[0;0f');
// }



// rl.on('line', function (input) {

//     var inputArr = input.split(' ')

//     var sum = inputArr[1]
//     var dif = inputArr[1]
//     var mul = inputArr[1]
//     var div = inputArr[1]
//     for (var i = 2; i < inputArr.length; i++) {
//         var dif
//             if (inputArr[0] === '+') {
//                 sum += Number(inputArr[i])
//                 var output = sum
//             } else if (inputArr[0] === '-') {
//                 dif -= Number(inputArr[i])
//                 var output = dif
//             } else if (inputArr[0] === '*') {
//                 mul *= Number(inputArr[i])
//                 var output = mul
//             } else if (inputArr[0] === '/') {
//                 div /= Number(inputArr[i])
//                 var output = div
//             } else {
//                 var output = "The Operation is Invalid or Not all inputs are numbers"
//             }
//         }
//     console.log(output)

// })
// console.log("Add an Operation (+,-,*,/) and two numbers")

