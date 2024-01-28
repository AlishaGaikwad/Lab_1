/*var height = 7;
var row;
for (var i = 1; i <= height; i += 1) {
    var row = '';
    for (var j = 1; j <= i; j+=1) {
        row += '#';
    }
    document.write(row);
}*/


// Define the height of the triangle
var height = 7;

/*// Loop through each row of the triangle
for (var i = 1; i <= height; i++) {
    // Variable to hold the characters for the current row
    var row = '';

    // Loop to add '#' characters to the row
    for (var j = 1; j <= i; j++) {
        row += '#';
    }

    // Output the row to the console
    document.write(row);
}*/

// Define the height of the triangle
var height = 7;
var triangle = '';

// Loop through each row of the triangle
for (var i = 1; i <= height; i++) {
    // Variable to hold the characters for the current row
    var row = '';

    // Loop to add '#' characters to the row
    for (var j = 1; j <= i; j++) {
        row += '#';
    }

    // Append the row to the triangle string
    triangle += row + '\n' + "<br>";
}

// Output the entire triangle to the console
document.write(triangle);   


