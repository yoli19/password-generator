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
  var length = ""
  while (length === "" || length === null || length < 8 || length > 128) {
    length = prompt("How many characters will the password have? Please enter a number between 8 and 128.");
  }
  length = parseInt(length);
  console.log("the password will have " + length + " characters.");
  return length;
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
    length: getPasswordLength(),
    lowercase: getPasswordLowercase(),
    uppercase: getPasswordUppercase(),
    numeric: getPasswordNumeric(),
    special: getPasswordSpecial(),
  }
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



//uppercase = {"A,B,C,D,E,..."}
//numeric = {1,2,3,4,5,6,7,8,9,0}
//lowercase = {a,b,c,d,e...}
//special = {!,@,#,$,...}


//if length < passwordCriteria.length {
  //random number function here
  //function (
   // array = {uppercase, lowercase, number, special}
   // random function to pick which array
   // )

  //return to array to add password to

//} else {
 // return password array contents
//}