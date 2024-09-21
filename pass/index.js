let passwordError = document.getElementById('password-error');



function validatePassword(){
    
    var password = document.getElementById('contact-password').value;

    if(password.length == 0){
        passwordError.innerHTML = 'password is required';
        return false;
    }

    if(password.length !== 8){
        passwordError.innerHTML = 'password should be 8 digits';
        return false;
    }

    if(!password.match(/^[0-9]{10}$/)){
        passwordError.innerHTML = 'only digits pls';
        return false;

    }
    password.innerHTML = "valid";
    return true; 
}