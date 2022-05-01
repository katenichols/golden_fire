export const pageHeaderButton = document.querySelector('.page-header__button');

const pageHeaderOverlay = document.querySelector('.page-header__overlay');
const pageHeaderWrapper = document.querySelector('.page-header__wrapper');
const nav = pageHeaderWrapper.querySelector('.nav');
const pageHeaderSwitch = pageHeaderWrapper.querySelector('.page-header__switch');

export const onPageHeaderButtonClick = () => {
  if (pageHeaderButton.classList.contains('page-header__button--opened')) {
    pageHeaderButton.classList.remove('page-header__button--opened');
    pageHeaderOverlay.classList.remove('page-header__overlay--opened');
    pageHeaderWrapper.classList.remove('page-header__wrapper--opened');
    nav.classList.remove('nav--opened');
    pageHeaderSwitch.classList.remove('page-header__switch--opened');
  } else {
    pageHeaderButton.classList.add('page-header__button--opened');
    pageHeaderOverlay.classList.add('page-header__overlay--opened');
    pageHeaderWrapper.classList.add('page-header__wrapper--opened');
    nav.classList.add('nav--opened');
    pageHeaderSwitch.classList.add('page-header__switch--opened');
  }
};
