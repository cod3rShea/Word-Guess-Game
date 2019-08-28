/*********************** 
    Arrays/Var
************************/
var guesses = 6;
var wrongLetters = [];
var placeHolder = [];
var wins = 0;
var shouldContinue = false;
var wins = 0;

// Band Names array
var bandNames = ["AJJ", "Bob Dylan", "cat be damned", "Coma Cinema", "David Bowie", "Days N Daze", "elvis depressedly", "HIM", "Hotel Books", "Johnny Hobo And The Freight Trains", "mathew lee cothranm", "My Chemical Romance", "My Pizza My World", "Old Gray", "Ramshackle Glory", "teen suicide", "The Front Bottoms", "The Hotelier"];

// creates a random number between 1 and the length of the band array.
var randomNumber = Math.floor(Math.random() * bandNames.length);
// picks a random band based of the length of the randomband array
var selectedBand = bandNames[randomNumber];
// Lowercase Band Name
var selectedBand = selectedBand.toLowerCase();


function pickBand() {
 
    // add place holder based on length of band name
    for (i = 0; i < selectedBand.length; i++) {
        selectedBand[i] === " " ? placeHolder.push(" ") : placeHolder.push("_");
    }
    
    // Append the place holder 
    $('#current-container').append(placeHolder);

    // give div image based on band name
    if (selectedBand == "ajj"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/ajj.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/qGSkviwvjD0");
    } else if (selectedBand == "bob dylan") {
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/dylan.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/IwOfCgkyEj0");
    } else if (selectedBand == "cat be damned"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/cat.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/APlS5fcWhNw");
    } else if (selectedBand == "coma cinema"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/coma.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/0SmrfSTjSk0");
    } else if (selectedBand == "david bowie"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/bowie.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/1CCm-r_RwYI");
    } else if (selectedBand == "days n daze"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/daze.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/zNNXNBrehsE");
    } else if (selectedBand == "elvis depressedly"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/elvis.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/Tz8NKN2GAvU");
    } else if (selectedBand == "him"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/him.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/PWaZ9yg_LQ4");
    } else if (selectedBand == "hotel books"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/hotel.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/p-nG6QqRRX4");
    } else if ( selectedBand == "johnny hobo and the freight trains"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/johny.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/TRS9Bz0IH54&t=407s");
    } else if (selectedBand == "mathew lee cothranm"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/mathew.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/bHx8z_cYwLo");
    } else if (selectedBand == "my chemical romance"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/mcr.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/tiJzCahaN8w");
    } else if (selectedBand == "my pizza my world"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/pizza.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/B-TYc4Cpd48");
    } else if (selectedBand == "old gray"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/old.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/C7EeBDO44PM");
    } else if (selectedBand == "ramshackle glory"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/ram.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/pC3IrqUpm9U");
    } else if (selectedBand == "teen suicide"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/teen.png");
        $('.video iframe').attr("src","https://www.youtube.com/embed/iqI9YOPJ-Nk");
    } else if (selectedBand == "the front bottoms"){
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/front.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/8qq2X8BL4qA");
    } else if (selectedBand == "the hotelier") {
        $('.band-img img').attr("src","../Word-Guess-Game/assets/images/thehotel.jpg");
        $('.video iframe').attr("src","https://www.youtube.com/embed/eyj06wPIHYQ");
    } 
}



if (wins == 0) {
    pickBand();
}


$( document ).ready(function() {
    

    $(document).keypress(function(e) {
        var letterClicked = String.fromCharCode(e.which);
        console.log(wrongLetters.length );
        
        if (wrongLetters.length < 6) {
            if (selectedBand.indexOf(letterClicked) < 0 && wrongLetters.indexOf(letterClicked) < 0 && placeHolder.join("") != selectedBand) {
                // add wrong guess to wrong letter array
                wrongLetters.push(letterClicked);
        
                // append the wrong letters to the guessed letter container
                $('#guessed-container').html("").append(wrongLetters);
                
                // loose if you guess wrong five times
                if (wrongLetters.length == 1 ) {
                    $('.hangman-img img').attr("src","../Word-Guess-Game/assets/images/hang/1.png");
                        //  subtract guesses
                        guesses -= 1;
                        // update guess container
                        $('.guesses-left-container').html("").append(guesses);
                } else if(wrongLetters.length == 2 ) {
                    $('.hangman-img img').attr("src","../Word-Guess-Game/assets/images/hang/2.png");
                    //  subtract guesses
                    guesses -= 1;
                    // update guess container
                    $('.guesses-left-container').html("").append(guesses);
                } else if(wrongLetters.length == 3 ) {
                    $('.hangman-img img').attr("src","../Word-Guess-Game/assets/images/hang/3.png");
                    //  subtract guesses
                    guesses -= 1;
                    // update guess container
                    $('.guesses-left-container').html("").append(guesses);
                } else if(wrongLetters.length == 4 ) {
                    $('.hangman-img img').attr("src","../Word-Guess-Game/assets/images/hang/4.png");
                    //  subtract guesses
                    guesses -= 1;
                    // update guess container
                    $('.guesses-left-container').html("").append(guesses);
                } else if(wrongLetters.length == 5 ) {
                    $('.hangman-img img').attr("src","../Word-Guess-Game/assets/images/hang/5.png");
                    guesses -= 1;
                    $('.guesses-left-container').html("").append(guesses);
                } else if(wrongLetters.length == 6 ) {
                    $('.hangman-img img').attr("src","../Word-Guess-Game/assets/images/hang/6.png");
                    $('.guesses-left-container').html("").append("<h2 class='lose'>You Lose</h2>");
                    var canContinue = false;
                    console.log(wrongLetters.length);
                    console.log(canContinue);
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
                wins += 1;
                $('.video').css('display', 'block');
                $('.button-options').css('display', 'block');
                $('.band-img').css('display', 'none');
                $('.wins-container').css('display', "block").html('').append("<p>" + wins + "</p>");

                // runs after letter checked
                setTimeout(() => {
                    alert("you win");
                });
        
                $('.reset-button').on('click', function(){
                    // reloads game
                    location.reload();
                });

               
               console.log(wins);
            }    
        }
    
    });
});


    









