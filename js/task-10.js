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


createButton.addEventListener("click",onCreateButtonClick);

destroyButton.addEventListener("click",onDestroyButtonClick);

function onDestroyButtonClick() {
  boxesEL.innerHTML = " ";
};

function onCreateButtonClick() {
  const amount = Number(inputEL.value);
  console.log(amount);
  createBoxes(amount);
};

function createBoxes(amount){
  const divs = [];
  let sizes = 30;
  for (let i = 0; i <= amount-1; i+=1) {
   const element = document.createElement('div');
   element.style.width =sizes+'px';
   element.style.height =sizes+'px';
   element.style.backgroundColor = getRandomHexColor();
   sizes+=10;
   divs.push(element);
   console.log(element);
   console.log(divs);
   boxesEL.append(...divs);
  }
}
