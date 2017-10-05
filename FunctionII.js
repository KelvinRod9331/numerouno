/* Question #1

Create two functions: double and square. double should take a number and return the number times two. 
square should take a number and return the number squared. 
Create a third function doubleSquare that uses both of the functions to return a number that is first doubled and then squared. */


// function double(num){
// return num * 2
// }

// function square(num){
// return num * num
// }


// function doublesquare(num){
//     return square(double(num))
// }

// console.log(doublesquare(2))

/* Question #2 
Create a function classyGreeting that takes as input the strings firstName  and lastName , and returns a string with a greeting using the two. 
Create a second function yell  that takes as input as string and returns the string in all capitalized letters. 
Create a third function yellGreeting  that will take the firstName  and lastName  as inputs and yell a greeting using the two. */

// function classyGreeting(firstName,lastName){
//     return firstName + " "+ lastName
// }

// function yell(string){
//     return string.toUpperCase()
// }

// function yellGreeting(firstName,lastName){
//     return yell(classyGreeting(firstName,lastName))
// }

// console.log(yellGreeting("kelvin","rodriguez"))

/* Question #3
The concat (Links to an external site.)Links to an external site. array method is used to merge two (or more) arrays. 
Write a removeDupes function that takes an array as an argument and returns a copy without any duplicate elements. 
Then, write a function concatAndRemoveDupes  that combines two arrays and removes any duplicates. */

// function removeDupes(array){
//     var noDupes_Arr = []
//     for(var i = 0; i < array.length; i++){
//         if(!noDupes_Arr.includes(array[i])){ 
//             noDupes_Arr.push(array[i])
//         }
//     }
//     return noDupes_Arr
// }


// function concatAndRemoveDupes(array1,array2){
//   return removeDupes(array1.concat(array2))   

     
// }

// console.log(concatAndRemoveDupes([1,1,2,1,2,3,3],[1,2,3,2,3]))



/* Question #4
Given a list of grades, we can get the median grade by sorting the list and taking the middle element, or the average of the two middle elements. 
Create the functions sort and middleElement, and then use them to create the functions median.
*/

// function sort(array){
//     return array.sort(function(a, b) {
//         return a - b
// }) 
// }

// function middleElement(array){
//     return array[(array.length - 1) /2]
// }


// function median(array){
//     return middleElement(sort(array))
// }

// console.log(median([91, 85, 100, 92, 88]))