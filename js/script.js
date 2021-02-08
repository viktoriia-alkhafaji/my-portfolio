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
    if(!emailForm.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
        toasts('Please fill in a valid e-mail adress',3000, 'error-color');
        
    }
    else if (messageForm.value.length<20){
        toasts('Your message seems to be too short. Enter at least 20 symbols.', 4000, 'error-color');
    }
    else {
        toasts('Your message was sent! Thank you for your message!', 5000, 'success-color');
    }
    
}


/* submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('work');
})
 */