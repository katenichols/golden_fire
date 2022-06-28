import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import './modules/theme-switch';
import {onPageHeaderButtonClick} from './modules/on-page-header-button-click';
import {closeModal} from './modules/close-modal';
import {escKey} from './utils/esc-key';
import {switchLabel} from './modules/theme-switch';

export const JSPREFIX = 'js-';

export const body = document.querySelector('.page-body');
export const pageHeaderButton = document.querySelector('.page-header__button');
export const pageHeaderOverlay = document.querySelector('.page-header__overlay');
export const pageHeaderWrapper = document.querySelector('.page-header__wrapper');
export const nav = pageHeaderWrapper.querySelector('.nav');
export const pageHeaderSwitch = pageHeaderWrapper.querySelector('.page-header__switch');
export const mainScreen = document.querySelector('.main-screen');
export const focusables = pageHeaderWrapper.querySelectorAll('.page-header__button, .nav__list-link, .page-header__link, .page-header__switch-label');
const firstFocusable = focusables[0];
const lastFocusable = focusables[focusables.length - 1];

export const lastFocus = document.activeElement;
// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();

    const onEscKeydown = (evt) => {
      if (escKey(evt)) {
        closeModal();
        return;
      }
    };

    const focusTrap = (evt) => {
      if (pageHeaderWrapper.classList.contains('js-page-header__wrapper--opened')) {
        if (evt.key === 'Tab') {
          if (evt.shiftKey) {
            if (document.activeElement === firstFocusable) {
              evt.preventDefault();
              lastFocusable.focus();
            }
          } else {
            if (document.activeElement === lastFocusable) {
              evt.preventDefault();
              firstFocusable.focus();
            }
          }
        }
      }
    };

    if (document.body.contains(pageHeaderButton)) {
      pageHeaderButton.addEventListener('click', () => {
        onPageHeaderButtonClick();
      });
    }

    document.addEventListener('click', (evt) => {
      if (evt.target === pageHeaderOverlay) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (evt) => {
      focusTrap(evt);
      onEscKeydown(evt);
    });
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✔️

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
