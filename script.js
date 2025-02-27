import wordList from './data/wordList.js'

// Generating keyboard buttons

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const keyboard = document.querySelector('.js-keyboard');
const hangmanImage = document.querySelector('.js-hangman');
const gameOverDisplay = document.querySelector('.js-game-over');
const wordDisplay = document.querySelector('.js-word-display');

alphabet.forEach((letter) => {
  const button = document.createElement('button');
  button.innerHTML = letter;
  keyboard.appendChild(button);
  button.addEventListener('click', () => {
    buttonClick(button);
  });
});

let currentWord;
let incorrectGuesses = 0;
const maxGuesses = 6;

const guesses = document.querySelector('.js-guesses');

function renderGuesses() {
  guesses.innerHTML = 
  `
    Incorrect guesses: <b>${incorrectGuesses} / ${maxGuesses}</b>
  `;
}


function selectWord() {
  const listIndex = Math.floor(Math.random() * wordList.length);
  currentWord = wordList[listIndex];
}

const hint = document.querySelector('.js-hint');

function startGame() {
  selectWord();
  hint.innerHTML = `
    Hint: <b>${currentWord.hint}</b>
  `;
  hangmanImage.src = 'images/hangman-0.svg';
  gameOverDisplay.classList.add('hidden');
  generateWordDisplay();
  console.log(currentWord.word);
}

function generateWordDisplay() {
  let wordDisplayHTML = '';
  for (let i = 0; i < currentWord.word.length; i++) {
    wordDisplayHTML += 
    `
      <li class="letter"></li>
    `;
    console.log(wordDisplayHTML);
  }
  wordDisplay.innerHTML = wordDisplayHTML;
}

function buttonClick(button) {
  const letter = button.innerHTML;
  if (currentWord.word.includes(letter)) {
    console.log(letter, 'is in ', currentWord.word);
    gameOver('won');
  }
  else {
    incorrectGuesses += 1;
    hangmanImage.src = `images/hangman-${incorrectGuesses}.svg`;
    renderGuesses();
    if (incorrectGuesses >= maxGuesses) {
      gameOver('lost');
    }
  }
}

function gameOver(status) {
  if (status === 'lost') {
    gameOverDisplay.innerHTML = 
    `
      <div class="game-over-container">
        <img src="images/lost.gif" alt="You Lost!">
        <h2>Game Over!</h2>
        <p>The correct word was: &nbsp;<b>${currentWord.word}</b></p>
        <button class="js-play-again">PLAY AGAIN</button>
      </div>
    `;
    gameOverDisplay.classList.remove('hidden');
    addButtonEvent();
  } else if (status === 'won') {
    gameOverDisplay.innerHTML = 
    `
      <div class="game-over-container">
        <img src="images/victory.gif" alt="You Won!">
        <h2>Game Over!</h2>
        <p>You guessed the word&nbsp;<b>${currentWord.word}</b>&nbsp;correctly!</p>
        <button class="js-play-again">PLAY AGAIN</button>
      </div>
    `;
    gameOverDisplay.classList.remove('hidden');
    addButtonEvent();
  }
}

function addButtonEvent() {
  const playAgainButton = document.querySelector('.js-play-again');
  playAgainButton.addEventListener('click', () => {
    startGame();
  });
}

startGame();