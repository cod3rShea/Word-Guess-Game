/*********************** 
    Arrays
************************/
var correctLetters = [];
var wrongLetters = [];

// Band Names array
var bandNames = ["AJJ", "Bob Dylan", "cat be damned", "Coma Cinema", "David Bowie", "Days N Daze", "elvis depressedly", "HIM", "Hotel Books", "Johnny Hobo And The Freight Trains", "mathew lee cothranm", "My Chemical Romance", "My Pizza My3 World", "Old Gray", "Ramshackle Glory", "teen suicide", "The Front Bottoms", "The Hotelier"]

// picks a random band from the band array
var randomNumber = Math.floor(Math.random() * bandNames.length);
var selectedBand = bandNames[randomNumber];

console.log(selectedBand);





