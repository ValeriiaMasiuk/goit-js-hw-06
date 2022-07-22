const input = document.querySelector('#font-size-control')
// console.log(input)

const text = document.querySelector('#text')
// console.log(text)

function onToddlerChange() {
    text.style.fontSize = input.value + 'px';
    // console.log(text.style.fontSize)
}

input.addEventListener('input', onToddlerChange)
