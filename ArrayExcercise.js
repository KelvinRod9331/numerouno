/* Question 1 
Write a function named `arrLength` that takes in an array as an argument. 
The function should return the length of that array. */


// function arrLength(arr){
//     return arr.length
// }
// console.log(arrLength(["jets", "mets", "giants", "yankees"]))

/* #2
Write a function named `longestArr` that takes in two arrays as arguments. 
The function should compare the length of the two arrays and return whichever array is longer (aka whichever array has more values in it). 
If the lengths of the two arrays are equal, then return null. */

// var arr1 = ["jets", "mets", "giants", "yankees"]
// var arr2 = ["cubs", "white sox", "bulls"]
// function longestArr(arr1,arr2){
//     if(arr1.length === arr2.length){
//         return null
//     }else if(arr1.length > arr2.length){
//         return `arr1 is longer than arr2`
//     }else{
//         return `arr2 is longer than arr1`
//     }
// }


// console.log(longestArr(arr1,arr2))

/* #3
 Write a function `middleElement` that takes an array as an argument and returns the middle element of that array. 
If the array has an even number of elements, the function should return "Oops, there's no middle..." */


// var arr = [1, 2, 3, 4, 5, 3, 6]
// function middleElement(arr){
//     if(arr.length % 2 === 1){
//         return arr[(arr.length - 1) / 2]
//     }else{
//         return "There is no Middle Element"
//     }
// }

// console.log(middleElement(arr))

/* #4
Write a function `sumArray` that takes as argument an array of numbers and returns the sum of all these numbers. */

// var arr = [1, 2, 3, 4, 5, 6]
// function sumArray(arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(sumArray(arr))

/* #5
Write a function range that takes two numbers as arguments: min and max. 
The function will return and array with all the numbers, inclusive, between min and max. */

// function range(min,max){
//     var arr = []
//     for(var i = min; i <= max; i++){
//       arr.push(i)
//     }

//     return arr

// }

// console.log(range(2,8))

/* #6
Write a function rangeWithStep that takes three numbers as arguments: min, max and step. The function will return and array with all the numbers, inclusive, between min and max, , going up in increments equal to step. 
If no step value is provided, the increment will be 1. */

// function range(min, max, step) {
//     var arr = []
//     if (step) {
//         for (var i = min; i <= max; i += step) {
//             arr.push(i)
//         }

//     }else{
//         for (var i = min; i <= max; i ++) {
//             arr.push(i)
//         }
//     }

//     return arr
// }

// console.log(range(4, 10))

/* #7
Write a function named `doubleTrouble` that takes in an array of numbers as an argument. 
The function should return a new array that doubles every number from the original array. */

// var arr = [10, 8, 5, 5, 2, 1]
// function doubleTrouble(arr){
//     var doubled_arr = []
//     for(var i = 0; i < arr.length; i++){
//         doubled_arr.push(arr[i] * 2)
//     }

//     return doubled_arr
// }

// console.log(doubleTrouble(arr))


/* PART 2
------------------------------------------------------------------------ */


/* #1
Write a function named `addTwoElements` that takes in three arguments: an array, and two values to add to that array. 
The function should add those two values to the end of the array. */

// var arr = [1, 2, 3]
// function addTwoElements(arr,value1,value2){
//     return arr.push(value1,value2)
// }

// addTwoElements(arr, 4, 5);
// console.log(arr)

/* #2
Write a function `withoutLastTwo` that takes an array as an argument and returns a copy of the array without the last two elements. 
If the original array is two elements or less, the function should return an empty array. */


// var array = ['dog', 'cat', 'bat', 'octopus','Iguana']
// function withoutLastTwo(arr){
//     arr.splice(arr.length - 2, 2)
//     return arr
    
// }

// console.log(withoutLastTwo(array))

/* #3 
Write a function `everyThird` that takes an array as an argument and 
returns a new array that contains every third element of the original array. */

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
// function everyThird(arr){
//     var arr2 = []
//         for(var i = 2; i < arr.length; i+=3){
//             arr2.push(arr[i])
//         }
//         return arr2
// }
// console.log(everyThird(arr))

/* #4
Write a function that takes an array as an argument, and returns a copy of the array with the last element at the front. */
// function lastToFront(arr){
// var newArr = []
// newArr.push(arr[arr.length - 1])
// for(var i = 0; i < arr.length; i++){
//     newArr.push(arr[i])
// }
// newArr.pop()
// return newArr
// }
// var arr = [1, 2, 3, 4, 5]
// console.log(lastToFront(arr))