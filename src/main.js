const inputsDiv = document.querySelectorAll('.inputs');
const submitButton = document.querySelector('.submit_button');
const inputValue = inputsDiv.firstElementChild;

let inputName = document.querySelector('.input_name');
let inputLastName = document.querySelector('.input_lastname');
let inputEmail = document.querySelector('.input_email');
let inputPassword = document.querySelector('.input_password');

submitButton.addEventListener('click', (e) => {
    e.preventDefault;
    //Validando Nombre
    let name = inputName.value;
    if ((name ==  null || name.length == 0 || /^\s+$/.test(name))) {
        let iconError = inputName.nextElementSibling;
        let messageError = iconError.nextElementSibling;
        let height = 0;
        iconError.classList.remove('invisible');
        iconError.classList.add('visible');
        height = messageError.scrollHeight;
        messageError.style.height = `${height}px`;
    }
    else {
        let iconError = inputName.nextElementSibling;
        let messageError = iconError.nextElementSibling;
        let height = 0;
        iconError.classList.remove('visible');
        iconError.classList.add('invisible');
        messageError.style.height = `${height}px`;
    }

    //Validando Apellido
    let lastName = inputLastName.value;
    if ((lastName ==  null || lastName.length == 0 || /^\s+$/.test(lastName))) {
        let iconError = inputLastName.nextElementSibling;
        let messageError = iconError.nextElementSibling;
        let height = 0;
        iconError.classList.remove('invisible');
        iconError.classList.add('visible');
        height = messageError.scrollHeight;
        messageError.style.height = `${height}px`;
    }
    else {
        let iconError = inputLastName.nextElementSibling;
        let messageError = iconError.nextElementSibling;
        let height = 0;
        iconError.classList.remove('visible');
        iconError.classList.add('invisible');
        messageError.style.height = `${height}px`;
    }

    //Validando Email
    let email = inputEmail.value;
    if (!(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(email)) ) {
        let iconError = inputEmail.nextElementSibling;
        let messageError = iconError.nextElementSibling;
        let height = 0;
        iconError.classList.remove('invisible');
        iconError.classList.add('visible');
        height = messageError.scrollHeight;
        messageError.style.height = `${height}px`;
    }
    else {
        let iconError = inputEmail.nextElementSibling;
        let messageError = iconError.nextElementSibling;
        let height = 0;
        iconError.classList.remove('visible');
        iconError.classList.add('invisible');
        messageError.style.height = `${height}px`;
    }

    //Validando Contraseña
    let password = inputPassword.value;
    if ((password ==  null || password.length == 0 || /^\s+$/.test(password))) {
        let iconError = inputPassword.nextElementSibling;
        let messageError = iconError.nextElementSibling;
        let height = 0;
        iconError.classList.remove('invisible');
        iconError.classList.add('visible');
        height = messageError.scrollHeight;
        messageError.style.height = `${height}px`;
    }
    else {
        let iconError = inputPassword.nextElementSibling;
        let messageError = iconError.nextElementSibling;
        let height = 0;
        iconError.classList.remove('visible');
        iconError.classList.add('invisible');
        messageError.style.height = `${height}px`;
    }
});