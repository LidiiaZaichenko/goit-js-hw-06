const inputEL = document.querySelector('#font-size-control');
const abracadabraEl = document.querySelector('#text');
abracadabraEl.style.fontSize = inputEL.value +'px';
console.log(inputEL.value);

inputEL.addEventListener("input", () => {

    abracadabraEl.style.fontSize = inputEL.value +'px';
    console.log(abracadabraEl.style.fontSize);   
   });


