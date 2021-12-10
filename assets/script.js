
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Assignment Code
var generateBtn = document.querySelector("#generate");

//Set variable using arrays of password components
var lettersUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ",", ".", ":", ";", ">", "<", "=", "?", "[", "/", "_", "~"];

//Start function to generate password
//Add variable for password length & message prompt
function generatePassword() {
  var passwordLength = prompt("What is the desired length of your password?")
  console.log(passwordLength)
  //Set password length 8<128
  if (passwordLength < 8) {
    alert("Length must be greater than 8!")
    return;
  }
  if (passwordLength > 128) {
    alert("Length must be less than 128!")
    return;
  }
  var upperChoice = confirm("Do you want upper case letters in your password?")
  console.log(upperChoice)
  var lowerChoice = confirm("Do you want lower case letters in your password?")
  console.log(lowerChoice)
  var numberChoice = confirm("Do you want numbers in your password?")
  console.log(numberChoice)
  var specialChoice = confirm("Do you want special characters in your password?")
  console.log(specialChoice)

  var possibleChoices = []
  if (upperChoice) {
    possibleChoices = possibleChoices.concat(lettersUpperCase)
  }
  if (lowerChoice) {
    possibleChoices = possibleChoices.concat(lettersLowerCase)
  }
  if (numberChoice) {
    possibleChoices= possibleChoices.concat(numbers)
  }
  if (specialChoice) {
    possibleChoices = possibleChoices.concat(specialCharacters)
  }
  console.log(possibleChoices)
  console.log(possibleChoices[Math.floor(Math.random()*possibleChoices.length)])
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

