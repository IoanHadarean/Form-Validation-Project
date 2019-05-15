// Form Blur Event Listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);



function validateName() {
    const name = document.getElementById('name');
    // Regex checking if the form name is between 6 and 25 characters
    // Note: names can not start with a special character
    // and can not contain whitespaces.
    const re = /^([a-zA-Z0-9\u00C0-\u00FF])+[\w\W]{5,25}$/;

    
    // Check if at least one the input name chars is a digit
    const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var containsDigit = false;
    for (var i = 0; i < name.value.length; i++) {
        for (var j = 0; j < numberArray.length; j++) {
            if (name.value[i] == numberArray[j]) {
                containsDigit = true;
            }
        }
    }
    
     // Check if at least one the input name chars is an uppercase letter
    const caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var containsCapitalLetter = false;
    for (var l = 0; l < name.value.length; l++) {
        for (var k = 0; k < caps.length; k++) {
            if (name.value[l] == caps[k]) {
                containsCapitalLetter = true;
            }
        }
    }
    
    
    
    // Add invalid class if the checking criteria is not met
    if (!re.test(name.value) || containsDigit == false || containsCapitalLetter == false) {

        name.classList.add('is-invalid');
    }
    else {
        name.classList.remove('is-invalid');
    }

}


// Validate Zip for Romania, UK and US postcodes
function validateZip() {
    const zip = document.getElementById('zip');
    // Romania postcodes
    // Note: For Ilfov and Giurgiu, change the 2nd digit regex to 7 and
    // 8 respectively and for Bucharest change the 2nd digit range from 1 to 6.
    const re = /^[0-9][0-5][0-9]{4}/;
    // USA postcodes
    // const re = /^[0-9]{5}(-[0-9]{4})?$/;
    // UK postcodes
    // const re = /^[A-Z][A-Z0-9][A-Z0-9]?[A-Z0-9]?\s[0-9][A-Z][A-Z]/;
    
    if (!re.test(zip.value)) {

        zip.classList.add('is-invalid');
    }
    else {
        zip.classList.remove('is-invalid');
    }
}




function validateEmail() {
    const email = document.getElementById('email');
    // Check for email address. Escaping - and . characters is necessary.
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_]+)\.([a-zA-Z]{2,5})$/;
    
    if (!re.test(email.value)) {

        email.classList.add('is-invalid');
    }
    else {
        email.classList.remove('is-invalid');
    }
    
}

function validatePhone() {

}
