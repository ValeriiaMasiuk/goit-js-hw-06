const input = document.querySelector('#validation-input')
// console.log(input)

function onInputBlur(event) {
    const password = event.currentTarget.value
    // console.log(password)

    if (password.length == input.getAttribute('data-length')) {
        input.classList.add('valid');
        return 
    } 
        input.classList.remove('valid')
        input.classList.add('invalid')
}

input.addEventListener('blur', onInputBlur)
