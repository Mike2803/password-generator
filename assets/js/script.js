// Assignment code here
var smLttrs = 'abcdefghijklmnopqrstuvwxyz';
var capLttrs = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
var nbrs = '1234567890';
var spChars = '~!@#$%^&*()_+{}:?><;.,';
var password = '';
var avalChars = '';


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Determine the desired length of the password.
  var pwLength = prompt('How many characters do you want in your password? \nPassword needs to be at least 8, but no more than 128 characters.')

  // Verify the password length entered meets the length requirements
  if (pwLength >= 8 && pwLength <= 128) {
    console.log(pwLength)
  }

  // If password length provided is less than the min or more than the max
  // will return and error and require the user to start again.
  // Password length criteria must be met before user can select desired password character content.
  else {
    alert('Your password must be at least 8, but no more than 128 characters. \nPlease enter a valid number between 8 & 128.')
    return '';
  }

  // Determine if user wants lower case letters in the password.
  var qrySmLttrs = confirm('Do you want to use lower case (a-z) letters in your password?')

  // Determine if user wants upper case letters in the password.
  var qryCapLttrs = confirm('Do you want to use upper case (A-Z) letters in your password?')

  // Determine if user wants numbers in the password.
  var qryNbrs = confirm('Do you want to use numbers (0-9) in your password?')

  // Determine if user wants special characters in the password.
  var qrySpChars = confirm('Do you want to use special characters (!#$%&\'()*+,-./:;<=>?@[]^_`{|}~) letters in your password?')

  // Validate at least one criteria was selected
  // Execute random character selection based on password length
  // If lower case letters are wanted, randomly select a letter from the smLttrs array.
  if (qrySmLttrs) {
    avalChars += smLttrs
  }

  // If upper case letters are wanted, randomly select a letter from the capLttrs array.
  if (qryCapLttrs) {
    avalChars += capLttrs
  }

  // If numbers are wanted, randomly select a number from the nbrs array.
  if (qryNbrs) {
    avalChars += nbrs
  }

  // If special characters are wanted, randomly select a character from the spChars array.
  if (qrySpChars) {
    avalChars += spChars
  }
  // Will stop the process and return an alert if there are no character types selected.
  if (
    !qrySmLttrs && !qryCapLttrs && !qryNbrs && !qrySpChars
  ) {
    return alert('Please select at least one criteria!');
    
  }

  for (var i = 0; i < pwLength; i++) {
    // Selects the characters that will be in the password randomly from
    // the characters that were pulled into availChars. Will loop through
    // selecting characters at random until there are enough characters to
    // fullfil the password length requirement
    password +=avalChars[Math.floor(Math.random () * avalChars.length)];
  }
  return password;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
