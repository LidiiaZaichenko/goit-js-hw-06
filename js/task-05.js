const inputEL = document.querySelector('#name-input');

const nameEl = document.querySelector('#name-output');

inputEL.addEventListener("input", () => {
    if (inputEL.value.length === 0) {
      nameEl.textContent = 'Anonymous';  
    } else {nameEl.textContent = inputEL.value;   
    }
    console.log(inputEL.value.length);
  });
  
