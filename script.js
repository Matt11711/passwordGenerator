// Assignment Code
var generateBtn = document.querySelector("#generate");
// arrays for each possible type of character in the password, to be added to the password array based on user input
var lowercaseArray = ["q","w","e","r","t","y","u","i","o",'p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var uppercaseArray = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M'];
var numArray = ["1",'2','3','4','5','6','7','8','9','0'];
var symbolArray = [" ", "!", "\"", "#","$","%","&","'", "(", ")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]", "\\","^","_","`","{","|","}","~"]

var randomNumbeForArray = function (arrayLength) {
  var value = Math.floor((Math.random() * arrayLength)-1);

  return value;
};
// Write password to the #password input
function writePassword() {
  var password = generatePasswordLength();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var generatePasswordLength = function() {
  var passwordLength = prompt("How long would you like your new password to be?", 8);
    passwordLengthNum = parseInt(passwordLength);
   if (!passwordLength || passwordLength < 8 || passwordLength > 128 ) {
     alert("Please choose a length between 8 and 128.");
     generatePassword();
   }
  };

  var generatePassword = function() {
      
   
   passwordArray = [];
  
  var lowercaseConfirm = confirm("Do you want your password to include lowercase letters?");
  if (lowercaseConfirm) {

    concatPasswordArray(lowercaseArray);
  };
var uppercaseConfirm = confirm("Do you want your password to include uppercase letters?");

if (uppercaseConfirm) {
  
 concatPasswordArray(uppercaseArray);
};
var numConfirm = confirm("Do you want your password to include numbers?");

if (numConfirm) {
  
  concatPasswordArray(numArray);
};
var symbolConfirm = confirm("Do you want your password to include special symbols?");

if (symbolConfirm) {
  
  concatPasswordArray(symbolArray);
};
for (var i=1; i<=passwordLengthNum; i++) {
  if (password) {
    var nextCharacter = randomNumberForArray(passwordArray.length)
    if  (!lowercaseCharacterCheck && ( nextCharacter="a"))
  password = password + passwordArray[nextCharacter] 
}
 else {
var password = passwordArray[randomNumberForArray(passwordArray.length)]
 };
};
return password;
};
  

var concatPasswordArray = function(arrayToConcat) {
   passwordArray = passwordArray.concat(arrayToConcat);
  
};