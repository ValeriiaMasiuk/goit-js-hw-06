function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const window = document.querySelector('body')
const button = document.querySelector('button')
const color = document.querySelector('.color')

button.addEventListener('click', onBodyColorChange)

function onBodyColorChange() {
  color.textContent = `${getRandomHexColor()}`;
  window.style.backgroundColor = `${color.textContent}`;
}
