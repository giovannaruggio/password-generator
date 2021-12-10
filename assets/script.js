

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set variable using arrays of password components
var lettersUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ",", ".", ":", ";", ">", "<", "=", "?", "[", "/", "_", "~"];
var passwordLength = 0;
var generatedPassword = "";

// Start function to generate password
// Add variable for password length & message prompt
function generatePassword() {
  var passwordLength = prompt("What is the desired length of your password?")
  console.log(passwordLength)
  // Set password length 8<128
  if (passwordLength < 8) {
    alert("Length must be greater than 8!")
    return;
  }
  if (passwordLength > 128) {
    alert("Length must be less than 128!")
    return;
  }
// Add variables and confirm messages for each type of character
  var upperChoice = confirm("Would you like upper case letters in your password?")
  console.log(upperChoice)
  var lowerChoice = confirm("Would you like lower case letters in your password?")
  console.log(lowerChoice)
  var numberChoice = confirm("Would you like numbers in your password?")
  console.log(numberChoice)
  var specialChoice = confirm("Would you like special characters in your password?")
  console.log(specialChoice)

// If statments to generate possible choices for password at random
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

  // Write Math function to generate random characters
  console.log(possibleChoices)
  console.log(possibleChoices[Math.floor(Math.random()*possibleChoices.length)])

  // Set loop to allow the chosen amount of characters to be selected
  for (var i = 0; i < passwordLength; i++) {
    var currentCharacter = possibleChoices[Math.floor(Math.random()*possibleChoices.length)]
    generatedPassword = generatedPassword.concat(currentCharacter)
    console.log(generatedPassword)
  }
  // Return generated password to display on screen
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


