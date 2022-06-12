import {JSPREFIX, pageHeaderButton, pageHeaderOverlay, pageHeaderWrapper, nav, pageHeaderSwitch, mainScreen} from '../main';
export const OPENEDMODIFIER = '--opened';

export const onPageHeaderButtonClick = () => {
  pageHeaderButton.classList.toggle(`${JSPREFIX}page-header__button${OPENEDMODIFIER}`);
  pageHeaderOverlay.classList.toggle(`${JSPREFIX}page-header__overlay${OPENEDMODIFIER}`);
  pageHeaderWrapper.classList.toggle(`${JSPREFIX}page-header__wrapper${OPENEDMODIFIER}`);
  nav.classList.toggle(`${JSPREFIX}nav${OPENEDMODIFIER}`);
  pageHeaderSwitch.classList.toggle(`${JSPREFIX}page-header__switch${OPENEDMODIFIER}`);
  mainScreen.classList.toggle(`${JSPREFIX}main-screen${OPENEDMODIFIER}`);
};
