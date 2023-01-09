const buttonCreateAccount = document.getElementById('button-create-account');
const buttonSignIn = document.getElementById('button-sign-in');

buttonCreateAccount.addEventListener('click', () => {
    window.location.href="public/pages/registration-window.html";
})

buttonSignIn.addEventListener('click', () => {
    alert('working signIn');
})