//defined Variables
var TEAMS = ['BARCELONA', 'REALMADRID', 'ATLETICOMADRID', 'SEVILLA', 'VALENCIA'];
//holds place _ _ _ _ _ while user guesses letters
var guessForthisTeam= [];
//holds letters guessed by user that were not in the selected word
var incorrectLettersGuessed= [];
// number of guesses remaining
var guessesRemaining=10;
//will increase if user guesses all letters before lives run out.
var numberOfWins=0;
//what letter the user guesses
var userGuess;
//put letters to all caps on guess
var userGuessCaps;
//wordto guess//
var wordToGuess;
// random team to be teamSelected
var teamSelection;
//letters stored after being Selected
var usedLetters;
//number of guesses
var guessCounter=0;
//
var randomWord;
//used to build the word on keypress
var buildWord



function clear(){
  incorrectLettersGuessed=[];
  guessForthisTeam= [];
  guessesRemaining=10;
  userGuess;
  document.getElementById('teamToGuessFor').innerHTML="";
  document.getElementById('usedLettersSection').innerHTML=incorrectLettersGuessed;
}

function setUp(){
  teamSelection =[Math.floor(Math.random()*TEAMS.length)];
  randomWord=TEAMS[teamSelection];

  //splits the word into spaces
  var wordToGuess= randomWord.split('');
  console.log(wordToGuess);

    for(var i=0; i<wordToGuess.length; i++){
      if(wordToGuess[i]=== "_ "){
        guessForthisTeam.push("_ ");
      }
      else {
        guessForthisTeam.push("_ ");
      }
    }
    //pushes the blank spaces into the HTML that the USER will be guessing for.
  document.getElementById('teamToGuessFor').innerHTML= guessForthisTeam;
  console.log(guessForthisTeam);
}

function runGame(){
  document.onkeyup = function (event){
    userGuess=event.key;
    userGuessCaps=userGuess.toUpperCase();
    incorrectLettersGuessed.push(userGuessCaps);
    document.getElementById('usedLettersSection').innerHTML=incorrectLettersGuessed;
    document.getElementById('livesLeft').innerHTML=guessesRemaining;
    var finishedWord;
    guessCounter=0;

      for (var j = 0; j < TEAMS.length; j++) {

        if (userGuessCaps===TEAMS[j]) {
          guessForthisTeam[j]=userGuessCaps[j]
          document.getElementById('teamToGuessFor').innerHTML=guessForthisTeam;
          finishedWord = guessForthisTeam.join("");
          buildWord= guessForthisTeam.join("");

        }
      }

      for (var k = 0; k < TEAMS.length; k++) {
        if(userGuessCaps==guessForthisTeam[k]){
          guessCounter+=1;
        }
      }

      if(guessCounter===0){
            guessesRemaining-=1;
            document.getElementById('livesLeft').innerHTML=guessesRemaining;
      }

      if(guessesRemaining<1){
        document.getElementById('gameOver').innerHTML="GAME OVER!";
        alert("GAME OVER");
        location.reload();
      }
      if (finishedWord===randomWord){
        numberOfWins+=1;

        if(TEAMS==0){
          document.getElementById('').innerHTML=""
        }

        document.getElementById("wins").innerHTML=numberOfWins

        clearVar();
        setup();
        runGame();
      }
  }
}


document.addEventListener("load", setUp());
document.addEventListener("load", runGame());
