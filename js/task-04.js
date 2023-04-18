const a = document.querySelector('#value');
console.log(a);
let counterValue = 0;

const decrementButton = document.querySelector('button[data-action="decrement"]');

decrementButton.addEventListener("click", () => {
  console.log("Button -1 was clicked");
  counterValue -=1;
  console.log(counterValue);
  a.textContent = counterValue;
});

const incrementButton = document.querySelector('button[data-action="increment"]');

incrementButton.addEventListener("click", () => {
  console.log("Button +1 was clicked");
  counterValue +=1;
  console.log(counterValue);
  a.textContent = counterValue;
});

