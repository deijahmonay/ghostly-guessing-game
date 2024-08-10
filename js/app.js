/*---------------------------------Constants-----------------------------------*/
//1) User choices of words to guess from random Computer selection
const words = ['Casper','Danny Phantom','Beetlejuice','Boo'] // list of words for the game
const maxGuesses = 4; // maximum number of incorrect guesses allowed before lose
// user letters available for guessing







/*----------------------------------Variables------------------------------------*/
// Define my variables for each state
let currentWord; //the word that is being guessed in that moment
let guessedLetters; // this array that will store letters the player guesses
let remainingGuesses; // number of guesses left





/*----------------------------Cached Element Referneces---------------------------*/
//Function to check the current game status

// const resultDisplayElement= document.querySelector('#result-display')




/*-----------------------------------Functions------------------------------------*/
//Arrow funct
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