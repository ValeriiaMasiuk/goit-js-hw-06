const form = document.querySelector('.login-form')
// console.log(form)

form.addEventListener('submit', onSubmitForm)

function onSubmitForm(event) {
    event.preventDefault();

    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    if (email === '' || password === '') {
        alert(`Pls, fill all the fields`)
        console.log(`Form not submitted`)
        return;
    } 
    
    console.log(`Form submitted`)

    const formData = {
        email,
        password,
    }
    
    console.log(formData)

    form.reset()
}

