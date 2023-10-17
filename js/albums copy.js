"use strict";
function getParameterByName(e, i) {
    i || (i = window.location.href),
    e = e.replace(/[\[\]]/g, "\\$&");
    var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(i);
    return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null
}
function GetAllParameter(e) {
    let i = {};
    e || (e = window.location.href);
    let t = e.split("?")[1];
    return t ? ((t = t.split("&")).forEach(e=>{
        const t = e.split("=")[0]
          , o = e.split("=")[1];
        i = {
            ...i,
            [t]: o
        }
    }
    ),
    i) : i
}
window.lazySizesConfig = window.lazySizesConfig || {},
window.lazySizesConfig.expand = 9,
jQuery(document).ready(function(e) {
    if ([...e("#album-main .album-item")].forEach((i,o)=>{
        e(i).on("click", function(i) {
            if (i.preventDefault(),
            e(window).width()) {
                const i = e(this).find("img").attr("data-src")
                  , o = e("#popup-album-image").find('[data-src="' + i + '"]').parent(".swiper-slide").index();
                console.log(o),
                t.slideTo(o, 0),
                setTimeout(()=>{
                    e("#popup-album-image").addClass("is-active")
                }
                , 300)
            }
        })
    }
    ),
    e("#btn-close-album-popup").on("click", function(i) {
        e("#popup-album-image").removeClass("is-active")
    }),
    e("#btn-close-album-popup-m").on("click", function(i) {
        e("#popup-album-image-m").removeClass("is-active")
    }),
    e(window).width())
        var i = new Swiper("#popup-album-image .gallery-thumbs",{
            spaceBetween: 8,
            slidesPerView: 2,
            freeMode: !0,
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
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
        })
          , t = new Swiper("#popup-album-image .gallery-top",{
            spaceBetween: 0,
            effect: "flip",
            speed: 1200,
            keyboard: {
                enabled: !0
            },
            navigation: {
                nextEl: "#popup-album-image .swiper-button-next",
                prevEl: "#popup-album-image .swiper-button-prev"
            },
            thumbs: {
                swiper: i
            }
        });
});
