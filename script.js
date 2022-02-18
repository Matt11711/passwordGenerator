// Assignment Code
var generateBtn = document.querySelector("#generate");
// arrays for each possible type of character in the password, to be added to the password array based on user input
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
var uppercaseArray = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
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
finalPassword = ""
var randomNumberForArray = function (arrayLength) {
  var value = Math.floor(Math.random() * arrayLength);

  return value;
};
// Write password to the #password input
function writePassword() {
 
  var password = finalPassword
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generatePasswordLength = function () {
  lowercaseCharacterCheck = false;
  uppercaseCharacterCheck = false;
  numCharacterCheck = false;
  symbolCharacterCheck = false;
  lowercaseCharacterRequired = false;
  uppercaseCharacterRequired = false;
  numCharacterRequired = false;
  symbolCharacterRequired = false;
  finalPassword = ""
  var passwordLength = prompt(
    "How long would you like your new password to be?",
    8
  );
  passwordLengthNum = parseInt(passwordLength);
  if (
    !passwordLength ||
    passwordLength < 4 ||
    passwordLength > 128 ||
    isNaN(passwordLength)
  ) {
    alert("Please choose a numerical length between 8 and 128.");
    generatePasswordLength();
  }
  else
  generatePasswordCriteria()
};

 

var generatePasswordCriteria = function() {
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
  }
else generatePassword()
}


  var generatePassword = function () {
    lowercaseCharacterCheck = false;
  uppercaseCharacterCheck = false;
  numCharacterCheck = false;
  symbolCharacterCheck = false;
  var password = ""
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
          if (
            symbolArray[symbolIndex] === passwordArray[nextCharacterLocation]
          ) {
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
  }
  else
  finalPassword = password
  writePassword()

};

var concatPasswordArray = function (arrayToConcat) {
  passwordArray = passwordArray.concat(arrayToConcat);
};
var tryAgain = function () {
  lowercaseCharacterCheck = false;
  uppercaseCharacterCheck = false;
  numCharacterCheck = false;
  symbolCharacterCheck = false;
  console.log("HI")
  for (var i = 1; i <= passwordLengthNum; i++) {
    if (password) {
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
          if (
            symbolArray[symbolIndex] === passwordArray[nextCharacterLocation]
          ) {
            symbolCharacterCheck = true;
            break;
          }
        }
      }

      password = password + passwordArray[nextCharacterLocation];
    } else {
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
            if (
              symbolArray[symbolIndex] === passwordArray[nextCharacterLocation]
            ) {
              symbolCharacterCheck = true;
              break;
            }
          }
        }

        var password = passwordArray[nextCharacterLocation];
      }
    
  }
 
  if (
    lowercaseCharacterCheck != lowercaseCharacterRequired ||
    uppercaseCharacterCheck != uppercaseCharacterRequired ||
    numCharacterCheck != numCharacterRequired ||
    symbolCharacterCheck != symbolCharacterRequired
  ) {
    tryAgain();
  }
  else
  finalPassword = password;
  writePassword()
};
// Add event listener to generate button
generateBtn.addEventListener("click", generatePasswordLength);
