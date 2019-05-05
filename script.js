/**
 * Variable declarations with let and const
 */

// ES5
var name5 = "Jane Smith";
var age5 = 23; // function scoped variable
name5 = "Jane Miller";
console.log(name5);

// ES6
const name6 = "Darren Rambaud";
let age6 = 26; // block scoped variable
// name6 = "Darren Rambaud 1"; // TypeError!
console.log(name6);

// ES5
function dl5(passedTest) {
  if (passedTest) {
    console.log(firstName); // Prints undefined
    var firstName = "John";
    var yearOfBirth = 1990;
    // console.log(
    //   firstName +
    //     " born in " +
    //     yearOfBirth +
    //     " is not officially allowed to drive a car"
    // );
  }
  console.log(
    // Still works since var variables are FUNCTION scoped
    firstName +
      " born in " +
      yearOfBirth +
      " is not officially allowed to drive a car"
  );
}

dl5(true);

// ES6

function dl6(passedTest) {
  if (passedTest) {
    // console.log(firstName); // ReferencedError returned -- "temporal death zone", can only use after defined
    let firstName = "John";
    const yearOfBirth = 1990;
    console.log(
      firstName +
        " born in " +
        yearOfBirth +
        " is not officially allowed to drive a car"
    );
  }
  //   console.log( // THIS DOES NOT WORK, firstName and yearOfBirth are BLOCK scoped, not FUNCTION scoped
  //     firstName +
  //       " born in " +
  //       yearOfBirth +
  //       " is not officially allowed to drive a car"
  //   );
}
dl6(true);

let i = 23;
for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); // 23
