/**
 * Variable declarations with let and const
 */

// // ES5
// var name5 = "Jane Smith";
// var age5 = 23; // function scoped variable
// name5 = "Jane Miller";
// console.log(name5);

// // ES6
// const name6 = "Darren Rambaud";
// let age6 = 26; // block scoped variable
// // name6 = "Darren Rambaud 1"; // TypeError!
// console.log(name6);

// // ES5
// function dl5(passedTest) {
//   if (passedTest) {
//     console.log(firstName); // Prints undefined
//     var firstName = "John";
//     var yearOfBirth = 1990;
//     // console.log(
//     //   firstName +
//     //     " born in " +
//     //     yearOfBirth +
//     //     " is not officially allowed to drive a car"
//     // );
//   }
//   console.log(
//     // Still works since var variables are FUNCTION scoped
//     firstName +
//       " born in " +
//       yearOfBirth +
//       " is not officially allowed to drive a car"
//   );
// }

// dl5(true);

// // ES6

// function dl6(passedTest) {
//   if (passedTest) {
//     // console.log(firstName); // ReferencedError returned -- "temporal death zone", can only use after defined
//     let firstName = "John";
//     const yearOfBirth = 1990;
//     console.log(
//       firstName +
//         " born in " +
//         yearOfBirth +
//         " is not officially allowed to drive a car"
//     );
//   }
//   //   console.log( // THIS DOES NOT WORK, firstName and yearOfBirth are BLOCK scoped, not FUNCTION scoped
//   //     firstName +
//   //       " born in " +
//   //       yearOfBirth +
//   //       " is not officially allowed to drive a car"
//   //   );
// }
// dl6(true);

// let i = 23;
// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0, 1, 2, 3, 4
// }
// console.log(i); // 23

// /**
//  * Blocks and IIFEs
//  */

// /*  Similar to an IIFE */
// {
//   // variables private to this block scope
//   const a = 1;
//   let b = 2;
//   // variables accessible outside of the block scope
//   var c = 3;
// }

// // console.log(a + b); // ReferenceError, a and b are BLOCK scoped
// console.log(c);

// /**
//  * ES5
//  */
// // (function() {
// //   var c = 3;
// // })();
// // console.log(c);

// Strings & template literals in ES6

let firstName = "john";
let lastName = "smith";
const yearOfBirth = 1990;
function calcAge(year) {
  return 2019 - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today he is " +
    calcAge(yearOfBirth) +
    " years old"
);

// ES6: Strings with template literals
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(
    yearOfBirth
  )} years old`
);

// New string method in ES6, startsWith(''), includes('') & endsWith('') -- CASE SENSITIVE!
const n = `${firstName} + ${lastName}`;
console.log(n.startsWith("j")); // false
console.log(n.endsWith("th")); // true
console.log(n.includes(" ")); // true
console.log(firstName.repeat(5)); // johnjohnjohnjohn
console.log(`${firstName} `.repeat(5)); // john john john john
