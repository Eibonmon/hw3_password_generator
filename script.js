// Assignment Code

// Array of characters
var specialCharacters = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', '<', '>', '=', '?', '@', '[', ']', '\\', '^', '_', '{', '}', '|', '~'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// function to input user password option including password length, special, numberic, lower case and upper case characters
function getPasswordOptions() {
  var length = parseInt(
    prompt("Enter the number of characters that you want in your password")
  );

  if (isNaN(length) === true) {
    alert ('Must enter a valid number');
    return;
  }

  if (length < 8) {
    alert('Password must be at least 8 characters');
    return;
  }

  if (length > 128) {
    alert('Password must be less than 128 characters');
    return;
  }

  var specialCharactersConfirm = confirm (
    'Click Ok to inclue special characters in your password'
    );
  var numericCharactersConfirm = confirm (
    'Click Ok to inclue numeric characters in your password'
    );
  var lowerCasedCharactersConfirm = confirm (
    'Click Ok to inclue lower case characters in your password'
    );
  var upperCasedCharactersConfirm = confirm (
    'Click Ok to inclue upper case characters in your password'
    );

// Check if the user didnt choose any option
  if (specialCharactersConfirm === false && 
    numericCharactersConfirm === false && 
    lowerCasedCharactersConfirm === false && 
    upperCasedCharactersConfirm === false) {
    alert('Must include at least one character type');
    return;
  }

  // Store user options
  var passwordOptions = {
    length: length, 
    specialCharactersConfirm: specialCharactersConfirm,
    numericCharactersConfirm: numericCharactersConfirm,
    lowerCasedCharactersConfirm: lowerCasedCharactersConfirm,
    upperCasedCharactersConfirm: upperCasedCharactersConfirm
  };

  return passwordOptions;
}

// function of getting a random element from the array above
  function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
  }

// function to generate password
  function generatePassword () {
    var options = getPasswordOptions();
    var result = [];
    var possibleCharacters = [];
    var guaranteedCharacters = [];
    
  if (options.specialCharactersConfirm) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters));
  }

  if (options.numericCharactersConfirm) {
    possibleCharacters = possibleCharacters.concat(numericCharacters);
    guaranteedCharacters.push(getRandom(numericCharacters));
  }

  if (options.lowerCasedCharactersConfirm) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacters);
    guaranteedCharacters.push(getRandom(lowerCasedCharacters));
  }

  if (options.upperCasedCharactersConfirm) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacters);
    guaranteedCharacters.push(getRandom(upperCasedCharacters));
  }

  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);
    
    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
