const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('ul');
console.log(ingredientsEl);

const liEl=[];

ingredients.forEach(element => {
const navEl = document.createElement('li');
navEl.classList.add("item");
navEl.textContent = element;

console.log(navEl);
liEl.push(navEl);

});
console.log(liEl);


ingredientsEl.append(...liEl);;




