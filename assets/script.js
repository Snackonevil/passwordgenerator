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
    var passLength = confirmLength(); //Stores user-selected input of length after criteria is met and confirmed
    var possibleString = selectCriteria(); //Stores user-selected criteria into a string
    var password = ""; //Variable to store generated characters

    //Iterates random index of possibleString by passLength times
    for (let i = 0; i < passLength; i++) {
        //Each iteration adds its randomly selected index into the password string
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
    var criteria = []; //Stores separate criteria strings in an array

    alert('Please select at least one type of character to be included in your password')
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

    //If no criteria is selected,  criteria length of zero, user is prompted to choose one and the function is recalled.
    if (criteria.length == 0) {
      console.log('you didn\'t select anything')
      alert('Uh oh! You forgot to pick one!')
      return selectCriteria()
    }
    console.log(criteria)
    
    return criteria.join("");//Returns criteria array in a single string
}


function validateCriteria() {
  


//Function to validate that generated password has each criteria
//forEach on each selected criteria array
//search() possibleString for each criteria, if returns 4 -1 then must regenerate
//how to regenerate without reprompting... maybe Math code can be a part of it with existing variables..
}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    passwordText.value = password;
    passwordText.innerHTML = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
