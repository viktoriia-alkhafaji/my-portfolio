let massageForm = document.querySelector('#massage-form');
let emailForm = document.querySelector('#email-form');

massageForm.keyup = abilityOfSendButton;
emailForm.onchange = abilityOfSendButton;

function abilityOfSendButton() {
    if (massageForm.value !== '' && emailForm.value !== '') {
        submitButton.disabled = false;
    }
    else if (massageForm.value == '' || emailForm.value == '') {
        submitButton.disabled = true;
        console.log('Fill in all the fields, please!');
    }
}


let submitButton = document.querySelector('#submit-button');
submitButton.disabled = true;
submitButton.onclick = function (event) {
    event.preventDefault();
}