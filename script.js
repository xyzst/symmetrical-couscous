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

// let firstName = "john";
// let lastName = "smith";
// const yearOfBirth = 1990;
// function calcAge(year) {
//   return 2019 - year;
// }

// // ES5
// console.log(
//   "This is " +
//     firstName +
//     " " +
//     lastName +
//     ". He was born in " +
//     yearOfBirth +
//     ". Today he is " +
//     calcAge(yearOfBirth) +
//     " years old"
// );

// // ES6: Strings with template literals
// console.log(
//   `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(
//     yearOfBirth
//   )} years old`
// );

// // New string method in ES6, startsWith(''), includes('') & endsWith('') -- CASE SENSITIVE!
// const n = `${firstName} + ${lastName}`;
// console.log(n.startsWith("j")); // false
// console.log(n.endsWith("th")); // true
// console.log(n.includes(" ")); // true
// console.log(firstName.repeat(5)); // johnjohnjohnjohn
// console.log(`${firstName} `.repeat(5)); // john john john john

/**
 * Arrow functions
 */

// const years = [1990, 1965, 1982, 1937];

// // ES5
// var agesES5 = years.map(function(x) {
//   return 2019 - x;
// });
// console.log(agesES5);

// // ES6
// let agesES6 = years.map(x => 2019 - x);

// console.log(agesES6);

// agesES6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
// console.log(agesES6);

// agesES6 = years.map((el, index) => {
//   const now = new Date().getFullYear;
//   const age = now - el;
//   return `Age element ${index + 1}: ${2019 - el}.`;
// });
// console.log(agesES6);

/**
 * Arrow functions, part II
 * ARROW FUNCTIONS DO NOT HAVE THEIR OWN this KEYWORD, BUT SHARE THE SURROUNDING this KEYWORD (LEXICAL this VARIABLE)
 */

// ES5
// var box5 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     var self = this; // need to add to access box5 `this`
//     document.querySelector(".green").addEventListener("click", function() {
//       var str =
//         "This is box number " + self.position + " and it is " + self.color;
//       alert(str);
//     });
//   }
// };
// box5.clickMe(); // In this context (without line 168), this is referring to the global or window object, position and color are NOT defined in this object

// const boxES6 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     document.querySelector(".green").addEventListener("click", () => {
//       // Arrow function here shares the context of the boxES6
//       var str =
//         "This is box number " + this.position + " and it is " + this.color;
//       alert(str);
//     });
//   }
// };
// boxES6.clickMe();

// // const boxES66 = {
// //   color: "green",
// //   position: 1,
// //   clickMe: () => { // Arrow function at this point shares the global this keyword or the window object
// //     document.querySelector(".green").addEventListener("click", () => {
// //       // Arrow function here shares the context of the boxES6
// //       var str =
// //         "This is box number " + this.position + " and it is " + this.color;
// //       alert(str);
// //     });
// //   }
// // };
// // boxES66.clickMe();

// // ES5
// function Person(name) {
//   this.name = name;
// }
// Person.prototype.myFriends5 = function(friends) {
//   var arr = friends.map(
//     function(x) {
//       return this.name + " is friends with " + x;
//     }.bind(this)
//   );
//   console.log(arr);
// };

// var friends = ["bobby", "peggy", "hank"];

// new Person("John").myFriends5(friends);

// // ES6
// Person.prototype.myFriends6 = function(friends) {
//   var arr = friends.map(x => `${this.name} is friends with ${x}`);
//   console.log(arr);
// };

// var friends = ["bobby", "peggy", "hank"];

// new Person("Johnny").myFriends6(friends);

/**
 * Destructuring
 */

// // ES5
// var john = ["John", 26];
// var name = john[0];
// var age = john[1];
// console.log(name + " " + age);

// // ES6 w/ Destructuring
// const [name, age] = ["John", 26];
// console.log(`${name} is ${age} years old`);

// const obj = {
//   firstName: "John",
//   lastName: "Smith"
// };

// // If destructuring objects {}, can use same keys as obj
// const { firstName, lastName } = obj;
// console.log(`Hello, ${firstName} ${lastName}`);

// // Can destructure objects to use different keys
// const { firstName: a, lastName: b } = obj;
// console.log(`Hello, ${a} ${b}`);

// // More practical example ...

// // Given multiple values returned by a function ...
// function calcAgeRetirement(year) {
//   const age = new Date().getFullYear() - year;
//   return [age, 65 - age];
// }

// // Can easily destructure into own variables
// const [age1, retirement] = calcAgeRetirement(1990);
// console.log(age1);
// console.log(retirement);

/**
 * Arrays in ES6
 */
// const boxes = document.querySelectorAll(".box"); // returns NodeList

// // ES5
// var boxesArrES5 = Array.prototype.slice.call(boxes);
// // boxesArrES5.forEach(function(curr) {
// //   curr.style.backgroundColor = "dodgerblue";
// // });

// // ES6
// const boxesArrES6 = Array.from(boxes); // Transform NodeList -> Array
// boxesArrES6.forEach(x => (x.style.backgroundColor = "dodgerblue"));

// // ES5
// // for (var i = 0; i < boxesArrES5.length; i++) {
// //   if (boxesArrES5[i].className === "box blue") continue;

// //   boxesArrES5[i].textContent = "I changed to blue!";
// // }

// // ES6 "for of loop"
// for (const curr of boxesArrES6) {
//   if (curr.className.includes("blue")) continue;
//   curr.textContent = "I changed to blue!";
// }

// // ES5
// var ages = [12, 17, 8, 21, 14, 11];
// var full = ages.map(function(curr) {
//   return curr >= 18;
// });
// console.log(full);
// console.log(full.indexOf(true));
// console.log(ages[full.indexOf(true)]);

// // ES6
// console.log(ages.findIndex(curr => curr >= 18));
// console.log(ages.find(cur => cur >= 18));

/**
 * Spread operator
 */
// function addFourAges(a, b, c, d) {
//   return a + b + c + d;
// }

// var sum1 = addFourAges(18, 30, 12, 21);
// console.log(sum1);

// // ES5
// var ages = [18, 30, 12, 21];
// var sum2 = addFourAges.apply(null, ages); // Take array and apply function to array
// console.log(sum2);

// // ES6
// var sum3 = addFourAges(...ages); // Expand array into components
// console.log(sum3);

// // Joining arrays
// const familySmith = ["John", "Jane", "Mark"];
// const familyMiller = ["mary", "bob", "anne"];
// const bigFamily = [...familySmith, ...familyMiller, "lilly"]; // Expand each array into individual elements, combine into bigFamily
// console.log(bigFamily);

// // can also be used for node lists!
// const header = document.querySelector("h1");
// const boxes = document.querySelectorAll(".box");

// const all = [header, ...boxes];
// Array.from(all).forEach(x => (x.style.color = "purple")); // select all h1 and text, change to purple

/**
 * Function Parameters / Rest Parameters -- ability to add arbitrary amount of arguments into function
 */

// // ES5 way with "arguments" keyword
// function isFullAgeES5() {
//   var now = new Date();
//   var argsArray = Array.prototype.slice.call(arguments);
//   argsArray.forEach(function(curr) {
//     console.log(now.getFullYear() - curr >= 18);
//   });
// }

// isFullAgeES5(1990, 1965, 2005);
// isFullAgeES5(1990, 1965, 2005, 1999, 2017);

// //ES6 way using rest parameters
// // '...' (rest operator) transforms arguments into an array
// function isFullAgeES6(...years) {
//   var now = new Date();
//   years.forEach(curr => console.log(now.getFullYear() - curr >= 18));
// }

// isFullAgeES6(1990, 1965, 2005);
// isFullAgeES6(1990, 1965, 2005, 1900, 2009);

// ES5 way with "arguments" keyword
// Scenario where we want the first parameter to act as the "limit", and the
// remaining parameters are the years
// function isFullAgeES5(limit) {
//   var now = new Date();
//   var argsArray = Array.prototype.slice.call(arguments, 1);
//   argsArray.forEach(function(curr) {
//     console.log(now.getFullYear() - curr >= limit);
//   });
// }

// isFullAgeES5(16, 1990, 1965, 2005, 2002);
// // isFullAgeES5(1990, 1965, 2005, 1999, 2017);

// //ES6 way using rest parameters
// // '...' (rest operator) transforms arguments into an array
// // just add the 'limit' parameter
// function isFullAgeES6(limit, ...years) {
//   var now = new Date();
//   years.forEach(curr => console.log(now.getFullYear() - curr >= limit));
// }

// isFullAgeES6(21, 1990, 1965, 2005);
// isFullAgeES6(16, 1990, 1965, 2005, 1900, 2009);

/**
 * Default parameters
 */
// ES5 way
// function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
//   this.firstName = firstName;
//   this.lastName = lastName === undefined ? "Smith" : lastName;
//   this.yearOfBirth = yearOfBirth;
//   this.nationality = nationality === undefined ? "American" : nationality;
// }
// // the lastName, and nationality parameters will be 'undefined'
// var john = new SmithPerson("John", 1990);
// // nationality and lastName populated with American and Smith, by default
// console.log(john);

// // Can override defaults!
// var emily = new SmithPerson("Emily", 1991, "Diaz", "Spanish");
// console.log(emily);

// //ES6 way!
// function SmithPersonES6(
//   firstName,
//   yearOfBirth,
//   lastName = "Smith",
//   nationality = "American"
// ) {
//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;
// }

// var johnES6 = new SmithPersonES6("John", 1990);
// var emilyES6 = new SmithPersonES6("Emily", 1991, "Diaz", "Spanish");
// console.log(johnES6);
// console.log(emilyES6);

/**
 * Maps in ES6
 */

// const q1 = new Map();
// q1.set("q", "what is the official name of the latest major JS version?");
// q1.set(1, "ES5");
// q1.set(2, "ES6");
// q1.set(3, "ES2015");
// q1.set(4, "ES7");
// q1.set("correct", 3);
// q1.set(true, "CORRECT ANSWER");
// q1.set(false, "WRONG!");

// // console.log(q1.get("q"));
// // console.log(q1.size);
// // q1.has(4) ? console.log("4 exists") : console.log("4 does not exist");
// // console.log(q1.delete(4));
// // q1.clear();
// // q1.forEach((v, k) => console.log(`Key: ${k}, Value: ${v}`));

// for (let [k, v] of q1.entries()) {
//   //   console.log(`Key: ${k}, Value: ${v}`);
//   if (typeof k === "number") console.log(`Answer ${k}: ${v}`);
// }

// const ans = parseInt(prompt("Write the correct answer"));

// console.log(q1.get(q1.get("correct") === ans));
