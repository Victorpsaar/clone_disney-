document.addEventListener('DOMContentLoaded', function() {
    
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');
    
    const hero = document.querySelector('.hero');
    hero.clientHeight

    window.addEventListener('scroll', function () {
        if (hero.clientHeight > window.scrollY) {
            this.document.querySelector('.header').classList.add('header--is-hidden')
        } else {
            this.document.querySelector('.header').classList.remove('header--is-hidden')
        }
    })

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const targetTab = btn.target.dataset.tabButton;
            const tab = document.querySelector(`[data-tab-id="${targetTab}"]`);
            hideTab();
            tab.classList.add('shows__list--is-active');
            hideBtn();
            btn.target.classList.add('shows__tabs__button--is-active');
        })
    }

    for (let i = 0;i < questions.length; i++) {
        questions[i].addEventListener('click', toggler)
    }
})

function hideBtn() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

function hideTab() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}

function toggler(elemento) {
    const classe = 'faq__questions__item--is-open';
    const element = elemento.target.parentNode;

    element.classList.toggle(classe);
}

