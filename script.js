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
    passwordLengthNum < 8 ||
    passwordLengthNum > 128 ||
    isNaN(passwordLength)
  ) {
    alert("Please choose a numerical length between 8 and 128.");
    generatePasswordLength();
  } else generatePasswordCriteria();
};


var generatePasswordCriteria = function () {
  passwordArray = [];

  var lowercaseConfirm = confirm(
    "Do you want your password to include lowercase letters?"
  );
  if (lowercaseConfirm) {
    lowercaseCharacterRequired = true;
    concatPasswordArray(lowercaseArray);
  }
  var uppercaseConfirm = confirm(
    "Do you want your password to include uppercase letters?"
  );

  if (uppercaseConfirm) {
    uppercaseCharacterRequired = true;
    concatPasswordArray(uppercaseArray);
  }
  var numConfirm = confirm("Do you want your password to include numbers?");

  if (numConfirm) {
    numCharacterRequired = true;
    concatPasswordArray(numArray);
  }
  var symbolConfirm = confirm(
    "Do you want your password to include special symbols?"
  );

  if (symbolConfirm) {
    symbolCharacterRequired = true;
    concatPasswordArray(symbolArray);
  }
  if (!lowercaseConfirm && !uppercaseConfirm && !numConfirm && !symbolConfirm) {
    alert("Please choose at least one type of character for your password");
    generatePasswordCriteria();
    return;
  } else generatePassword();
};

var generatePassword = function () {
  lowercaseCharacterCheck = false;
  uppercaseCharacterCheck = false;
  numCharacterCheck = false;
  symbolCharacterCheck = false;
  var password = "";
  for (var i = 1; i <= passwordLengthNum; i++) {
    var nextCharacterLocation = randomNumberForArray(passwordArray.length);

    if (lowercaseCharacterRequired && !lowercaseCharacterCheck) {
      for (
        var lowercaseIndex = 0;
        lowercaseIndex < lowercaseArray.length;
        lowercaseIndex++
      ) {
        if (
          lowercaseArray[lowercaseIndex] ===
          passwordArray[nextCharacterLocation]
        ) {
          lowercaseCharacterCheck = true;
          break;
        }
      }
    }
    if (uppercaseCharacterRequired && !uppercaseCharacterCheck) {
      for (
        var uppercaseIndex = 0;
        uppercaseIndex < uppercaseArray.length;
        uppercaseIndex++
      ) {
        if (
          uppercaseArray[uppercaseIndex] ===
          passwordArray[nextCharacterLocation]
        ) {
          uppercaseCharacterCheck = true;
          break;
        }
      }
    }
    if (numCharacterRequired && !numCharacterCheck) {
      for (var numIndex = 0; numIndex < numArray.length; numIndex++) {
        if (numArray[numIndex] === passwordArray[nextCharacterLocation]) {
          numCharacterCheck = true;
          break;
        }
      }
    }

    if (symbolCharacterRequired && !symbolCharacterCheck) {
      for (
        var symbolIndex = 0;
        symbolIndex < symbolArray.length;
        symbolIndex++
      ) {
        if (symbolArray[symbolIndex] === passwordArray[nextCharacterLocation]) {
          symbolCharacterCheck = true;
          break;
        }
      }
    }

    password = password + passwordArray[nextCharacterLocation];
  }

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

var concatPasswordArray = function (arrayToConcat) {
  passwordArray = passwordArray.concat(arrayToConcat);
};

// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordLength);
