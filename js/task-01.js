const navEl = document.querySelectorAll('li.item');
console.log('Number of categories:',navEl.length);
console.log(' ');

navEl.forEach(element=> {
    console.log('Category:',element.firstElementChild.textContent);
    console.log('Elements:',element.lastElementChild.querySelectorAll('li').length);
    console.log(' ');
    });

   
