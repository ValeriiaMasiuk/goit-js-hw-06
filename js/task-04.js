let counterValue = 0;

const ascendBtn = document.querySelector('[data-action="increment"]')
// console.log(ascendBtn)

const descendBtn = document.querySelector('[data-action="decrement"]')
// console.log(descendBtn)

const counter = document.querySelector('#value')
// console.log(counter)

function onAscendButtonClick() {
    // console.log(`Click performed`)
    counterValue += 1;
    counter.textContent = counterValue;
}

function onDescendButtonClick() {
    // console.log(`Click performed`)
    counterValue -= 1;
    counter.textContent = counterValue;
}

ascendBtn.addEventListener('click', onAscendButtonClick)
descendBtn.addEventListener('click', onDescendButtonClick)
