// Assignment Code
let generateBtn = document.querySelector("#generate");
// 1b. create array of letters
let lcLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l"];
let ucLetters = ["A", "B", "C", "D"];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let characters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

// generatePassword
// return a final password as a string
function generatePassword() {
  let userInput = window.prompt(
    `Please choose a password length. Enter it below.`
  );

  let minLength = 8;
  let maxLength = 128;
  {
    if (userInput >= minLength && userInput <= maxLength) {
      alert("Thank you!");
      return true;
    } else {
      alert(
        `Please input a number between ${minLength} and ${maxLength} characters to continue.`
      );
      return false;
    }
  }

  //choose upper, lower, special, numbers

  let password = [];
  // 1a. create a password with that length
  // 1c. loop through array of letters
  for (let i = 0; i < pwLength; i++) {
    // 1d. push each letter array into password array
    password.push(lcLetters[i]);
  }

  // 1e. create a random 10 letter password
  // 2 ask user for length

  // 1e. convert password array back to string
  return password.join("");
}
// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
// kicks off the generator
generateBtn.addEventListener("click", writePassword);
