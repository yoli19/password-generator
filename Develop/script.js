// Assignment code here
// when you click "generate password" a series of window prompts pop up
// the first one will ask for the length of password between 8 to 128 characters
// second one will ask whether to include lowercase characters
// third one will ask whether to include uppercase characters
// fourth one will as whether to include numeric values
// fifth one will ask whether to include special characters
// there should be a pop up to loop you back if you said no to all
// if at least one criteria was selected then the random password will generate in the text area

var getPasswordLength = function() {
  var passwordlength = ""
  while (passwordlength === "" || passwordlength === null || passwordlength < 8 || passwordlength > 128) {
    passwordlength = prompt("How many characters will the password have? Please enter a number between 8 and 128.");
  }
  passwordlength = parseInt(passwordlength);
  console.log("the password will have " + passwordlength + " characters.");
  return passwordlength;
}

var getPasswordLowercase = function() {
  var lowercase = ""
  while (lowercase === "" || lowercase === null) {
    lowercase = confirm("Will the password use lowercase letters?");
  }
  console.log("the password will have lowercase letters? " + lowercase);
  return lowercase;
}

var getPasswordUppercase = function() {
  var uppercase = ""
  while (uppercase === "" || uppercase === null) {
    uppercase = confirm("Will the password use uppercase letters?");
  }
  console.log("the password will have uppercase letters? " + uppercase);
  return uppercase;
}

var getPasswordNumeric = function() {
  var numeric = ""
  while (numeric === "" || numeric === null) {
    numeric = confirm("Will the password use numeric values?");
  }
  console.log("the password will have numeric values? " + numeric);
  return numeric;
}

var getPasswordSpecial = function() {
  var special = ""
  while (special === "" || special === null) {
    special = confirm("Will the password use special characters?");
  }
  console.log("the password will have special characters? " + special);
  return special;
}

function generatePassword() {
  var passwordCriteria = {
    passwordlength: getPasswordLength(),
    lowercase: getPasswordLowercase(),
    uppercase: getPasswordUppercase(),
    numeric: getPasswordNumeric(),
    special: getPasswordSpecial(),
  }
  var lowerAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var numericValues = [0,1,2,3,4,5,6,7,8,9];
  var specialCharacters = ["!","#","$","%","&","*","+","-",".","/","<","=",">","?","@"];
  var usedCharacters = [];
  var passwordarray = [];
  if (!passwordCriteria.lowercase && !passwordCriteria.uppercase && !passwordCriteria.numeric && !passwordCriteria.special) {
    window.alert("You must include at least one type of character in your password!");
    generatePassword();
  }
  if (passwordCriteria.lowercase) {
    usedCharacters = usedCharacters.concat(lowerAlphabet);
  }
  if (passwordCriteria.uppercase) {
    usedCharacters = usedCharacters.concat(upperAlphabet);
  }
  if (passwordCriteria.numeric) {
    usedCharacters = usedCharacters.concat(numericValues);
  }
  if (passwordCriteria.special) {
    usedCharacters = usedCharacters.concat(specialCharacters);
  }
  console.log(usedCharacters);
  while (passwordarray.length < passwordCriteria.passwordlength) {
    const random = Math.floor(Math.random() * usedCharacters.length);
    console.log(usedCharacters[random]);
    passwordarray.push(usedCharacters[random]);
  } 
  let finalPassword = passwordarray.join("");
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);