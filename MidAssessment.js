/* Question #1
Write a function named and with parameters x and y. Your function should return true if x and y are both true, and otherwise return false.

Invoke your function with the arguments true and true.

Invoke your function with the arguments 'happy string' and [ ] (empty array). */

// function and(x,y){
//     if(x && y){
//         return true
//     }

//     return false
// }


// console.log(and(1 , undefined))


/* Questions #2

Write a function named addOnlyNumbers with parameters foo and bar. If foo and bar are both of type "number", return the result of foo plus bar. If foo and bar are not both numbers, return NaN.

Invoke your function with arguments 5 and Math.PI.

Invoke your function with arguments 'fidget spinner' and 22. */

// function addOnlyNumbers(foo,bar){
//     if(typeof(foo) === 'number' && typeof(bar) === "number"){
//         return foo + bar
//     }else{
//         return NaN
//     }
// }
// console.log(addOnlyNumbers(3,"3"))


/* Question #3
Write a function isAllNum with parameter arr. If every element of arr is of type number, return true. Otherwise, return false.
Invoke your function with the argument [1, 2, 3, 4, 5].
Invoke your function with the argument [1, 2, 'mountain dew']. */

// function isAllNum(arr) {

//     for (var i = 0; i < arr.length; i++) {
//         if (typeof (arr[i]) !== 'number') {
//             return false
//         }
//     }
// return true
// }
//     console.log(isAllNum([1, 2, "5", 4, 2]))


/*Question #4
Write a function forceAllNum with parameter arr.  Convert every element of arr that is of type number to the value 0 and return arr.
Invoke your function with the argument [1, 2, 3, 4, 5].
Invoke your function with the argument [1, 2, 'mountain dew']. */

// function forceAllNum(arr){
//     for(var i = 0; i  < arr.length; i++){
//         if(typeof(arr[i]) === 'number'){
//             arr[i] = 0
//         }
//     }
//     return arr
// }

// console.log(forceAllNum([1, 2, 3, "pizza", 5]))


/* Question #5
Write a function makeVowelsHyphens with parameter s. If s is not a string, return undefined. If s is a string, convert every vowel (a, e, i, o, u) into a hyphen (-) and return that string.
Invoke your function with the argument 'tuesday is my favorite day'.
Invoke your function with the argument { isString: false, isObject: true }. */

// function makeVowelsHyphens(s){
//     if(typeof(s) !== 'string'){
//         return undefined
//     }else if(typeof(s) === 'string'){
//         var s_Arr = s.split('')
//         for(var i = 0; i < s_Arr.length; i++){
//             if("aeiouAEIOU".includes(s_Arr[i])){
//                 s_Arr[i] = "-"
//             }
//         }
//     }
//     return s_Arr.join('')
// }

// console.log(makeVowelsHyphens('tuesday is my favorite day'))


/* Questions #6
Write a function hasPropertyTacos with one parameter, loljk. If loljk is an object with a defined property "tacos", return true. Otherwise, return false.

Invoke your function with argument { name: 'Cody', tacos: 'so many tacos' }.

Invoke your function with argument 'i am not even an object'. */

// function hasPropertyTacos(loljk){
//     if(typeof(loljk) !== 'object'){
//         return false
//     }else{
//         for (var key in loljk) {
//             if(key === "tacos"){
//                 return true
//             }
//         }

//     }
//   return false
// }



// console.log(hasPropertyTacos({ name: 'Cody', tacos: 'so many tacos' }))


/* Question #7

Write a function hasPropertyGeneric with two parameters, bigO and littleP. If bigO is an object with a defined property littleP, return true. Otherwise, return false.

Invoke your function with arguments { name: 'cody', tacos: 3 } and 'tacos'.

Invoke your function with arguments { name: 'cody', tacos: 3 } and 'sandwiches'. */

// function hasPropertyGeneric(bigO,littleP){

//         for (var key in bigO) {
//             if(key === littleP){
//                 return true
//             }
//         }
//     return false
// }


// console.log(hasPropertyGeneric({ name: 'cody', tacos: 3 }, "tacos"))

/* Question #8 
Write a function convertVowelsGeneric with parameters str and sub. If str or sub is not a string, return undefined. If str and sub are strings, replace every vowel (a, e, i, o, u) in str with sub return that string.
Invoke your function with the argument 'tuesday is my favorite day'.
Invoke your function with the argument { isString: false, isObject: true }. */

// function convertVowelsGeneric(str, sub) {
//     if (typeof(str) !== "string" || typeof(sub) !== "string") {
//         return undefined
//     } else{
//         var s_Arr = str.split('')
//         for (var i = 0; i < s_Arr.length; i++) {
//             if ("aeiouAEIOU".includes(s_Arr[i])) {
//                 s_Arr[i] = sub
//             }

//         }
//         return s_Arr.join('')
//     }
// }
// console.log(convertVowelsGeneric('tuesday is my favorite day', "2"))


