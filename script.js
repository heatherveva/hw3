// Assignment Code
let generateBtn = document.querySelector("#generate");
// 1b. create array of letters
let possibleLetters = [];
let lcLetters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let ucLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let specialCharacters = [
  "\\",
  ".",
  "+",
  "*",
  "?",
  "[",
  "^",
  "]",
  "$",
  "(",
  ")",
  "{",
  "}",
  "=",
  "!",
  "<",
  ">",
  "|",
  ":",
  "-",
];

// generatePassword
// return a final password as a string
function generatePassword() {
  // 1. assign a variable to the length of the password
  let password = [];

  let pwLength = parseInt(
    prompt(
      `Please choose a password length between 8 and 128 characters. Enter it below.`
    )
  );

  let minLength = 8;
  let maxLength = 128;

  if (pwLength >= minLength && pwLength <= maxLength) {
    alert("Thank you!");
  } else if (pwLength < minLength || pwLength > maxLength) {
    return "null";
  }

  let hasLcLetters = window.confirm(
    "Would you like your password to contain lowercase letters?"
  );

  let hasUcLetters = window.confirm(
    "Would you like your password to contain uppercase letters?"
  );

  let hasNumbers = window.confirm(
    "Would you like your password to contain numbers?"
  );

  let hasSpecialCharacters = window.confirm(
    "Would you like your password to contain symbols?"
  );

  // 1a. create a password with that length
  // 1c. loop through array of letters
  if (hasLcLetters === true) {
    possibleLetters = possibleLetters.concat(lcLetters);
    password.push(generateRandom(lcLetters));
    pwLength--;
  }

  if (hasUcLetters === true) {
    possibleLetters = possibleLetters.concat(ucLetters);
    password.push(generateRandom(ucLetters));
    pwLength--;
  }

  if (hasNumbers === true) {
    possibleLetters = possibleLetters.concat(numbers);
    password.push(generateRandom(numbers));
    pwLength--;
  }

  if (hasSpecialCharacters === true) {
    possibleLetters = possibleLetters.concat(specialCharacters);
    password.push(generateRandom(specialCharacters));
    pwLength--;
  }

  for (i = 0; i < pwLength; i++) {
    password.push(
      possibleLetters[Math.floor(Math.random() * possibleLetters.length)]
    );
  }
  // 1e. convert password array back to string
  return password.join("");
}
function generateRandom(possibleLetters) {
  let index = Math.floor(Math.random() * possibleLetters.length);
  return possibleLetters[index];
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
