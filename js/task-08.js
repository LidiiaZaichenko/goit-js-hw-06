const form = document.querySelector('.login-form');

form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event){
event.preventDefault();
const formData = new FormData(event.currentTarget);
formData.forEach((inputValue,inputName)=>{
    console.log('inputName-',inputName);
    console.log('inputValue-',inputValue);
});

    console.log('клік')
}
