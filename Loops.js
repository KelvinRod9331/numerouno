/* Question #1
Write a function that takes a number as an argument and logs all the numbers, 
descending, between the number and 1. */


// function descending(number){
//     for(var i = number - 1; i > 1; i--){
//         console.log(i)
//     }
// }
// descending(10)

/* Question #2
Write a a function that takes a number as an argument, and prints all the even numbers between 0 and the number. */


// function evenNumbers(number){
//     for(var i = 1; i < number; i++){
//         if(i % 2 === 0){
//             console.log(i)
//         }
//     }
// }

// evenNumbers(20)

/* Question #3
Write a a function that takes a number as an argument, and prints all the odd numbers between 1 and the number. */

// function oddNumbers(number){
//     for(var i = 1; i < number; i++){
//         if(i % 2 === 1){
//             console.log(i)
//         }
//     }
// }

// oddNumbers(20)

/* Question #4
Write a function that takes a number num as an argument and logs that many multiples of 9. */

// function multipleOfNine(num){
//     var nine = 9
//     for(var i = 1; i <= num; i++){
//         console.log(nine * i)
//     }
// }

// multipleOfNine(5)

/*Question #5
Use the assignGrade function (given below). Write a function that logs each number from 60 - 100 along with its corresponding letter score */



// function assignGrade(score) {
//     if (score > 90) {
//         return 'A'
//     } else if (score > 80) {
//         return 'B'
//     } else if (score > 70) {
//         return 'C'
//     } else if (score > 65) {
//         return 'D'
//     } else {
//         return 'F'
//     }
// }

// function counterGrade(){
//     for(var i = 60; i <= 100; i++){
//         console.log( i + "-" + assignGrade(i))
//     }
// }

// counterGrade()


/* Questions #7 
Write a function fizzOrBuz that uses log all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead. */

// function fizzOrBuzz() {
//     for (var i = 1; i <= 100; i++) {
//         if (i % 5 === 0 && i % 3 === 0) {
//             console.log("FizzBuzz")
//         } else if (i % 3 === 0) {
//             console.log("Fizz")
//         } else if (i % 5 === 0) {
//             console.log("Buzz")
//         } else {
//             console.log(i)
//         }
//     }
// }

// fizzOrBuzz()

/* Question #8 
Write The 99 Bottles of Beer on the wall song */


// function bottlesOfBeer() {
//     for (var i = 99; i >= 1; i--) {
//         if (i === 1) {
//             console.log(`
//             ${i} bottle of beer on the wall
//             ${i} bottle of beer
//             You take one down, pass it around
//             No More Bottles of Beer on the Wall`)
//         } else {
//             console.log(`${i} bottles of beers on the wall
//              ${i} bottles of beers
//              You take one down, pass it around 
//              ${i - 1} bottles of beers on the wall`)
//         }

//     }
// }

// bottlesOfBeer()


/* 
How To Make A Chess Board 
*/
// function makeBoard(num){
    
//     var board = ''
//     for(var row = 0;  row < num; row++){
//         for(var column = 0; column < num; column++ ){
//             if((column + row) % 2 === 0){
//                board += "#"   
//             }else{
//                board += "   "   
//             }
//         }
//         board += '\n'
//     }
// return board

// }

// console.log(makeBoard(8))