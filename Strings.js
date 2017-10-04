/* #1 Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

drEvil(10)
// => 10 dollars
drEvil(1000000)
// =>  1000000 dollars (pinky)

*/

// function drEvil(amount){
// var milDollars = 1000000
//         if(amount > milDollars){
//             return `${amount} dollars (pinky)`
//         }else{
//             return `${amount} dollars`
//         }
// }
// console.log(drEvil(50000000))


/* #2 Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
If the string length is less than 3, it should leave it unchanged */

// function verbing(string){
    
//     if(string.slice(-3) === "ing"){
//         return string + "ly"
//     }else if(string.length > 3){
//             return string + "ing" 
//     }else{
//         return string
//     }
// }
// console.log(verbing("swimming"))

/* #3 Create a function getInitString that takes a string as input and return a copy of the string without the last letter. */

// function getInitString(string){
    
//     return string.slice(0, string.length - 1)
    
//     }
    
//     console.log(getInitString("jimmy"))


//#4 Create a function getLast that takes a string as input, and returns the last letter of that string.


// function getLast(string){

// return string.slice(- 1)

// }

// console.log(getLast("jimmy"))


// #5 Create a function capitalLast that takes a string as input, and returns a copy of the string with the last letter capitalized.

// function capitalLast(string){
    
//     var lastLetter =  string.slice( - 1)
//     return string.slice(0, string.length - 1) + lastLetter.toUpperCase ()
    
//     }
    
//     console.log(capitalLast("jimmy"))

// #6 Create a function called mixUp. It should take two strings as input, and return the concatenation of the two strings (separated by a space), swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long.

// function mixUp(word1, word2){
//     var newStr = " "
//     var word1_FirstTwo = word1.slice(0,2)
//     var word2_FirstTwo = word2.slice(0,2)

//     var  slicedWord1 = word1.slice(2,word1.length)
//     var  slicedWord2  = word2.slice(2,word2.length)

//     newStr = `${word1_FirstTwo}${slicedWord2} ${word2_FirstTwo}${slicedWord1}`
//     return newStr
// }

// console.log(mixUp("mix", "pod"))

// var name = "andre"

// var nameArr = name.split('')
// nameArr[0] = nameArr[0].toUpperCase()

// console.log(nameArr.join(''))

