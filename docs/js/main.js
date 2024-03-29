//Home page hero section slider
$(function () {
  $('.hero__bg').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    speed: 4000,
    infinite: true,
  });

  $('.hamburger').on('click', function () {
    $('.mobile-menu').toggleClass('active');
    $('.body').toggleClass('lock');
    $(this).toggleClass('active');
  });

  $('.menu a').on('click', function () {
    $('.mobile-menu').removeClass('active');
    $('.body').removeClass('lock');
    $('.hamburger').removeClass('active');
  });
});

//Home page modal

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

/* Fixed menu*/
const menu = document.querySelector('.menu');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    menu.classList.add('fixed');
  } else {
    menu.classList.remove('fixed');
  }
});

//Swiper
/* const swiper = new Swiper('.swiper', {

    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
}); */
