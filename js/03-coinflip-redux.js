var coinFlip;

for (var i = 1; i < 10; i += 1);
{
    coinFlip = Math.round(Math.random());
}
if (coinFlip === 0) {
    document.write("Heads");
}
else
{
    document.write("Tails");
}