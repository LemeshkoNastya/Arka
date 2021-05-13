// Magic strings
const classDropDown = '.header__menu__dropdown';
const classDropDownContent = '.dropdown__content';
const classDisplayNone = 'none';
const classDisplayBlock = 'block';
const classScroll = 'scroll__not';
const classLink = '.list__link';
const classShadowed = '.shadowed';

// Variables
const dropdown = document.querySelector(classDropDown);
const dropdownContent = document.querySelector(classDropDownContent);
const links = document.querySelectorAll(classLink);
const shadowed = document.querySelector(classShadowed);
let dropdownNavOpen = false;

// Functions
const showDropDown = () => {
    dropdownContent.style.display = classDisplayBlock;
    shadowed.style.display = classDisplayBlock;
    document.body.classList.add(classScroll);
}

const hideDropDown = () => {
    dropdownContent.style.display = classDisplayNone;
    shadowed.style.display = classDisplayNone;
    document.body.classList.remove(classScroll);
}

// Events
dropdown.addEventListener('click', () => {
    dropdownNavOpen = !dropdownNavOpen;
    if (dropdownNavOpen) {
        showDropDown();
    } else {
        hideDropDown();
    }
});

links.forEach(link => {
    link.addEventListener('click', () => {
        hideDropDown();
    });
});

shadowed.addEventListener('click', () => {
    hideDropDown();
});