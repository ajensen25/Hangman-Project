// Generating keyboard buttons

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const keyboard = document.querySelector('.js-keyboard');

alphabet.forEach((letter) => {
  const button = document.createElement('button');
  button.innerHTML = letter;
  keyboard.appendChild(button);
});