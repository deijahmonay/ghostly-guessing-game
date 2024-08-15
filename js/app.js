console.log('sanity check!')
/*---------------------------------Constants-----------------------------------*/
//1) Define constants
//Define halloween-themed words and max guesses allowed
const words = ['mummy', 'skeleton', 'vampire', 'ghost'] // list of words for the game
const maxGuesses = 4; // maximum number of incorrect guesses allowed before lose


/*----------------------------------Variables------------------------------------*/
// Define variables to track game state
let currentWord; //the word that is being guessed in that moment
let guessesLeft; // this array that will store letters the player guesses
let guessedLetters; // stores the letters guesses by the player/ user 
let wordDisplay; // this allows the word to display to the screen
// let message = ""

let amountCorrect = 0   

/*----------------------------Cached Element Referneces---------------------------*/

// const resultDisplayElement= document.querySelector('#result-display')
const startButtonElement = document.querySelector('#start-button') // start game button
const restartButtonElement = document.querySelector('#restart-button')
const wordDisplayElement = document.querySelector('#word-display') // element that displays word to user/ player
console.log({startButtonElement, restartButtonElement, wordDisplayElement})

let wordContainer = document.getElementById('word')
let blankWord = []
let arr= document.getElementsByClassName('key')
let guesses = document.querySelector('#guesses')
/*-----------------------------------Functions------------------------------------*/
function getLetters(){
    blankWord = []
    for(let i = 0; i < currentWord.length; i++){
    blankWord.push('_')
    }
    wordContainer.innerHTML = blankWord
}
//Function to check the current game status (arrow function with if/else statements for gameplaying purposes)
function startGame (){
    document.getElementById('start-button').innerHTML='Restart Game'
    amountCorrect = 0
    currentWord = words[Math.floor(Math.random() * words.length)]
    guessesLeft = maxGuesses
    guesses.innerHTML =  guessesLeft
        console.log('word: '+ currentWord)
    console.log('guessesLeft: '+ guessesLeft)
    getLetters()
    gameMessage()

} 
function getKeyboard (){
//arr[0].style = 'display: none' // give the first element in the key
for(let i = 0; i < arr.length; i++){
    let btn = arr[i]
    btn.addEventListener('click', function(){
    compareLetters(btn)   
    })
    wordContainer.innerHTML = blankWord
}
}
function compareLetters (btn)
{
    let hasLetter = false;
    for(let j = 0; j < currentWord.length; j++){
        if(btn.innerHTML.toLowerCase() == currentWord[j].toLowerCase())
            {
                blankWord[j] = currentWord[j]
                wordContainer.innerHTML = blankWord
                amountCorrect++
                hasLetter = true
            }
    }
    if(hasLetter == false && guessesLeft !=0)
        {
            guessesLeft--
        }
        guesses.innerHTML = guessesLeft
       gameMessage ()
}
function gameMessage(){
    let message = document.querySelector('h1')
      message.innerHTML = ''
    if(guessesLeft <= 0)
        {
            message.innerHTML = `FAIL! The correct word was ${currentWord}`
        }
        else if (amountCorrect == currentWord.length)
        {
            message.innerHTML = `CONGRATS! You guessed correct ${currentWord}`
        }
        console.log('amountCorrect: '+ amountCorrect)
}
getKeyboard()
//handle generating random selections for the word to guess





/*---------------------------------EventListeners-----------------------------------*/
//Handle a player clicking a button (start + reset) 

document.querySelector('#start-button').addEventListener('click', startGame) //giving buttons a callback function




// Game name: Haunted Hangman /or Ghostly Guessing (not decided yet)

// As a user, I want to see a landing page when I arrive at the website, so I know I’m in the right place.
// As a user, I want to see game instructions pop up --> undecided where
// As a user, I want to see a start button 
// As a user, I want to see a halloween themed game 
// As a user, I want to see the _ marks that represent the number of letters in the word I need to guess
// As a user, I want to be able to type a letter to guess  the word
// As a user, I want tot be able to see that I get 3-4(not decided yet) attempts to guess letters in the word
// As a user, I want to see a message appear if I run out of guesses
// As a user, I want to see a message appear if I win with a spooky congratulations message
// As a user, I want to see a button to restart the game after I win or lose
// 1) Define any variables used to track the state of the game:

// Halloween themed words to guess (mummy, skeleton, vampire, ghost, headless horseman, ghost) – might change the words to be more cohesive
// Number of guesses for the user
// Win/Lose messages for the user
// 2) Define the required constants:

// Halloween theme words (mummy, skeleton, vampire, ghost, headless horseman, ghost)
// 3) Handle a user guessing a letter for a word:

// Get the letter the user guesses 
// Check if letter is in the word 
// Win/Lose messages for the user
// Track number of guesses left for user in the level
// 5) Display message to the user playing the game:

// Show a “COMPLETED!” Message if user guesses the word correctly (passes level)
// Show a “FAILED :(” message if the user loses — show correct word (possibly — undecided)
// Show a “RESTART(or)RETRY” message if failed & “Next Level” button if they guess correctly
// ROCK PAPER SCISSORS (pseudocode page) used for reference.