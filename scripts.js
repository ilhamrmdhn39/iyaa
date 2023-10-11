// menggunakan operator ternary
function togglePasswordVisibility(inputId){
    let passworInput = document.getElementById(inputId);
    passwordInput.type = (passwordInput.type === 'password') ? 'text' : 'password'; 
}