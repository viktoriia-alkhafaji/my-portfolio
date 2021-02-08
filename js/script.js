let massageForm = document.querySelector('#massage-form');
let emailForm = document.querySelector('#email-form');

massageForm.onkeyup = abilityOfSendButton;
emailForm.onkeyup = abilityOfSendButton;

function abilityOfSendButton() {
    if (massageForm.value !== '' && emailForm.value !== '') {
        submitButton.disabled = false;
    }
    else if (massageForm.value == '' || emailForm.value == '') {
        submitButton.disabled = true;
    }
}


let submitButton = document.querySelector('#submit-button');
submitButton.disabled = true;
submitButton.onclick = function (event) {
    event.preventDefault();
    if(emailForm.value.includes('@')){
        console.log('Thank you for your massage');
    }
    else {
        console.log('Please fill in the correct e-mail adress');
    }
    
}


/* submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('work');
})
 */