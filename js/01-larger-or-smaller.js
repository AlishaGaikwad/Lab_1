var first;
var second;

first = parseInt(window.prompt("Enter the First Integer:"));
second = parseInt(window.prompt("Enter the Second Integer:"));


if(isNaN(first) || isNaN(second))
{
    window.document.write("Please enter valid integers.");
}
else if (first >= second){
    window.document.write("Larger amongts the Given numbers " + first + " and " + second + " is " + first);
    }
else if (second >= first){
    window.document.write("Larger amongts the Given numbers " + first + " and " + second + " is " + second);
    }
else
{
    window.document.write("Both are the equal numbers");
}
