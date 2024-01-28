
var coinFlip = Math.floor(Math.random() * 2); 
var choice = prompt("Select 'Heads' or 'Tails'").toLowerCase();


if (coinFlip === 0) { 
    if (choice === "heads") {
        alert("The flip was heads and you chose heads...you win!");
    } else {
        alert("The flip was heads but you chose tails...you lose!");
    }
} else {
    if (choice === "heads") {
        alert("The flip was tails but you chose heads...you lose!");
    } else {
        alert("The flip was tails and you chose tails...you win!");
    }
}
