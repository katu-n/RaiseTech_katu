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

// 文字を加えたときにimgが伸びるように補正
function adjustBackgroundHeight() {
    const flowBottomTexts1 = document.querySelectorAll('.bottom-text-1');
    const flowBottomTexts2 = document.querySelectorAll('.bottom-text-2');
    const innerImg1 = document.querySelector('.inner-img1');
    const innerImg2 = document.querySelector('.inner-img2');

    const title1 = innerImg1.querySelector('.u-side-title');
    const underbar1 = innerImg1.querySelector('.c-underbar__inner');
    const title2 = innerImg2.querySelector('.u-side-title');
    const underbar2 = innerImg2.querySelector('.c-underbar__inner');

    let totalHeight1 = title1.offsetHeight + underbar1.offsetHeight + 100; // Add 100px buffer
    flowBottomTexts1.forEach((element) => {
        totalHeight1 += element.offsetHeight;
    });

    let totalHeight2 = title2.offsetHeight + underbar2.offsetHeight + 100; // Add 100px buffer
    flowBottomTexts2.forEach((element) => {
        totalHeight2 += element.offsetHeight;
    });

    const maxHeight = Math.max(totalHeight1, totalHeight2);
    
    innerImg1.style.height = maxHeight + 'px';
    innerImg2.style.height = maxHeight + 'px';
}

// Execute the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', adjustBackgroundHeight);

// Adjust the height on window resize
window.addEventListener('resize', adjustBackgroundHeight);

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

// map
function adjustMapHeight() {
    const mapContent = document.querySelector('.p-map__content-wrapper');
    const mapIframe = document.querySelector('.p-map iframe');
    

    const contentHeight = mapContent.offsetHeight;
    const marginBottom = parseFloat(getComputedStyle(mapContent).marginBottom);
    const marginTop = parseFloat(getComputedStyle(mapContent).marginTop);
    mapIframe.style.height = (contentHeight + marginTop + marginBottom )+ 'px';
}

// DOMが読み込まれた後に関数を実行
document.addEventListener('DOMContentLoaded', adjustMapHeight);

// ウィンドウのサイズが変更されたときに高さを再調整
window.addEventListener('resize', adjustMapHeight);
