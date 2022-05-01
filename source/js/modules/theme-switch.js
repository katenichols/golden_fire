import {pageHeaderButton} from './on-page-header-button-click';
const DARKMODIFIER = '--dark';

export const pageBody = document.querySelector('.page-body');
export const pageHeader = pageBody.querySelector('.page-header');
export const navListLinks = pageBody.querySelectorAll('.nav__list-link');
export const switchLabel = pageBody.querySelector('.page-header__switch-label');

let navLinks = Array.from(navListLinks);

export const themeToggle = (arr) => {
  if (pageBody.classList.contains('page-body--dark')) {
    pageBody.classList.remove(`page-body${DARKMODIFIER}`);
    pageHeader.classList.remove(`page-header${DARKMODIFIER}`);
    switchLabel.classList.remove(`page-header__switch-label${DARKMODIFIER}`);
    pageHeaderButton.classList.remove(`page-header__button${DARKMODIFIER}`);
    arr.forEach((el) => {
      el.classList.remove(`nav__list-link${DARKMODIFIER}`);
    });
  } else {
    pageBody.classList.add(`page-body${DARKMODIFIER}`);
    pageHeader.classList.add(`page-header${DARKMODIFIER}`);
    switchLabel.classList.add(`page-header__switch-label${DARKMODIFIER}`);
    pageHeaderButton.classList.add(`page-header__button${DARKMODIFIER}`);
    arr.forEach((el) => {
      el.classList.add(`nav__list-link${DARKMODIFIER}`);
    });
  }
};

switchLabel.addEventListener('click', () => {
  themeToggle(navLinks);
});
