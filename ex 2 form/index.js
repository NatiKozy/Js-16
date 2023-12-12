const form = document.forms.form;
const userNameInput = form.elements.name;
const emailInput = form.elements.email;
const agreeTermsCheckbox = form.elements.checkbox;
const userAgeInput = form.elements.age;
const passwordInput = form.elements.password;

const userNameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const termsError = document.getElementById('termsError');
const ageError = document.getElementById('ageError');
const passwordError = document.getElementById('passwordError');

const validateEmail = (email) => {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
}

const validatePassword = (password) => {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/;
    return regex.test(password);
}

const checkErrors = () => {
    let hasError = false;

    userNameError.style.display = 'none';
    emailError.style.display = 'none';
    termsError.style.display = 'none';
    ageError.style.display = 'none';
    passwordError.style.display = 'none';

    if (userNameInput.value === '') {
    userNameError.textContent = 'Введите имя пользователя.';
    userNameError.style.display = 'block';
    hasError = true;
}

    if (validateEmail(emailInput.value) === false) {
    emailError.textContent = 'Введите корректный email.';
    emailError.style.display = 'block';
    hasError = true;
}

    if (userAgeInput.value === '') {
    ageError.textContent = 'Введите возраст пользователя.';
    ageError.style.display = 'block';
    hasError = true;
}

    if (validatePassword(passwordInput.value) === false) {
    passwordError.textContent = 'Длина пароля должна быть не менее 8 символов длиной и содержать как минимум одну заглавную букву, одну строчную букву, одну цифру и один символ';
    passwordError.style.display = 'block';
    hasError = true;
}
    if (passwordInput.value === '') {
    passwordError.textContent = 'Введите пароль.';
    passwordError.style.display = 'block';
    hasError = true;
}

    if (agreeTermsCheckbox.checked === false) {
    termsError.textContent = 'Необходимо согласие с условиями.';
    termsError.style.display = 'block';
    hasError = true;
}

    if (hasError === false) {
    alert('Форма успешно отправлена!');
    }
};


form.addEventListener('change', () => {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.disabled = checkErrors && !agreeTermsCheckbox.checked;
});

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    checkErrors();
})

