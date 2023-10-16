// Assignment Code
var generateBtn = document.querySelector("#generate");

//var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var passwordLength = 20;
//var password = "";
//var passwordLength = prompt("Your password must be between 8 and 128 characters" + "It must contain letters, numbers and symbols");
// These three things are important to look up:
// prompt
// confirm
// alert

// var.passwordLength = prompt("what do you want your password to be? Between 8 and 30 characters");

function generate(){
  const length = document.getElementById("length").value;
  const length = document.getElementById("numbers").ariaChecked;
  const length = document.getElementById("upperCase").ariaChecked;
  const length = document.getElementById("lowerCase").ariaChecked;
  const length = document.getElementById("symbols").ariaChecked;
}

function generatePassword(length, numbers, upperCase, lowerCase, symbols) { 
  
  var password = "";
  
  if (numbers){
    password += "0123456789";
  }

  if (upperCase){
    password = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if (lowerCase){
    password = "abcdefghijklmnopqrstuvwxyz";
  }

  if (upperCase){
    password = "!£$%^&*";
  }
}

// GIVEN I need a new, secure password:-
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

//var passwordLength = prompt("Your password must be between 8 and 128 characters");

//if (passwordLength < 8 ) {
 // console.log()
//}
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); // been called but doesnt exist
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
