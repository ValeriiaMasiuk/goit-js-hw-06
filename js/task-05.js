const input = document.querySelector('#name-input')
// console.log(input)

const nameInput = document.querySelector('#name-output')
// console.log(nameInput)

function onInputAction(event) {
    const valueInput = event.currentTarget.value;

    nameInput.textContent = valueInput === '' || valueInput.split(" ").every(value => value === '') ? 'Anonymous' : valueInput;
}

input.addEventListener('input', onInputAction)