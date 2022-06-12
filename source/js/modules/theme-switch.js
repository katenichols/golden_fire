import {JSPREFIX, pageHeaderButton} from '../main';
// import {pageHeaderButton} from './on-page-header-button-click';
const DARKMODIFIER = '--dark';

export const pageBody = document.querySelector('.page-body');
export const pageHeader = pageBody.querySelector('.page-header');
export const navListLinks = pageBody.querySelectorAll('.nav__list-link');
export const switchLabel = pageBody.querySelector('.page-header__switch-label');
const footer = pageBody.querySelector('.footer');
const mainScreenWrapper = pageBody.querySelector('.main-screen__wrapper');
const languages = pageBody.querySelector('.languages');

let navLinks = Array.from(navListLinks);

export const themeToggle = (arr) => {
  if (pageBody.classList.contains(`${JSPREFIX}page-body--dark`)) {
    pageBody.classList.remove(`${JSPREFIX}page-body${DARKMODIFIER}`);
    pageHeader.classList.remove(`${JSPREFIX}page-header${DARKMODIFIER}`);
    switchLabel.classList.remove(`${JSPREFIX}page-header__switch-label${DARKMODIFIER}`);
    if (document.body.contains(pageHeaderButton)) {
      pageHeaderButton.classList.remove(`${JSPREFIX}page-header__button${DARKMODIFIER}`);
    }
    arr.forEach((el) => {
      el.classList.remove(`${JSPREFIX}nav__list-link${DARKMODIFIER}`);
    });
    footer.classList.remove(`${JSPREFIX}footer${DARKMODIFIER}`);
    mainScreenWrapper.classList.remove(`${JSPREFIX}main-screen__wrapper${DARKMODIFIER}`);
    languages.classList.remove(`${JSPREFIX}languages${DARKMODIFIER}`);
  } else {
    pageBody.classList.add(`${JSPREFIX}page-body${DARKMODIFIER}`);
    pageHeader.classList.add(`${JSPREFIX}page-header${DARKMODIFIER}`);
    switchLabel.classList.add(`${JSPREFIX}page-header__switch-label${DARKMODIFIER}`);
    if (document.body.contains(pageHeaderButton)) {
      pageHeaderButton.classList.add(`${JSPREFIX}page-header__button${DARKMODIFIER}`);
    }
    arr.forEach((el) => {
      el.classList.add(`${JSPREFIX}nav__list-link${DARKMODIFIER}`);
    });
    footer.classList.add(`${JSPREFIX}footer${DARKMODIFIER}`);
    mainScreenWrapper.classList.add(`${JSPREFIX}main-screen__wrapper${DARKMODIFIER}`);
    languages.classList.add(`${JSPREFIX}languages${DARKMODIFIER}`);
  }
};

switchLabel.addEventListener('click', () => {
  themeToggle(navLinks);
});
