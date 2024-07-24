
// click event
document.querySelector('.toggle__btn').addEventListener('click',function() {
        document.querySelector('.l-humberger').classList.toggle('open');
        document.querySelector('.l-humberger').classList.toggle('close');
        document.querySelector('.l-humberger__toggle').classList.toggle('open');
        document.querySelector('.l-humberger__fixed').classList.toggle('open');
        document.querySelector('.l-humberger__btn').classList.toggle('open');
        document.querySelector('.l-humberger__overlay').classList.toggle('open');
    }
);

document.querySelector('.l-humberger__toggle').addEventListener('click',function() {
        document.querySelector('.l-humberger').classList.toggle('open');
        document.querySelector('.l-humberger').classList.toggle('close');
        document.querySelector('.l-humberger__toggle').classList.toggle('open');
        document.querySelector('.l-humberger__fixed').classList.toggle('open');
        document.querySelector('.l-humberger__btn').classList.toggle('open');
        document.querySelector('.l-humberger__overlay').classList.toggle('open');
    }
);


// カードのimg高さ調整
function adjustBackgroundHeight() {
    const card = document.querySelectorAll('.c-card__img');
    const cardText = document.querySelector('.c-card__text');

    let totalHeight = cardText.offsetHeight;
    
    card.forEach((element) => {
        element.style.height = totalHeight + 'px';
    });
}

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', adjustBackgroundHeight);

// Adjust the height on window resize
window.addEventListener('resize', adjustBackgroundHeight);