/*********************** 
    Arrays/Var
************************/
var guesses = 5;
var correctLetters = [];
var wrongLetters = [];
var placeHolder = [];

// Band Names array
var bandNames = ["AJJ", "Bob Dylan", "cat be damned", "Coma Cinema", "David Bowie", "Days N Daze", "elvis depressedly", "HIM", "Hotel Books", "Johnny Hobo And The Freight Trains", "mathew lee cothranm", "My Chemical Romance", "My Pizza My World", "Old Gray", "Ramshackle Glory", "teen suicide", "The Front Bottoms", "The Hotelier"];


// creates a random number between 1 and the length of the band array.
var randomNumber = Math.floor(Math.random() * bandNames.length);
// picks a random band based of the length of the randomband array
var selectedBand = bandNames[randomNumber];
// Lowercase Band Name
var selectedBand = selectedBand.toLowerCase();

console.log(selectedBand);

// add place holder based on length of band name
for (i = 0; i < selectedBand.length; i++) {
    placeHolder.push("<li></li>");
}

for (j = 0; j < placeHolder.length; j++) {
    $('#current-container').append('');
}


$('#current-container').append(placeHolder);

// press key function
$(document).keypress( function(e) {
    var letterClicked = String.fromCharCode(e.which);
    
    if (selectedBand.indexOf(letterClicked)  > -1 ){
        // adds correct letter to the array
        correctLetters.push(letterClicked);
    
        placeHolder[selectedBand.indexOf(letterClicked)] = letterClicked;
        //  combines the array
        var joinArray = placeHolder.join("");
        
        // appand 
        $('#current-container').html("").append(joinArray);
        
        if (joinArray == selectedBand) {
            alert("you win");
            location.reload();
        }
    } else {
        // add wrong guess to wrong letter array
        wrongLetters.push(letterClicked);
        
        // append the wrong letters to the guessed letter container
        $('#guessed-container').html("").append(wrongLetters);
        
        // loose if you guess wrong five times
        if (wrongLetters.length > 4 ) {
            $('.guesses-left-container').html("").append("You Loose");
        } else {
            //  subtract guesses
            guesses -= 1;
            // update guess container
            $('.guesses-left-container').html("").append(guesses);
        }
        

    }    
});








