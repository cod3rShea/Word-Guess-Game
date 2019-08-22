/*********************** 
    Arrays
************************/
var correctLetters = [];
var wrongLetters = [];

// Band Names array
var bandNames = ["AJJ", "Bob Dylan", "cat be damned", "Coma Cinema", "David Bowie", "Days N Daze", "elvis depressedly", "HIM", "Hotel Books", "Johnny Hobo And The Freight Trains", "mathew lee cothranm", "My Chemical Romance", "My Pizza My World", "Old Gray", "Ramshackle Glory", "teen suicide", "The Front Bottoms", "The Hotelier"]

// creates a random number between 1 and the length of the band array.
var randomNumber = Math.floor(Math.random() * bandNames.length);
// picks a random band based of the length of the randomband array
var selectedBand = bandNames[randomNumber];

console.log(selectedBand);
console.log(bandNames[randomNumber].length);

for (i = 0; i < bandNames[randomNumber].length; i++) {
    var underlineSpan = document.createElement("span"); 
    document.getElementById("current-word").appendChild(underlineSpan);
}






