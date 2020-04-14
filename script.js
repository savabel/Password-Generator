// Special characters for the function created
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
function generatePassword() {
  // open the window with Text "How many characters long do you want?"
  var passwordLength = Number(window.prompt("How many characters long do you want?", "From 4-100"));
  // open the window with Text "Do you want to Include Lower Case Letters?"
  var lowerCases = confirm("Do you want to Include Upper Case Letters?");  
  // open the window with Text "Do you want to Include Upper Case Letters?"
  var upperCases = confirm("Do you want to Include Upper Case Letters?");  
  // open the window with Text "Do you want to Include Upper Case Letters?"
  var numbers = confirm("Do you want to Include Numbers?"); 
   // open the window with Text "Do you want to Include Upper Case Letters?"
  var special = confirm("Do you want to Include Symbols?");
   // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;

  // Minimum "spaceholder" value for lowerCases, upperCases, numbers & specialCharacters
  var minimumNumbers = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";


//Function to generate "spaceholder" value for lowerCases, upperCases, numbers & specialCharacters
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
  };

// Acknowledge all the users's selects answer to create the password complexity

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;

  }

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;

  }

 // empty string variable for the for loop below
  var randomPasswordGenerated = "";

// Get random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }

// to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}