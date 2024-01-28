// Prompt the user to enter a number
/*var number = parseInt(prompt("Enter a number to count down from:"));

// Check if the input is a valid number
if (!isNaN(number)) {
    // Loop from the entered number down to 0
    for (var i = number; i >= 0; i--) {
        console.log(i);
    }
} else {
    console.log("Invalid input. Please enter a valid number.");
}*/

// Prompt the user to enter a number
var userInput = prompt("Enter a number to count down from:");

// Convert the user input to a number
var countdownNumber = parseInt(userInput);

// Check if the input is a valid number
if (!isNaN(countdownNumber)) {
    // Loop from countdownNumber down to 0
    for (var i = countdownNumber; i >= 0; i--) {
        document.write(i + "<br>");
    }
} else {
    document.write("Invalid input. Please enter a valid number.");
}
