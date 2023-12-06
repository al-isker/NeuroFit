const hideElement = (el) => {
    if(el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(100px)';
    }
}

const showElement = (el) => {
    if(el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.animate').forEach(el => {
        hideElement(el.querySelector('.text'));
        hideElement(el.querySelector('img'));
    });
});


document.addEventListener('scroll', () => {
    document.querySelectorAll('.animate').forEach(el => {
        const middleEl = el.offsetTop + el.offsetHeight / 2;
        const bottomWindow = window.scrollY + window.innerHeight;

        if(bottomWindow >= middleEl) {
            showElement(el.querySelector('.text'));
            showElement(el.querySelector('img'));
        }
        else {
            hideElement(el.querySelector('.text'));
            hideElement(el.querySelector('img'));
        }
    });
});