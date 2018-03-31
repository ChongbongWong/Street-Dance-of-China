"use strict";
function _classCallCheck(e, n) {
    if (! (e instanceof n)) throw new TypeError("Cannot call a class as a function")
}
var _createClass = function() {
    function e(e, n) {
        for (var o = 0; o < n.length; o++) {
            var a = n[o];
            a.enumerable = a.enumerable || !1,
            a.configurable = !0,
            "value" in a && (a.writable = !0),
            Object.defineProperty(e, a.key, a)
        }
    }
    return function(n, o, a) {
        return o && e(n.prototype, o),
        a && e(n, a),
        n
    }
} ();
$(function() {
    var e = 768,
    n = function() {
        function n() {
            _classCallCheck(this, n)
        }
        return _createClass(n, null, [{
            key: "smoothScroll",
            value: function(e) {
                $(e).on({
                    click: function(e) {
                        var n = $(this).attr("href"),
                        o = $("#" == n || "" == n ? "html": n),
                        a = o.offset().top;
                        return $("body,html").animate({
                            scrollTop: a
                        },
                        1500, "easeInOutExpo"),
                        !1
                    }
                })
            }
        },
        {
            key: "appearLater",
            value: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.innerHeight,
                o = 0,
                a = n;
                $(window).scroll(function() {
                    var n = $(this).scrollTop();
                    n >= a && 1 != o && (o = 1, $(e).addClass("visible")),
                    n < a && 0 != o && (o = 0, $(e).removeClass("visible"))
                })
            }
        },
        {
            key: "touchClick",
            value: function() {
                $(window).on("load",
                function() {
                    window.innerWidth < e && FastClick.attach(document.body)
                }).resize()
            }
        },
        {
            key: "navitoggle",
            value: function() {
                var e = $("header nav"),
                n = new TimelineMax;
                e.hasClass("on") ? window.innerWidth > 767 ? n.to(e, 0, {
                    y: "0%",
                    ease: Power0.easeNone
                },
                0).to(e, .5, {
                    background: "rgba(0,0,0,0.44)"
                },
                .3).staggerTo("nav li span", .7, {
                    marginTop: "0px",
                    opacity: 1,
                    ease: Power1.easeOut
                },
                .1, .5).staggerTo("nav li div", 1.5, {
                    x: "0%",
                    ease: Expo.easeOut,
                    onComplete: function() {
                        setTimeout(function() {
                            $("nav li div").addClass("on")
                        },
                        500)
                    }
                },
                0, 2.2) : n.to(e, .5, {
                    y: "0%",
                    opacity: 1,
                    ease: Power0.easeNone
                },
                0).staggerTo("nav li a", .3, {
                    opacity: "1",
                    ease: Power0.easeNone
                },
                .12, .6) : window.innerWidth > 767 ? n.to(e, .3, {
                    y: "-120%",
                    ease: Expo.easeOut
                },
                0).to(e, .2, {
                    background: "rgba(0,0,0,0)"
                },
                .3).staggerTo("nav li span", 1.5, {
                    marginTop: "-150px",
                    opacity: 0,
                    ease: Power1.easeOut
                },
                0, 0).staggerTo("nav li div", 1, {
                    x: "-101%",
                    ease: Expo.easeOut,
                    onComplete: function() {
                        $("nav li div").removeClass("on")
                    }
                },
                0, 0) : n.to(e, .5, {
                    y: "-120%",
                    opacity: 0,
                    ease: Expo.easeOut
                },
                0).staggerTo("nav li a", .3, {
                    opacity: "0",
                    ease: Power0.easeNone
                },
                0, 0)
            }
        },
        {
            key: "naviFunction",
            value: function() {
                var e = $("header nav"),
                o = $(".btn-menu");
                o.on({
                    click: function(o) {
                        o.preventDefault(),
                        $(this).toggleClass("on"),
                        e.toggleClass("on"),
                        n.navitoggle()
                    }
                }),
                e.find("a").on({
                    click: function(a) {
                        e.removeClass("on"),
                        o.removeClass("on"),
                        n.navitoggle()
                    }
                }),
                $(window).on("resize",
                function() {
                    e.attr("style", ""),
                    e.find("div").attr("style", ""),
                    e.find("span").attr("style", ""),
                    e.find("a").attr("style", "")
                }).resize()
            }
        },
        {
            key: "loadingAll",
            value: function() {
                var e = [];
                $("body img").each(function(n, o) {
                    e.push($(o).attr("src"))
                });
                var n = new $.ImgLoader({
                    srcs: e,
                    timeout: 2e4
                });
                n.on("allload",
                function(e) {
                    setTimeout(function() {
                        $("body").addClass("loaded")
                    },
                    0)
                }),
                n.load()
            }
        }]),
        n
    } ();
    n.smoothScroll('a[href^="#"]'),
    n.appearLater(".btn-menu"),
    n.touchClick(),
    n.naviFunction(),
    n.loadingAll();
    var o = $(".slider");
    o.slick({
        infinite: !0,
        autoplay: !0,
        pauseOnHover: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: !1,
        speed: 1e3,
        autoplaySpeed: 7e3,
        fade: !0,
        loop: !0,
        initialSlide: 1,
        cssEase: "cubic-bezier(.55,.16,.59,.98)"
    }),
    o.slick("slickGoTo", 0),
    $(".first_menu a").on("mouseover mousemove",
    function(e) {
        o.slick("slickGoTo", Number($(this).attr("data-num")))
    })
}),
document.addEventListener("DOMContentLoaded",
function() {
    new ScrollTrigger
});