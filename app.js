//using selectors inside the element
// traversing the dom

const btns = document.querySelector('.question-btn');
console.log(btns)
const questions = document.querySelectorAll('.question');

// question-text is the class whit need add at the btns

btns.addEventListener('click', function(){
    // link.classList.toggle('show-sidebar');
    questions.classList.toggle('question-text');
});

// no funciono por que al aplicar querySelectorAll se tiene que iterar por cada uno de los botones que se seleccionaron y entonces aplicar el escuchador de eventos