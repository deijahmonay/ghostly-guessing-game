/*---------------------------------Constants-----------------------------------*/
//1) Define constants
//Define halloween-themed words and max guesses allowed
const words = ['mummy', 'skeleton', 'vampire', 'ghost'] // list of words for the game
const maxGuesses = 4; // maximum number of incorrect guesses allowed before lose


/*----------------------------------Variables------------------------------------*/
// Define variables to track game state
let currentWord = ''; //the word that is being guessed in that moment + fixing game crash error (not allowing users to click on letters before pressing start game button)
let guessesLeft; // this array that will store letters the player guesses
let guessedLetters; // stores the letters guesses by the player/ user 
let wordDisplay; // this allows the word to display to the screen


let amountCorrect = 0 // variable to represent number of correct letters guessed

/*----------------------------Cached Element Referneces---------------------------*/


const startButtonElement = document.querySelector('#start-button') // start game button
const wordDisplayElement = document.querySelector('#word-display') // element that displays word to user/ player
console.log({ startButtonElement, wordDisplayElement })

let wordContainer = document.getElementById('word') // set to element that has id of 'word'
let blankWord = [] // variable to hold user guess
let arr = document.getElementsByClassName('key') // grabbing keyboard & all elements from index.html file by the class name
let guesses = document.querySelector('#guesses') // getting blank container of "guesses"
/*-----------------------------------Functions------------------------------------*/
function getLetters() {
    blankWord = [] // sets blank letter to blank array
    for (let i = 0; i < currentWord.length; i++) { // for each letter in current word this is adding the corresponding amount of underscore markers 
        blankWord.push('_') // pushed '_' to variable "blankWord" to allow letters to appear like hangman game
    }
    wordContainer.innerHTML = blankWord.join(' ') //takes data from array to container element + ' ' to remove ,'s that appear after your press "Start Game"
}
//Function to check the current game status (arrow function with if/else statements for gameplaying purposes)
function startGame() {
    document.getElementById('start-button').innerHTML = 'Restart Game' // gets the element with id of start button and changes it to restart game once clicked
    amountCorrect = 0 // set variable on line 17 to 0 each time user presses start game for replay
    currentWord = words[Math.floor(Math.random() * words.length)] // using random number gnerator to randomly select value of the words array  
    guessesLeft = maxGuesses // assigned guesses left the value of maxGuess(4) + allows the variables of guessLeft to change on screen for user view
    guesses.innerHTML = guessesLeft // populating guesses container with a number

    getLetters() // set up underscores
    gameMessage() // render win/loss message to user

}
function getKeyboard() {  // function to add event listener to keys on keyboard

    for (let i = 0; i < arr.length; i++) {
        let btn = arr[i] // array of keys
        btn.addEventListener('click', function () {
            compareLetters(btn)
        })
        wordContainer.innerHTML = blankWord
    }
}
function compareLetters(btn) // function to compare pressed letter to letters in hidden word
{
    let hasLetter = false; // boolean to flag incorrect letter guessed by player
    if (currentWord != '') {
        for (let j = 0; j < currentWord.length; j++) {
            if (btn.innerHTML.toLowerCase() == currentWord[j].toLowerCase()) { //set all letters to lowerCase 
                blankWord[j] = currentWord[j]
                wordContainer.innerHTML = blankWord
                amountCorrect++
                hasLetter = true
            }
        }
        if (hasLetter == false && guessesLeft != 0) // if variable of 'hasLetter' is false & they still have guesses left, subtract the guess
        {
            guessesLeft-- //subtracting value from guessesLeft starting from (4)
        }
        guesses.innerHTML = guessesLeft // setting text guesses element to equal what guessLeft is // showing change in guessLeft when the user gets it wrong, shows new number of incorrect guesses left
        gameMessage()
    }
}
function gameMessage() {
    let message = document.querySelector('h1') // changes the hangman title(h1) to show win/loss message once game over
    message.innerHTML = '' // sets blank game message
    if (guessesLeft <= 0) {
        message.innerHTML = `The shawdows whisper your name... but it's too late. The word was ${currentWord}. The darkness now claims you!` // render lose message to user
    }
    else if (amountCorrect == currentWord.length) {
        message.innerHTML = `Darkness fades away.. ${currentWord} was your weapon!` // render win message to user
    }

}
getKeyboard()
//handle generating random selections for the word to guess





/*---------------------------------EventListeners-----------------------------------*/
//Handle a player clicking a button (start + reset) 

document.querySelector('#start-button').addEventListener('click', startGame) //giving buttons a callback function


