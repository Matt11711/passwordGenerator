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
var password;
var lowercaseCharacterCheck; 
  var uppercaseCharacterCheck;
  var numCharacterCheck; 
  var symbolCharacterCheck;
  var lowercaseCharacterRequired; 
  var uppercaseCharacterRequired; 
  var numCharacterRequired;
  var symbolCharacterRequired; 
  var finalPassword; 
var passwordLengthNum;
var passwordArray;
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

// given the type of character, makes that type of character required and adds an identifier number to the password array

var characterConfirm = function (character) {
  if (window[character + "Confirm"]) {
    window[character + "CharacterRequired"] = true;
    switch (character) {
      case "lowercase":
        passwordArray.push(1);
        break;
      case "uppercase":
        passwordArray.push(2);
        break;
      case "num":
        passwordArray.push(3);
        break;
      case "symbol":
        passwordArray.push(4);
        break;
    }
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


var generatePassword = function () {
  //setting these to false in case we have to redo the password generation
  lowercaseCharacterCheck = false;
  uppercaseCharacterCheck = false;
  numCharacterCheck = false;
  symbolCharacterCheck = false;
  password = "";

  // for the password length, add a character to the password
  for (var i = 1; i <= passwordLengthNum; i++) {

    
    //  randomly selects one of the identifier numbers above from the passwordArray
    var characterType = passwordArray[randomNumberForArray(passwordArray.length)]
    //  using that identifier number, randomly adds one of that type of character to the array, and then marks that the password contains that type of character
    switch (characterType) {
      case 1: password += lowercaseArray[randomNumberForArray(lowercaseArray.length)];
      lowercaseCharacterCheck = true
      break;
      case 2: password += uppercaseArray[randomNumberForArray(uppercaseArray.length)];
      uppercaseCharacterCheck = true
      break;
      case 3: password += numArray[randomNumberForArray(numArray.length)];
      numCharacterCheck = true
      break;
      case 4: password += symbolArray[randomNumberForArray(symbolArray.length)];
      symbolCharacterCheck = true
      break;
    }
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

// Write password to the #password input
function writePassword() {
  //selects where to put password
  var passwordText = document.querySelector("#password");
  // writes password to that location
  passwordText.value = finalPassword;
}

// selects where to read button click from
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordLength);
