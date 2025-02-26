import wordList from './data/wordList.js'

// Generating keyboard buttons

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const keyboard = document.querySelector('.js-keyboard');

alphabet.forEach((letter) => {
  const button = document.createElement('button');
  button.innerHTML = letter;
  keyboard.appendChild(button);
  button.addEventListener('click', () => {
    buttonClick(button);
  });
});

let currentWord = {};

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
  console.log(currentWord.word)
}

function buttonClick(button) {
  console.log(button.innerHTML);
}

startGame();