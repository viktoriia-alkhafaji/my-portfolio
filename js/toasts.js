// we create an element with js
function toasts(message, timeRemove = 3000, color = 'success') {
    let toasts = document.createElement('div');
    toasts.classList.add('toasts',color);
    toasts.innerHTML = message;
    document.querySelector('body').appendChild(toasts);

    // we delete a toaster in 5 miliseconds
    setTimeout(function(){deleteToasts(toasts)},timeRemove);
}


function deleteToasts (toasts) {
    toasts.remove();
}