// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy-icon");
var passwordText = document.querySelector("#password");

copyBtn.addEventListener("click", copyPass);

//Copies generated password to clipboard, alerts user if field is empty
function copyPass() {
    if (passwordText.value.length == 0) {
        alert("You have to generate a password first, Silly!");
    } else {
        password.select();
        navigator.clipboard.writeText(password.value);
        alert("Password copied to keyboard! Be sure to write it down!");
    }
}

function generatePassword() {
    var passLength = confirmLength(); //Stores user-selected input of length after it meets criteria and is confirmed
    var possibleString = selectCriteria(); //Stores user-selected criteria into a string
    var password = "";

    console.log(passLength)
    console.log(possibleString);
    // console.log(Math.floor(Math.random()) * passLength)
    console.log(Math.floor(Math.random() * possibleString.length));
    console.log(possibleString[Math.floor(Math.random() * possibleString.length)]);

    for (let i = 0; i < passLength; i++) {
        password += possibleString[Math.floor(Math.random() * possibleString.length)];
    }

    console.log(password);
    return password;
}

// Prompts user input for character length and confirms
function confirmLength() {
    var input = prompt("Enter password length (8 - 128)");

    //Alerts and recalls function if length does not meet requirements
    if (input < 8 || input > 126 || !Number(input)) {
        alert("INVALID: Please enter number no less than 8 and no more than 128");
        console.log("try again");
        var input = "";
        return confirmLength();
    }

    //If length meets requirements, user is asked to confirm
    if (input >= 8 && input <= 128) {
        var youSure = confirm(`You chose ${input} characters for your password`);

        if (!youSure) {
            console.log("i wanna change it");
            return confirmLength();
        } else {
            return input;
        }
    }
}

//Prompts user for password criteria and stores as possibleString variable
function selectCriteria() {
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = lowerCase.toUpperCase();
    const specChar = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
    const numbers = "1234567890";
    var criteria = []; //Stores separate criteria strings in an array before joining them into one

    var nums = confirm("numbers?");
    if (nums) {
        console.log("yes numbers");
        criteria.push(numbers);
    } else {
        console.log("no numbers");
    }

    var lowCase = confirm("lowercase?");
    if (lowCase) {
        criteria.push(lowerCase);
        console.log("yes lower");
    } else {
        console.log("no lower");
    }

    var uppCase = confirm("uppercase?");
    if (uppCase) {
        criteria.push(upperCase);
        console.log("yes upper");
    } else {
        console.log("no upper");
    }

    var symbols = confirm("symbols?");
    if (symbols) {
        criteria.push(specChar);
        console.log("yes symbols");
    } else {
        console.log("no symbols");
    }

    //I need to include a case if none are selected to alert and recall function

    console.log(criteria.join(""));
    return criteria.join("");
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    passwordText.value = password;

    passwordText.innerHTML = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// ## Acceptance Criteria
// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
