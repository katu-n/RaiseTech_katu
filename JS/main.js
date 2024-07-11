// c-inner__flow-bottom
function Bottomtext() {
    const flowBottomTexts1 = document.querySelectorAll('.bottom-text-1');
    const flowBottomTexts2 = document.querySelectorAll('.bottom-text-2');
    let currentBottom1 = 0;

    flowBottomTexts1.forEach((element) => {
        element.style.bottom = currentBottom1 + "px";

        const height = element.offsetHeight;
        const margin = parseFloat(getComputedStyle(element).marginBottom);
        currentBottom1 +=(height + margin);
    });

    let currentBottom2 = 0;
    flowBottomTexts2.forEach((element) => {
        element.style.bottom = currentBottom2 + "px";

        const height = element.offsetHeight;
        const margin = parseFloat(getComputedStyle(element).marginBottom);
        currentBottom2 +=(height + margin);
    });
}


window.onresize = Bottomtext;
window.onload = Bottomtext;

// click event
document.querySelector('.l-sidebar__title').addEventListener('click',function() {
        document.querySelector('.l-humberger').classList.toggle('open');
        document.querySelector('.l-humberger__toggle').classList.toggle('open');
        document.querySelector('.l-humberger__fixed').classList.toggle('open');
        document.querySelector('.l-humberger__btn').classList.toggle('open');
        document.querySelector('.l-humberger__overlay').classList.toggle('open');
    }
);

document.querySelector('.l-humberger__toggle').addEventListener('click',function() {
        document.querySelector('.l-humberger').classList.toggle('open');
        document.querySelector('.l-humberger__toggle').classList.toggle('open');
        document.querySelector('.l-humberger__fixed').classList.toggle('open');
        document.querySelector('.l-humberger__btn').classList.toggle('open');
        document.querySelector('.l-humberger__overlay').classList.toggle('open');
    }
);