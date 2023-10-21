window.lazySizesConfig = window.lazySizesConfig || {},
window.lazySizesConfig.expand = 9,

document.addEventListener("DOMContentLoaded", function () {
    var closePopupButton = document.querySelector("#btn-close-album-popup");
    if (closePopupButton) {
        closePopupButton.addEventListener("click", function () {
            document.querySelector("#popup-album-image").classList.remove("is-active");
        });
    }

    if (window.innerWidth > 0) {
        var thumbsSwiper = new Swiper("#popup-album-image .gallery-thumbs", {
            spaceBetween: 8,
            slidesPerView: 2,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            speed: 1200,
            breakpoints: {
                3000: {
                    spaceBetween: 8,
                    slidesPerView: 11
                },
                2560: {
                    spaceBetween: 8,
                    slidesPerView: 10
                },
                1366: {
                    spaceBetween: 8,
                    slidesPerView: 7
                },
                1024: {
                    spaceBetween: 8,
                    slidesPerView: 5
                },
                768: {
                    spaceBetween: 8,
                    slidesPerView: 4
                }
            }
        });
        thumbsSwiper.slideTo(1,0);

        var topSwiper = new Swiper("#popup-album-image .gallery-top", {
            spaceBetween: 0,
            effect: "flip",
            speed: 1200,
            keyboard: {
                enabled: true
            },
            navigation: {
                nextEl: "#popup-album-image .swiper-button-next",
                prevEl: "#popup-album-image .swiper-button-prev"
            },
            thumbs: {
                swiper: thumbsSwiper
            }
        });
    }
});

