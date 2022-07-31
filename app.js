//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll('.question-btn');
console.log(btns)

btns.forEach(function(btn) {
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget.parentElement.parentElement);
    }) // con esto nos aseguramos de que tarjeta de pregunta estamos seleccionando para luego aplicar .toggle para agregar la class de css
})