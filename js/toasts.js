// we create an element with js
function toasts(message, timeRemove = 3000, color = 'success') {
    let toasts = document.createElement('div');
    toasts.classList.add('toasts',color);
    toasts.innerHTML = message;
    
    addToasts(toasts);
    // we delete a toaster in 5 miliseconds
    setTimeout(function(){deleteToasts(toasts)},timeRemove);
}


function deleteToasts (toasts) {
    toasts.remove();
    let allToasts = document.querySelectorAll('.toasts');
    if(allToasts.length == 0) document.querySelector('.toasts-field').remove();
}

function addToasts (toasts) {
    let toastsField = document.querySelector('.toasts-field');
    if (toastsField) {
        toastsField.appendChild(toasts);
    }
    else {
        let toastsField = document.createElement('div');
        toastsField.classList.add('toasts-field');
        document.querySelector('.form-wrapper').appendChild(toastsField);
        toastsField.appendChild(toasts);
    }
}