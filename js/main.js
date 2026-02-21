import { SELECTORS } from "./constantins.js";

function openMenu() {
    SELECTORS.mobileMenu.hidden = false;
    SELECTORS.overlay.hidden = false;
    SELECTORS.openBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    SELECTORS.mobileMenu.hidden = true;
    SELECTORS.overlay.hidden = true;
    SELECTORS.openBtn.setAttribute('aria-expanded', 'false');
}


function initEventListener() {
    SELECTORS.openBtn.addEventListener('click', openMenu);
    SELECTORS.closeBtn.addEventListener('click', closeMenu);
}

document.addEventListener('DOMContentLoaded', initEventListener);