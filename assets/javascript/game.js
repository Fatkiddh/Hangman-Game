var placeholder = [];
var catagory = [];
var correctGuesses = 0;
var guessesLeft = 6;
var wrongLetter = true;
var wins = 0;
var wrongLetter = [];
var correctLetters = [];
var TEAMS = ['BARCELONA', 'REALMADRID', 'ATLETICOMADRID', 'SEVILLA', 'VALENCIA'];

//pick a random word
// if word has not been guessed, show _ _ _ _ _
//show the player their current lives & guesses
//if letter guessed is correct fill spot in word
//if letter guessed is incorrect store letter in goalsScored area;
//letters guessed onkeystroke
// if player wins show picture of team spelled out and play a song;
// if lives run out play game over music;


var TEAMS = TEAMS[Math.floor(Math.random()*TEAMS.length)];
  console.log("choosen word is " + TEAMS);


for (var i=0; i<TEAMS.length; i++){
    placeholder[i]= "_ ";
    console.log(placeholder);
}

document.getElementById('letters').innerHTML = placeholder.join("");

var wrongLetter = 6;
  var guessesLeft
