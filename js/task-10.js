function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('[data-create]')
// console.log(createBtn)

const destroyBtn = document.querySelector('[data-destroy]')
// console.log(destroyBtn)

const input = document.querySelector('input')
// console.log(input)

const boxes = document.querySelector('#boxes')

boxes.style.display = 'flex';
boxes.style.flexDirection = "row";
boxes.style.flexWrap = "wrap"

let startSize = 30;
let step = 10;

// console.log(boxes)

createBtn.addEventListener('click', createBoxes)
destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
  amount = input.value;

  if (amount > 100) {
    console.log('Error');
    return;
  }

  console.log('Elements created')

  const boxesList = []

  for (let i = 1; i <= amount; i += 1) {
    const boxesEl = document.createElement('div');

    let size = startSize + i * step;

    boxesEl.style.width = `${size}px`;
    boxesEl.style.height = `${size}px`
    boxesEl.style.margin = "10px"
    boxesEl.style.display = 'block';
    boxesEl.style.backgroundColor = `${getRandomHexColor()}`;

    // console.log(boxesEl)
    boxesList.push(boxesEl)
  }
  boxes.append(...boxesList)
}

function destroyBoxes() {
  console.log('Elements destroyed')
  boxes.innerHTML = "";
}
