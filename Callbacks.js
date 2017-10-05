/* Question 1
Create a function logEachElem that takes an array as an argument, and uses the forEachElem method 
(below) to log each element of the array. */

// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//        callback(arr[i])
//     }
//  }
//  function logEachElem(arr){
//      console.log(arr)
//  }

//  forEachElem([1,2,3,4,5],logEachElem)

/* Question #2
Create a function logArrTypes that uses the forEachElem method to log each array element followed by its type.
*/

// function forEachElem(arr, callback){
//     for (var i = 0; i < arr.length; i++) {
//        callback(arr[i])
//     }
//  }

//  function logArrTypes(arr){
//      console.log(`${arr} is a ${typeof(arr)}`)
//  }

//  forEachElem([1, 'cat', true],logArrTypes)


/*Question #3
Use setInterval (Links to an external site.)Links to an external site. to display every second the number of seconds that have passed since the program was started. 
When executed with node */


// var counter = 1
// setInterval(function(){ console.log(counter++); }, 1000);

/* Question #4
Write a function shouldIBuyThis that takes as input a number balance and a callback (one of the above functions), 
and  returns either "Sure! I've got the money!" or "Nope! Gotta keep my savings up!"

Bonus: write a function smarterShouldIBuyThis that takes three arguments: a balance (number), a price (number), and a callback. 
The function returns "Sure! I've got the money!" or "Nope! Gotta keep my savings up!" based on the balance left after subtracting the cost from it.

*/

// function conservativeSpender(balance) {
//     return balance > 100
// }

// function liberalSpender(balance) {
//     return balance > 10
// }

// function horribleSaver(balance) {
//     return balance > 0
// }


// function shouldIBuyThis(balance, callback) {

//     if (callback(balance)) {
//         return "Sure! I've got the money!"
//     } else {
//         return "Nope! Gotta keep my savings up!"
//     }

// }

// Bonus!

// function smarterShouldIBuyThis(balance, price, callback) {
//     var difference = balance - price

//     if (callback(difference)) {
//         return "Sure! I've got the money!"
//     } else {
//         return "Nope! Gotta keep my savings up!"
//     }
// }

// console.log(shouldIBuyThis(20, conservativeSpender))
// console.log(smarterShouldIBuyThis(1,15,horribleSaver))