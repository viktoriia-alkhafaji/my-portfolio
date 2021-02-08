let messageForm = document.querySelector('#message-form');
let emailForm = document.querySelector('#email-form');

messageForm.onkeyup = abilityOfSendButton;
emailForm.onkeyup = abilityOfSendButton;

function abilityOfSendButton() {
    if (messageForm.value !== '' && emailForm.value !== '') {
        submitButton.disabled = false;
    }
    else if (messageForm.value == '' || emailForm.value == '') {
        submitButton.disabled = true;
    }
}


let submitButton = document.querySelector('#submit-button');
submitButton.disabled = true;
submitButton.onclick = function (event) {
    event.preventDefault();
    if(emailForm.value.includes('@')){
        toasts('Thank you for your message!', 3000, 'success-color');
    }
    else {
        toasts('Please fill in the correct e-mail adress',3000, 'error-color');
    }
    
}


/* submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('work');
})
 */