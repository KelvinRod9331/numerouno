/* #1
Write a function that takes a decimal number as argument and returns a string 
with the binary representation of the number. */

// function decimalToBinary(num){
//     string = ''
//     for(var i = num; i >= 0; i--){
//         if(num >= Math.pow(2,i)){
//             num = num - Math.pow(2,i)
//             string += '1'
//         } else {
//             string += '0'
//         }
//     }
//     return string
// }

// console.log(decimalToBinary(20)) 

/* #2 
Write a function that takes as argument a string with the binary representation of a number, 
and returns the decimal representation of the number (as a number). */


// function binaryToDecimal(str) {
//     var on = 0
//     var off = 0
//     var n = 0
//     for (var i = str.length - 1; i >= 0; i--) {
//         if (str[i] === '1'){
//             on += 1 * Math.pow(2, n++)
//         }else if (str[i] === '0'){
//             off += 0 * Math.pow(2, n++)
//         }
//     }
//     var sum = on + off
//     return sum
// }

// console.log(binaryToDecimal("1100"))

