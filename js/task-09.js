function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanEL = document.querySelector('.color');
console.log(spanEL);
const buttonEL = document.querySelector('.change-color');
console.log(buttonEL);
const body = document.body;

buttonEL.addEventListener("click", () => {
  console.log("Button was clicked");
  spanEL.textContent = body.style.backgroundColor = getRandomHexColor();

});

