const POSSIBLE_WORDS = ["obdurate", "versimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];
var word = "";
var guesses = "";
var guessCount;
const MAX_GUESSES = 6;

let newGame = function() {
    guessCount = MAX_GUESSES;
    randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
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
    image.src = `hangman${guessCount}.gif`;
    if (guessCount <= 0) {
        alert("Game over! The word was " + word);
        newGame();
    }

    if (clueString.indexOf("_") < 0) {
            alert("Congratulations! You guessed the word!");
            newGame();
        }

};


let guessLetter = function() {
    let input = document.getElementById("guess");
    let letter = input.value;
    if(word.indexOf(letter) < 0) {
        guessCount--;
    }
    letter = letter.toLowerCase();
    if (guesses.indexOf(letter) >= 0) {
        alert("You already guessed that letter!");
        return;
    }
    guesses+=letter;
    input.value = ""; // Clear the input box
    updatePage();
}