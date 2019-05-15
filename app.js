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


    const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var containsDigit = false;
    for (var i = 0; i < name.value.length; i++) {
        for (var j = 0; j < numberArray.length; j++) {
            if (name.value[i] == numberArray[j]) {
                containsDigit = true;
            }
        }
    }
    

    const caps = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var containsCapitalLetter = false;
    console.log(name.value);
    for (var l = 0; l < name.value.length; l++) {
        for (var k = 0; k < caps.length; k++) {
            if (name.value[l] == caps[k]) {
                containsCapitalLetter = true;
                console.log(containsCapitalLetter);
            }
            else {
                console.log(containsCapitalLetter);
            }
        }
    }
    
    
    

    if (!re.test(name.value) || containsDigit == false || containsCapitalLetter == false) {

        name.classList.add('is-invalid');
    }
    else {
        name.classList.remove('is-invalid');
    }

}

function validateZip() {

}

function validateEmail() {

}

function validatePhone() {

}
