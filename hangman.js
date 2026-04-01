const POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var word = "";
var guesses = "";
var guessCount;
const MAX_GUESSES = 6;

let newGame = function() {
    guessCount = MAX_GUESSES;
    ranmdomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[ranmdomIndex];
    guesses = "";
    updatePage();
}
let updatePage = function() {
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        var currentLetter = word.charAt(i);
        if (guesses.indexOf(currentLetter) >= 0) {
            clueString += currentLetter + " ";
        } else {
            clueString += "_ ";
        }
    }   
    
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses: " + guesses;
    let image = document.getElementById("hangmanpic");
    image.src = 'hangman${guessCount}.gif';
};


let guessLetter = function() {
    let input = document.getElementById("guess");
    let letter = input.value;
    if(word.indexOf(letter) < 0) {
        guessCount--;
    }
    letter = letter.toLowerCase();
    guesses+=letter;
    updatePage();
}