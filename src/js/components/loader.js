// Magic string
const classMask = '.mask';
const classMaskHide = 'mask__hide';
const opacityNull = '0';

// Variable
const mask = document.querySelector(classMask);

// Event
window.addEventListener('load', () => {
    mask.style.opacity = opacityNull;
    // mask.classList.add(classMaskHide);
    setTimeout(() => {
        mask.remove();
    }, 600);
})