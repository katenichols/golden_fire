import {body, pageHeaderButton, pageHeaderOverlay, pageHeaderWrapper, nav, pageHeaderSwitch, mainScreen, lastFocus} from '../main';

export const closeModal = () => {
  body.style.position = 'relative';
  body.style.top = 'auto';
  pageHeaderButton.classList.remove('js-page-header__button--opened');
  pageHeaderOverlay.classList.remove('js-page-header__overlay--opened');
  pageHeaderWrapper.classList.remove('js-page-header__wrapper--opened');
  nav.classList.remove('js-nav--opened');
  pageHeaderSwitch.classList.remove('js-page-header__switch--opened');
  mainScreen.classList.remove('js-main-screen--opened');
  lastFocus.focus();
};
