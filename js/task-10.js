function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const divEL = document.querySelector('#controls');
console.log(divEL);

const inputEL=divEL.firstElementChild;
console.log(inputEL);

const boxesEL= document.querySelector('#boxes');
console.log(boxesEL);

const createButton = document.querySelector('button[data-create]');
console.log(createButton);

const destroyButton = document.querySelector('button[data-destroy]');
console.log(destroyButton);

const amount = 3;
console.log(amount); 
inputEL.addEventListener("input", () => {
  const amount = inputEL.value;
  console.log(amount);  
 });

createButton.addEventListener("click",createBoxes);
function createBoxes(amount) {
  const newEl = document.createElement('div');
  
}