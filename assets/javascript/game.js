// array of the ABC's
var abcs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variable initialization

var wins = 0;
var losses = 0;
var guesses = [];
var guessLeft = 9;
var userGuess = "";
var psychicLetter = "";

var guessesLeft = function(){
    document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessLeft;

};

// computer picks a random letter
var compGuess = function(){
    psychicLetter = abcs[Math.floor(Math.random()*abcs.length)];
   
};

//user guesses stored in variable
var userGuesses = function(){
    document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guesses;
};

var reset = function(){

    guessLeft = 9;
    guesses = [];
    userGuess = "";

    compGuess();
    guessesLeft();
    userGuesses();
};

//reduces guessLeft by 1 when a key becomes userguest
document.onkeyup = function(event){


    userGuess = event.key.toLowerCase();
    
    compGuess();

    if (userGuess == psychicLetter){
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        alert("You are a Psychic! Stop wasting your powers on such games!");
        guessesLeft();
        reset();
    }

    if (userGuess != psychicLetter){
    guessLeft--;
    guesses.push(userGuess);
    userGuesses();
    guessesLeft();
    }


    if (guessLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        alert("You are obviously not psychic, prove yourself and play again.")
        userGuesses();
        guessesLeft();
        reset();


    }

};

