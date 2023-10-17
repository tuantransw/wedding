window.lazySizesConfig = window.lazySizesConfig || {},
window.lazySizesConfig.expand = 9,
document.addEventListener("DOMContentLoaded", function () {
    function openAlbumPopup() {
        var albumItems = document.querySelectorAll("#album-main .album-item");
        albumItems.forEach(function (item) {
            item.addEventListener("click", function (event) {
                event.preventDefault();
                if (window.innerWidth > 0) {
                    var imgSrc = this.querySelector("img").getAttribute("data-src");
                    var albumThumbs = document.querySelectorAll('#popup-album-image [data-src="' + imgSrc + '"]');
                    var index = 0;
                    for (var i = 0; i < albumThumbs.length; i++) {
                        if (albumThumbs[i].parentNode.classList.contains("swiper-slide")) {
                            index = i;
                            break;
                        }
                    }
                    console.log(index);
                    topSwiper.slideTo(index, 0);
                    setTimeout(function () {
                        document.querySelector("#popup-album-image").classList.add("is-active");
                    }, 300);
                }
            });
        });
    }

    openAlbumPopup();

    var closePopupButton = document.querySelector("#btn-close-album-popup");
    if (closePopupButton) {
        closePopupButton.addEventListener("click", function () {
            document.querySelector("#popup-album-image").classList.remove("is-active");
        });
    }

    var closePopupMobileButton = document.querySelector("#btn-close-album-popup-m");
    if (closePopupMobileButton) {
        closePopupMobileButton.addEventListener("click", function () {
            document.querySelector("#popup-album-image-m").classList.remove("is-active");
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
