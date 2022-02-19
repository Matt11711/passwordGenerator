// selects where to read button click from
var generateBtn = document.querySelector("#generate");

// arrays for each possible type of character in the password
var lowercaseArray = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var symbolArray = [
  " ",
  "!",
  '"',
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "\\",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var password = "";

// adds given array to the password array
var concatPasswordArray = function (arrayToConcat) {
  passwordArray = passwordArray.concat(arrayToConcat);
};
// function to return uppercase value of an input letter
var toUpper = function (letter) {
  return letter.toUpperCase();
};

// calls toUpper for each element of lowercaseArray, making the uppercaseArray
var uppercaseArray = lowercaseArray.map(toUpper);

// returns random number between 0 and the length of an array
var randomNumberForArray = function (arrayLength) {
  return Math.floor(Math.random() * arrayLength);
};

// Write password to the #password input
function writePassword() {
  //selects where to put password
  var passwordText = document.querySelector("#password");
  // writes password to that location
  passwordText.value = finalPassword;
}
// function to generate password length
generatePasswordLength = function () {
  // resetting some variables in case the button is pressed again. Maybe should declare these all as global at the top of the script but I don't know of any reason to yet
  lowercaseCharacterCheck = false;
  uppercaseCharacterCheck = false;
  numCharacterCheck = false;
  symbolCharacterCheck = false;
  lowercaseCharacterRequired = false;
  uppercaseCharacterRequired = false;
  numCharacterRequired = false;
  symbolCharacterRequired = false;
  finalPassword = "";
  // lets user input password length
  var passwordLength = prompt(
    "How long would you like your new password to be?",
    8
  );
  // turns the password length into a num for comparisons, and also rounds and decimals that were input by the user
  passwordLengthNum = parseInt(passwordLength);
  // checks for password length fitting the parameters and brings them back to the prompt for length if their password length wasn't valid. If it is valid, moves on to generating the password
  if (
    !passwordLengthNum ||
    passwordLengthNum < 4 ||
    passwordLengthNum > 128 ||
    isNaN(passwordLength)
  ) {
    alert("Please choose a numerical length between 8 and 128.");
    generatePasswordLength();
  } else generatePasswordCriteria();
};

// given the type of character, makes that type of character required and adds those characters to the password array

var characterConfirm = function (character) {
  if (window[character + "Confirm"]) {
    window[character + "CharacterRequired"] = true;
    concatPasswordArray(window[character + "Array"]);
  }
};

var generatePasswordCriteria = function () {
  passwordArray = [];
  // these ask user for the types of characters they want in the password and run character confirm for that character
  lowercaseConfirm = confirm(
    "Do you want your password to include lowercase letters?"
  );
  characterConfirm("lowercase");
  // these ask user for the types of characters they want in the password and run character confirm for that character
  uppercaseConfirm = confirm(
    "Do you want your password to include uppercase letters?"
  );
  characterConfirm("uppercase");
  // these ask user for the types of characters they want in the password and run character confirm for that character
  numConfirm = confirm("Do you want your password to include numbers?");
  characterConfirm("num");
  // these ask user for the types of characters they want in the password and run character confirm for that character
  symbolConfirm = confirm(
    "Do you want your password to include special symbols?"
  );
  characterConfirm("symbol");

  // makes the user choose again if they didn't choose any criteria for their password, otherwise it generates the password
  if (!lowercaseConfirm && !uppercaseConfirm && !numConfirm && !symbolConfirm) {
    alert("Please choose at least one type of character for your password");
    generatePasswordCriteria();
    return;
  } else generatePassword();
};
// checks for a character in a the password, checks to see if it is the given character type
var checkForCharacter = function (character) {
  // if you need this character type and don't already have one in the password
  if (
    window[character + "CharacterRequired"] &&
    !window[character + "CharacterCheck"]
  ) {
    // for each character in this character type array
    for (var i = 0; i < window[character + "Array"].length; i++) {
      // if the character in the password is the current character then say that the password has this type of character
      if (
        window[character + "Array"][i] === password.charAt(password.length - 1)
      ) {
        window[character + "CharacterCheck"] = true;
        break;
      }
    }
  }
};

var generatePassword = function () {
  //setting these to false in case we have to redo the password generation
  lowercaseCharacterCheck = false;
  uppercaseCharacterCheck = false;
  numCharacterCheck = false;
  symbolCharacterCheck = false;
  password = "";

  // for the password length, add a character to the password
  for (var i = 1; i <= passwordLengthNum; i++) {
    // adds next letter to password
    password += passwordArray[randomNumberForArray(passwordArray.length)];
    // checks to see if that letter matches any of the expected criteria
    checkForCharacter("lowercase");
    checkForCharacter("uppercase");
    checkForCharacter("num");
    checkForCharacter("symbol");
  }
  // if any of the criteria don't match, remake a password. otherwise write the password!
  if (
    lowercaseCharacterCheck != lowercaseCharacterRequired ||
    uppercaseCharacterCheck != uppercaseCharacterRequired ||
    numCharacterCheck != numCharacterRequired ||
    symbolCharacterCheck != symbolCharacterRequired
  ) {
    generatePassword();
  } else finalPassword = password;
  writePassword();
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordLength);
