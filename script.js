
// Query selector for code assignment
document.querySelector("#generate").addEventListener("click", writePassword);


//arrays to hold characters
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",  "Z"];


//Variable initialization
var passwordLength = "";
var confirmNumericCharacters;
var confirmSpecialCharacters;
var confirmLowercaseLetters;
var confirmUppercaseLetters;


//Prompt to obtain user input for password length
function generatePassword() {
    var passwordLength = (prompt("Choose a number of characters between 8 and 128"));

    //while loop for incorrect selection
    while (passwordLength <= 7 || passwordLength >= 129) {
        alert("Your password must be between 8 and 128 characters. Try again");
        var passwordLength = (prompt("How many characters would you like to include between 8 and 128?"));
    }


//User input for character types in password
var confirmNumericCharacters = confirm("Click ok to confirm inclusion of numeric characters");
var confirmSpecialCharacters = confirm("Click ok to confirm inclusion of special characters");
var confirmLowercaseLetters = confirm("Click ok to confirm inclusion of lowercase letters");
var confirmUppercaseLetters = confirm("Click ok to confirm inclusion of uppercase letters");


//Loop for non selection of any character option
while (confirmNumericCharacters === false && confirmSpecialCharacters === false && confirmLowercaseLetters === false && confirmUppercaseLetters === false) {
    alert("Please choose at least one character");
    var confirmNumericCharacters = confirm("Click ok to cofnirm inclusion of numeric characters");
    var confirmSpecialCharacters = confirm("Click ok to cofnirm inclusion of special characters");
    var confirmLowercaseLetters = confirm("Click ok to cofnirm inclusion of lowercase letters");
    var confirmUppercaseLetters = confirm("Click ok to cofnirm inclusion of uppercase letters");

}

//Action to fix password

var passwordCharacters = [];

if (confirmNumericCharacters) {
    passwordCharacters = passwordCharacters.concat(numericCharacters);
}

if (confirmSpecialCharacters) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
}

if (confirmLowercaseLetters) {
    passwordCharacters = passwordCharacters.concat(lowercaseLetters);
}

if (confirmUppercaseLetters) {
    passwordCharacters = passwordCharacters.concat(uppercaseLetters);
}

console.log(passwordCharacters);


//Strings to be filled loop selecting random characters from the array

var randomPassword = "";

for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + (passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]);
    console.log(randomPassword);

    
}

return randomPassword;
}




//Write password to the #password input
function writePassword() {
    var password = generatePassword(passwordLength);
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}
