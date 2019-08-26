/*********************** 
    Arrays/Var
************************/
var guesses = 5;
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
    selectedBand[i] === " " ? placeHolder.push(" ") : placeHolder.push("_");
  }
  
$('#current-container').append(placeHolder);


// give div image based on band name
if (selectedBand == "ajj"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/ajj.jpg");

} else if (selectedBand == "bob dylan") {
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/dylan.jpg");

} else if (selectedBand == "cat be damned"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/cat.jpg");

} else if (selectedBand == "coma cinema"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/coma.jpg");

} else if (selectedBand == "david bowie"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/bowie.jpg");

} else if (selectedBand == "days n daze"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/daze.jpg");

} else if (selectedBand == "elvis depressedly"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/elvis.jpg");

} else if (selectedBand == "him"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/him.jpg");

} else if (selectedBand == "hotel books"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/hotel.jpg");

} else if ( selectedBand == "johnny hobo and the freight trains"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/johny.jpg");

} else if (selectedBand == "mathew lee cothranm"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/mathew.jpg");

} else if (selectedBand == "my chemical romance"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/mcr.jpg");

} else if (selectedBand == "my pizza my world"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/pizza.jpg");

} else if (selectedBand == "old gray"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/old.jpg");

} else if (selectedBand == "ramshackle glory"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/ram.jpg");

} else if (selectedBand == "teen suicide"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/teen.png");

} else if (selectedBand == "the front bottoms"){
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/front.jpg");

} else if (selectedBand == "the hotelier") {
    
    $('.band-img img').attr("src","../Word-Guess-Game/assets/images/thehotel.jpg");

} 

// press key function
$(document).keypress(function(e) {
    var letterClicked = String.fromCharCode(e.which);
  
    if (selectedBand.indexOf(letterClicked) < 0) {
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
    } else {
        // split selected band string and map through it.
        selectedBand.split("").map((letter, index) => {
            // checks to see if one of the split letters are equal to the button pressed
            if (letter.toLowerCase() === letterClicked) {
                placeHolder[index] = selectedBand[index];
            } 
        });
      
    }

     $('#current-container').html(placeHolder);
    
     // checks to see if the placeholder is equal to the band name
    if (placeHolder.join("") == selectedBand) {
        // runs after letter checked
        setTimeout(() => {
                alert("you win");
        });
        // reloads game
        location.reload();
    }

  });










