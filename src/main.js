document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            console.log(btn);
        })
    }

    for (let i = 0;i < questions.length; i++) {
        questions[i].addEventListener('click', toggler)
    }
})

function toggler(elemento) {
    const classe = 'faq__questions__item--is-open';
    const element = elemento.target.parentNode;

    element.classList.toggle(classe);
}