
//Home page hero section slider
$(function () {

    $('.hero__bg').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        fade: true,
        "cssEase": "linear",
        "autoplaySpeed": 0,
        "speed": 4000,
        infinite: true
    })
});

//Home page modal 

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", (toggleModal));
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }

})
    ();



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