
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
    const cardText = document.querySelectorAll('.c-card__text');
    for(let i=0; i<cardText.length; i++){
        let totalHeight = cardText[i].offsetHeight;
        console.log('OK');
        card[i].style.height = totalHeight + "px";
    }
}

//高さが計算される前にDOMが変更される
const images = document.querySelectorAll('.c-card__img img');
images.forEach((img) => {
    img.onload = function(){
        adjustBackgroundHeight();
    };
});

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', adjustBackgroundHeight);

// Adjust the height on window resize
window.addEventListener('resize', adjustBackgroundHeight);