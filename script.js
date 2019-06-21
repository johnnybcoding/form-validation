// Input fields
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const email = document.getElementById('email');
// Form
const firstName = document.getElementById('firstName');
// Validation colors
const green = '#4CAF50';
const red = '#F44336';

function validateFirstName() {
    // check if it's empty
    if(checkIfEmpty(firstName)) return;
    // check if it has only letters
}

function checkIfEmpty(field) {
    if(isEmpty(field.value.trim())) {
        // set field invalid
        setInvalid(field, `${field.name} must not be empty`)
        return true;
        else
    } else {
        // set field valid
        setValid(field);
        return false;
    }
}
function isEmpty(value) {
    if(value === '') return true;
    return false;
}


