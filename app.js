// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

function validateName() {
    const name =  document.getElementById('name').value;
    // regex checking if the form name is between 2 and 10 characters
    const re = /^[a-zA-Z]{2, 10}$/;
    
}

function validateZip() {
    
}

function validateEmail() {
    
}

function validatePhone() {
    
}