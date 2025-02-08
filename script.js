let hidePassword = document.getElementById('hide');
let password = document.getElementById('password');
hidePassword.addEventListener('click', function() {

    if(hidePassword.classList[1] === 'fa-eye-slash')  {
    hidePassword.classList.replace('fa-eye-slash', 'fa-eye');
    password.setAttribute('type', 'password');
   
     } else {
    hidePassword.classList.replace('fa-eye', 'fa-eye-slash');
    password.setAttribute('type', 'text');
    
    }
    

})