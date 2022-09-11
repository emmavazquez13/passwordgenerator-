// Assignment Code 
var generateBtn = document.querySelector("#generate");

// This function is in charge of the password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function generates password and variables are in charge of password character length 
function generatePassword () {
  var passwordLength = prompt("How many characters would you like in your password?");
  var inLength = parseInt(passwordLength);
  console.log(inLength);

  if (inLength < 8 || inLength > 128 ||isNaN(inLength)) {
    alert ("Please enter a number between 8 and 128.");
    return;
  }

// These variables are in charge of password characters, upper case, lower case, numbers, and special characters
  var passwordCharacters = [];
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
  var lowerCase = "abcdefghiklmnopqrstuvwxyz" .split("");
  var numbers = "0123456789" .split ("");
  var specialCharacters= "!@#$%^&*()-+?<>}{|~;" .split("");

// This variable is in charge of lower case letters 
  var lowerCaseLetters = confirm("Would you like to add lower case letters?");
  if (lowerCaseLetters === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      passwordCharacters.push(lowerCase[i]);
    }
  }

// This variable is in charge of upper case letters
  var upperCaseLetters = confirm("Would you like to add upper case letters?");
  if (upperCaseLetters === true) {
    for (var i =0; i < upperCase.length; i++) {
      passwordCharacters.push(upperCase[i]);
    }
  }

//This variable is in charge of numbers 
  var numberCharacters = confirm("Would you like to add numbers?");
  if(numberCharacters === true) {
    for (var i = 0; i < numbers.length; i++) {
      passwordCharacters.push(numbers[i]);
    }
  }

// This variable is in charge of special characters 
  var specialLetterCharacters = confirm("Would you like to add special characters?");
  if (specialLetterCharacters === true) {
    for (var i = 0; i < specialCharacters.length; i++) {
      passwordCharacters.push(specialCharacters[i]);
    }
  }

// This variable is in charge of the final password given 
  var finalPassword = "";
  for (var i = 0; i < inLength; i++) {
    passwordCharacters[
      Math.floor(Math.random() * passwordCharacters.length)];
    finalPassword +=
      passwordCharacters[
        Math.floor(Math.random() * passwordCharacters.length)];
      }
      return finalPassword;
    }

// This is an event listener to generate button 
generateBtn.addEventListener("click", writePassword);