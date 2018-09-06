// array of the ABC's
var abcs = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//variable initialization

var wins = 0;
var losses = 0;
var guesses = [];
var guessLeft = 9;
var userGuess = "";
var psychicLetter = "";



// compGuess function, when run causes the computer to choose arandom letter from abs array
var compGuess = function(){
    psychicLetter = abcs[Math.floor(Math.random()*abcs.length)];
   
};

//userGuesses function, writes the guesses the user has made so far to the guesses id
var userGuesses = function(){
    document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guesses;
};

//guessesLeft function updates the amount of guesses remaining to the html file
var guessesLeft = function(){
    document.getElementById("guessLeft").innerHTML = "Guesses Left: " + guessLeft;

};


//this function resets displayed values to their 'default'
var reset = function(){

    guessLeft = 9;
    guesses = [];
    userGuess = "";
    document.getElementById("emptyspace").innerHTML = "";


    compGuess();
    guessesLeft();
    userGuesses();
};

//when keys are pressed this document runs
document.onkeyup = function(event){

//key that is pressed is stored as a lowercase into userGuess variable
    userGuess = event.key.toLowerCase();

    //this ensures the display at the bottom is empty when the user pressed a button, unless a mistake is made after this point
    document.getElementById("emptyspace").innerHTML = "";    

    if(abcs.includes(userGuess))
    {

    

    
// this statement insures that the computer only picks its guess when the default guessesLeft of 9 is true 
    if( guessLeft == 9){

    compGuess();
 }


 // this statement only runs if the user guess is the same as the computer guess
    if (userGuess === psychicLetter){
        wins++;
        document.getElementById("wins").innerHTML = "Wins: " + wins; 
        alert("You are a Psychic! Stop wasting your powers on such games!");
        reset();

        //for whatever reason when u win guesses left is only 8 even after the reset, so i added 1 to make it 9
        guessLeft++;

    }


// this runs only when the user guess is not equal to the computer guess
    if (userGuess != psychicLetter){


//this runs when the user picks the same letter more than once, and displays dialogue telling them to not do that        
    if(guesses.includes(userGuess)){
        document.getElementById("emptyspace").innerHTML = "You have already guessed that letter! <br> Please choose a different letter.";
    }
// otherwise this runs
    else{

    guessLeft--;

    //this pushes the users guess into the end of the array guesses that displays on the page
    guesses.push(userGuess);
    userGuesses();
    guessesLeft();
    }

    }

    //when the user has run out of guesses the following script runs
    if (guessLeft === 0) {
        losses++;
        document.getElementById("losses").innerHTML = "Losses: " + losses;  
        alert("You are obviously not psychic, prove yourself and play again.")
        reset();


    }

}
else{
    document.getElementById("emptyspace").innerHTML = "Invalid character!!! <br> Please enter a letter A-Z";

}
};

