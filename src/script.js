const form = document.querySelector('form');

form.addEventListener('change', event => {
    
})

const inputs = document.querySelectorAll('#page-login main form .container-input input');

inputs.forEach(input => {
    input.addEventListener('focus', handleFocusInput);
    input.addEventListener('blur', handleBlurInput);
    input.addEventListener('keyup', handleKeyupInput);
})

function handleBlurInput(event){
    const input = event.target;
    const label = input.closest('.container-input').querySelector('label');

    if(input.value.length > 0){
        return;
    }

    label.classList.remove('is-focused');
}

function handleFocusInput(event){
   const input = event.target;
   const label = input.closest('.container-input').querySelector('label');
   label.classList.add('is-focused');
}

function handleKeyupInput(event) {
    const input = event.target;
    enableButton();

    if(input.value.length > 0){
        input.classList.add('is-occupy');
        return;
    }

    input.classList.remove('is-occupy');
} 

function enableButton() {
    const [button] = document.querySelectorAll('#page-login main form .button-entrar');

    inputs.forEach(input => {
        if (input.value === '') {
            button.disabled = true
            return;
        }
        button.disabled = false;
    });
}

enableButton()
