let email_field = document.getElementById("email")
let submit_btn = document.getElementById("submit_btn")
let password_field = document.getElementById("password")
let password2_field = document.getElementById("password2")
let name_field = document.getElementById("name")
let surname_field = document.getElementById("name1")

function validate_name_field(e){
    return name_field.value.length > 0;
}

function validate_surname_field(e){
    return surname_field.value.length > 0;
}

function ValidateEmail(mail)
{
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
    {
        return true
    }
    return false
}

function validate_email_field(e){
    email = email_field.value
    return ValidateEmail(email);
}

function validate_passwords_field(e){
    return password_field.value == password2_field.value & password2_field.value.length > 0;
}

function validate_before(e){
    if(!validate_email_field()){
        alert('Email is incorrect')
        return;
    }
    if(!validate_passwords_field()){
        alert('Password is incorrect')
        return;
    }
    if(!validate_name_field()){
        alert('Name is incorrect')
        return;
    }
    if(!validate_surname_field()){
        alert('Surname is incorrect')
        return;
    }
    document.getElementById("reg_form").submit()
}

submit_btn.addEventListener('click', validate_before)