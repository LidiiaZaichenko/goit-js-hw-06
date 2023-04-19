const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener("blur", () => {
    if (inputEL.value.length !== Number(inputEL.getAttribute('data-length'))) {
        inputEL.classList='invalid'  } 
        else { inputEL.classList='valid'; };
     console.log(inputEL.value.length);
   });
console.log(Number(inputEL.getAttribute('data-length')))
