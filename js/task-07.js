const inputEL = document.querySelector('#font-size-control');
const abracadabraEl = document.querySelector('#text');

inputEL.addEventListener("input", () => {

    abracadabraEl.style.fontSize = inputEL.value +'px';
    console.log(abracadabraEl.style.fontSize);   
   });


