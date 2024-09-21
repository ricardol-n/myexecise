var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');
var passwordError = document.getElementById('password-error')
let popup = document.getElementById("popup");


function validateName(){
    var name = document.getElementById('contact-name').value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){ 
        nameError.innerHTML = 'write full name';
        return false;

    }
    nameError.innerHTML = "vaild";
    return true;
        
}

function validatePhone(){
    var phone = document.getElementById('contact-phone').value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no is required';
        return false;

    }

    if(phone.length !== 10){
        phoneError.innerHTML = 'phone no should be 10 digits'
        return false
    }

    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'only digits pls';
        return false;
    }

    phoneError.innerHTML = "valid";
    return true; 

}

function validateEmail(){
    var email = document.getElementById('contact-email').value

    if(email.length == 0){
        emailError.innerHTML ='Email is required'
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{1,3}$/)){
        emailError.innerHTML ='Email invalid'
        return false;
    }

    emailError.innerHTML = "valid";
    return true; 

}

function validateMessage(){
    var message = document.getElementById('contact-message').value;
    var required = 30;
    var left = required - message.length;

    if(left > 0 ){
        messageError.innerHTML = left + ' more characters required ';
        return false;

    }

    messageError.innerHTML = 'valid';
    return true;

}

function validatePassword(){
    var password = document.getElementById('contact-password').value

    if(password.length == 0){
        passwordError.innerHTML = 'password is required';
        return false;

    }
    if(password.length != 8){
        passwordError.innerHTML = 'password should be 8 digts'
        return false;

    }
    if(password.match(/^[0-9]{&*^%$#@}$/)){
        passwordError.innerHTML = 'must contain Alphabets, digits and symboles'
        return false

    }
    passwordError.innerHTML = 'valid';
    return true;
}



function validateForm(){

    
        if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() || !validatePassword()){
            submitError.style.display = 'block';
            submitError.innerHTML = 'please fix error to submit';
            setTimeout(function(){submitError.style.display = 'none';}, 5000);
            return true;

        
        }

}

function openPopup(){
    popup.classList.add("open-popup");
    
}


function outPut(){
    if (validateForm() == true){
        
        return false;
    }
    openPopup();
    return false

}


function closePopup(){
    popup.classList.remove("open-popup");

}

