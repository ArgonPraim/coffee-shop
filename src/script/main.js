import Swiper, { Navigation } from "swiper";

const buttonToggleMoreAddress = document.getElementById('open-more-address');
const addressItemMobile = document.querySelector('.contacts-container__address-list');
const buttonToggleMenu = document.getElementById('contact-button');
const menuList = document.getElementById('header-menu');
const contactLIst = document.getElementById('contact-list');

buttonToggleMenu.addEventListener('click', toggleMenu);

buttonToggleMoreAddress.addEventListener('click', toggleVisible);

function toggleVisible() {
  addressItemMobile.classList.toggle('open');
}

function toggleMenu() {
  buttonToggleMenu.classList.toggle('burger-button--active');
  menuList.classList.toggle('contact-list--active');
  contactLIst.classList.toggle('list-active');
}

Swiper.use([Navigation]);

new Swiper(".swiper-slider", {
  loop: true,
  spaceBetween: 25,
  slidesPerView: 1,
  speed: 400,
  simulateTouch: false,

  breakpoints: {
    380: {
      simulateTouch: true,
      slidesPerView: 1,
      spaceBetween: 25
    },
    768: {
      spaceBetween: 25,
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 25
    }
  },

  slideClass: 'swiper-slide',
  wrapperClass: 'swiper-list',
  containerModifierClass: 'swiper-slider--',
  slideActiveClass: 'swiper-slide--active',
  slideDuplicateActiveClass: 'swiper-slide--active--duplicate',
  slideVisibleClass: 'swiper-slide--visible',
  slideDuplicateClass: 'swiper-slide--duplicate',
  slideNextClass: 'swiper-slide--next',
  slideDuplicateNextClass: 'swiper-slide--next--duplicate',
  slidePrevClass: 'swiper-slide--prev',
  slideDuplicatePrevClass: 'swiper-slide--prev--duplicate',

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  a11y: {
    prevSlideMessage: 'Назад',
    nextSlideMessage: 'Вперёд',
    firstSlideMessage: 'Первый пример',
    lastSlideMessage: 'Последний пример',
    paginationBulletMessage: 'Пример №{{index}}',
    notificationClass: 'sites__notification'
  }
});
