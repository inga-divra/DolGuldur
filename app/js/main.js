/* let firstIndex = 0;

function autoSlide() {
    setTimeout(autoSlide, 3000)

    let pics;
    const img = document.querySelectorAll('img');

    for (pics = 0; pics < img.length; pics++) {
        img[pics].style.display = "none";
    }
    firstIndex++;
    if (firstIndex > img.length) {
        firstIndex = 1;
    }
    img[firstIndex - 1].style.display = "block";
}

autoSlide(); */


const swiper = new Swiper('.swiper', {

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
});