const container = document.querySelector(".container");
const signUpBtn = document.querySelector('.red-bg button');

signUpBtn.addEventListener('click', function(){
    container.classList.toggle('change');
})