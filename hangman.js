const POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var clue = "";
var guessesLeft = 6;
var guessedLetters = [];

let newGame = function() {
    ranmdomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[ranmdomIndex];
    
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        clueString += "_";
    }   
    
    
    let clue = document.getElementById("clue");
    clue.textContent = clueString;
}