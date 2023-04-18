const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener("blur", () => {
    if (inputEL.value.length < inputEL.getAttribute('data-length')) {
        inputEL.classList='invalid'  } 
        else { inputEL.classList='valid'; };
     console.log(inputEL.value.length);
   });
console.log(inputEL.getAttribute('data-length'))
