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
            e(window).width() > 480) {
                const i = e(this).find("img").attr("data-src")
                  , o = e("#popup-album-image").find('[data-src="' + i + '"]').parent(".swiper-slide").index();
                console.log(o),
                t.slideTo(o, 0),
                setTimeout(()=>{
                    e("#popup-album-image").addClass("is-active")
                }
                , 300)
            } else {
                const i = e(this).index();
                e("#owl-carousel-popup").trigger("to.owl.carousel", [i, 0]),
                setTimeout(()=>{
                    e("#popup-album-image-m").addClass("is-active")
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
    e(window).width() > 480)
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
    // e("#owl-carousel-popup").owlCarousel({
    //     items: 1,
    //     margin: 5,
    //     nav: !0,
    //     dots: !1
    // });
    const o = GetAllParameter(window.location.href)
      , {home: a, invitation: s} = o;
    if (a && s)
        switch (e(".click_thamgia2, .click_thamgia").css({
            "pointer-events": "none",
            opacity: .5
        }),
        a) {
        case "groom":
            e("#cards-groom").addClass("is-active"),
            e(".click_thamgia").css({
                "pointer-events": "unset",
                opacity: 1
            });
            break;
        case "bride":
            e("#cards-bride").addClass("is-active"),
            e(".click_thamgia2").css({
                "pointer-events": "unset",
                opacity: 1
            });
            break;
        default:
            e(".ivitation_cards").removeClass("is-active"),
            e(".click_thamgia2, .click_thamgia").css({
                "pointer-events": "none",
                opacity: .5
            })
        }
    else
        e(".click_thamgia2, .click_thamgia").css({
            "pointer-events": "none",
            opacity: .5
        });
    setTimeout(()=>{
        e("#transform-content-id").addClass("animation-stroke-dash-offset")
    }
    , 2500),
    setTimeout(()=>{
        e("#transform-content-id").addClass("animation-fill-offset")
    }
    , 3e3),
    setTimeout(()=>{
        e("#transform-content-id").addClass("animation-text-info")
    }
    , 4e3),
    e("#down-screen").on("click", function(i) {
        e("html, body").animate({
            scrollTop: e("#album-home").position().top
        }, 1e3)
    });
    var n = document.getElementById("myAudio");
    e("#btnMusic").on("click", function(i) {
        n.paused ? n.play() : n.pause(),
        e("#btnMusic span img").toggleClass("is-active")
    }),
    // e("body").on("click", function(i) {
    //     n.paused && (e("#btnMusic").trigger("click"),
    //     e(this).unbind())
    // }),
    e("#redirect-bride").on("click", function(i) {
        i.preventDefault(),
        e("#bride-id").addClass("is-active"),
        e("#transform-content-id").addClass("in-active-right"),
        e("body").css("overflow", "hidden"),
        setTimeout(()=>{
            e("#bride-id").addClass("animation-stroke-dash-offset")
        }
        , 500),
        setTimeout(()=>{
            e("#bride-id").addClass("animation-fill-offset")
        }
        , 1e3),
        setTimeout(()=>{
            e("#bride-id").addClass("animation-opacity-content")
        }
        , 1500)
    }),
    e("#back-bride").on("click", function(i) {
        i.preventDefault(),
        e("#bride-id").removeClass("is-active"),
        e("#transform-content-id").removeClass("in-active-right"),
        e("body").css("overflow", "auto"),
        e("#bride-id").removeClass("animation-stroke-dash-offset animation-fill-offset animation-opacity-content")
    }),
    e("#redirect-groom").on("click", function(i) {
        i.preventDefault(),
        e("#groom-id").addClass("is-active"),
        e("#transform-content-id").addClass("in-active-left"),
        e("body").css("overflow", "hidden"),
        setTimeout(()=>{
            e("#groom-id").addClass("animation-stroke-dash-offset")
        }
        , 500),
        setTimeout(()=>{
            e("#groom-id").addClass("animation-fill-offset")
        }
        , 1e3),
        setTimeout(()=>{
            e("#groom-id").addClass("animation-opacity-content")
        }
        , 1500)
    }),
    e("#back-groom").on("click", function(i) {
        i.preventDefault(),
        e("#groom-id").removeClass("is-active"),
        e("#transform-content-id").removeClass("in-active-left"),
        e("body").css("overflow", "auto"),
        e("#groom-id").removeClass("animation-stroke-dash-offset animation-fill-offset animation-opacity-content")
    }),
    e("#ivitation-groom").on("click", function(i) {
        i.preventDefault(),
        e("#cards-groom").addClass("is-active"),
        e("#groom-id").removeClass("is-active"),
        e("#transform-content-id").removeClass("in-active-left"),
        e("body").css("overflow", "auto")
    }),
    e("#ivitation-bride").on("click", function(i) {
        i.preventDefault(),
        e("#cards-bride").addClass("is-active"),
        e("#bride-id").removeClass("is-active"),
        e("#transform-content-id").removeClass("in-active-right"),
        e("body").css("overflow", "auto")
    });
    let c = 0;
    e(window).scroll(function() {
        if (e("#cards-bride").hasClass("is-active") || e("#cards-groom").hasClass("is-active")) {
            let i = e(window).scrollTop() + 1;
            console.log(i),
            i > c && (e(".ivitation_cards").css("transform", "translateY(-100vh)"),
            e(".ivitation_cards").removeClass("is-active"),
            e("#cm-bride").removeClass("_chucmung_active"),
            e("#cm-groom").removeClass("_chucmung_active"),
            setTimeout(()=>{
                e(".ivitation_cards").css("transform", "translateY(0)")
            }
            , 1e3)),
            c = i
        }
    }),
    e(".down-screen-cards").on("click", function(i) {
        i.preventDefault(),
        e(".ivitation_cards").css("transform", "translateY(-100vh)"),
        e(".ivitation_cards").removeClass("is-active"),
        e("body").css("overflow", "auto"),
        setTimeout(()=>{
            e(".ivitation_cards").css("transform", "translateY(0)")
        }
        , 1e3)
    }),
    e(".chucmung_toggle2").click(function(i) {
        i.preventDefault(),
        e("#cm-bride").toggleClass("_chucmung_active"),
        e("#btnMusic").css({
            opacity: 0,
            visibility: "hidden"
        })
    }),
    e("._chucmung .close2").click(function(i) {
        i.preventDefault(),
        e("#cm-bride").removeClass("_chucmung_active"),
        e("#btnMusic").css({
            opacity: 1,
            visibility: "visible"
        })
    }),
    e(".chucmung_toggle").click(function(i) {
        i.preventDefault(),
        e("#cm-groom").toggleClass("_chucmung_active"),
        e("#btnMusic").css({
            opacity: 0,
            visibility: "hidden"
        })
    }),
    e("._chucmung .close").click(function(i) {
        i.preventDefault(),
        e("#cm-groom").removeClass("_chucmung_active"),
        e("#btnMusic").css({
            opacity: 1,
            visibility: "visible"
        })
    }),
    e("#join-groom, #join-bride").click(function(i) {
        i.preventDefault();
        const t = e(this)
          , o = t.attr("postid-data")
          , a = t.attr("join");
        e.ajax({
            type: "POST",
            dataType: "JSON",
            url: obj.AJAX_URL,
            data: {
                action: "ajax_update_join",
                postID: o,
                join: a
            },
            beforeSend: ()=>{
                t.find("p").text("Sẽ tham gia ...")
            }
            ,
            complete: ()=>{
                t.find("p").text("Sẽ tham gia")
            }
            ,
            success: function(e) {
                console.log(e),
                e.success && (t.toggleClass("click_thamgia_toggle"),
                t.attr("join", e.data))
            },
            error: function(e, i, t) {
                console.log("The following error occured: " + e, i, t)
            }
        })
    })
});
