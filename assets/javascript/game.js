var words = ["rugrats", "heyarnold", "doug", "kablam", "catdog"]

var computerGuess = words[Math.floor(Math.random() * words.length)];

var wins = 0;
var losses = 0;
var numUserGuesses = 9;
var guessesLeft = 9;
var guessedLetters = []
var blanks = []

var $wins = document.getElementById('wins-text');
var $losses = document.getElementById('losses-text');
var $guessesLeft = document.getElementById('guesses-left');
var $guessedLetters = document.getElementById('guesses-made');

function reset() {
    guessesLeft= 9
    computerGuess = words[Math.floor(Math.random() * words.length)];
    guessedLetters.length = 0
    computerGuess = computerGuess.split('')
    blanks = []
// I need to create blanks in place of the letters of computer guess and push them into an array

    for (var i = 0; i < computerGuess.length; i++) {
        blanks.push("_ ")
    }
    
}

document.onkeyup = function(event) {

    var userGuess = event.key.toLowerCase()

    console.log(`USER GUESS ${userGuess}`);
    console.log(`COMPUTER GUESS ${computerGuess}`);
    //make condition- letter they press is correct

  

    if (computerGuess.includes(userGuess)) {
        console.log('hit')

        for (var i = 0; i < computerGuess.length; i++) {
            if (computerGuess[i] === userGuess) {
                blanks[i] = userGuess
            }
        }
    } else {
        guessesLeft --
        guessedLetters.push(userGuess)
    }

    console.log(blanks)

    if (!computerGuess.includes('_ ')) {
        // win condition
    }
}
 
reset()
console.log(computerGuess)
console.log(blanks)

//this is where the blanks go


    //push letters User guesses while leaving the rest blank
    //create if statements for wins, losses (reset)

    // $wins.textContent = wins;
    // $losses.textContent = losses;
    // $guessesLeft.textContent =  guessesLeft  