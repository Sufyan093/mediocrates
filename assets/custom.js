if (
    (AOS.init(),
        gsap.registerPlugin(ScrollTrigger),
        gsap.to(".blackhead", { scale: 0.2, duration: 1, scrollTrigger: { trigger: ".blackhead", scrub: !0, start: "top bottom" } }),
        gsap.to(".whitehead", { scale: 2.5, duration: 1, scrollTrigger: { trigger: ".whitehead", scrub: !0, start: "top 75%", end: '250% top' } }),
        gsap.to(".main-cloud", { scale: 2, transformOrigin: "bottom", duration: 1, scrollTrigger: { trigger: ".main-cloud", scrub: !0, start: "100% top", end: '250% ' } }),
        window.innerWidth < 600)
) {
    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".desert-section",
                // markers: true,
                start: "15% 50%",
                scrub: !0,
                toggleActions: "restart pause reverse pause"
            }
        })
        .from(".desert-section", {
            scale: 4.5,
            ease: "none"
        })
        .to(".desert-section", {
            scale: 1,
            ease: "none"
        })

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".desert-section",
                pin: !0,
                start: "49% bottom",
                end: '80%',
                scrub: 1,
                // markers: true,
                toggleActions: "play pause resume reset",
                onEnterBack: ({ progress: t, direction: o, isActive: a }) => {
                    console.log(t, o, a);
                },
                onLeave: ({ progress: t, direction: o, isActive: a }) => {
                    console.log(t, o, a);
                },
            },
        })
        .addLabel("start")
        .to(".blackmann", { scale: 1 }, 1)
        .addLabel("show-bg-video")
        .to(".blackmann", { toggleClass: ".fixed-logo" })
        .addLabel("fix-logo")
        .to(".babab", { opacity: 1, duration: 2.5, ease: "power1.out" }, )
        .to(".babab", { opacity: 0, x: 10, y: -10, duration: 2.5, ease: "power1.out" }, )
        .to(".desert-section .top-left", { opacity: 1, duration: 5, y: 100 })
        .to(".babab", { opacity: 0, x: 60, y: -30, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0.9, x: 70, y: -40, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 1, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0, x: 100, y: -50, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 1, x: 110, y: -60, duration: 2.5, ease: "power1.out", zIndex: 10 })

    .to(".desert-section .top-left", { opacity: 1, scale: 2, x: '50%', duration: 5, y: -200 })
        .to(".hide-text", { opacity: 0 }, '-=5');

    gsap
        .timeline({ scrollTrigger: { trigger: ".desert-section .centered", start: "500% 20%", end: '1100%', scrub: !0, toggleActions: "restart pause reverse pause" } })
        .to(".desert-section .centered", { opacity: 5, scale: 1.1, x: -300, duration: 2.5, ease: "back.out(2)" });
} else if (window.innerWidth < 900 && window.innerWidth > 600) {

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".desert-section",
                // markers: true,
                start: "15% 50%",
                scrub: !0,
                toggleActions: "restart pause reverse pause"
            }
        })
        .from(".desert-section", {
            scale: 4.5,
            ease: "none"
        })
        .to(".desert-section", {
            scale: 1,
            ease: "none"
        })

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".desert-section",
                pin: !0,
                start: "49% bottom",
                end: '80%',
                scrub: 1,
                // markers: true,
                toggleActions: "play pause resume reset",
                onEnterBack: ({ progress: t, direction: o, isActive: a }) => {
                    console.log(t, o, a);
                },
                onLeave: ({ progress: t, direction: o, isActive: a }) => {
                    console.log(t, o, a);
                },
            },
        })
        .addLabel("start")
        .to(".blackmann", { scale: 1 }, 1)
        .addLabel("show-bg-video")
        .to(".blackmann", { toggleClass: ".fixed-logo" })
        .addLabel("fix-logo")
        .to(".babab", { opacity: 1, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0, x: 20, y: -20, duration: 2.5, ease: "power1.out" })
        .to(".desert-section .top-left", { opacity: 1, duration: 5, y: 80 })
        .to(".babab", { opacity: 0, x: 150, y: -70, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0.9, x: 160, y: -80, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 1, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0, x: 250, y: -150, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 1, x: 270, y: -155, duration: 2.5, ease: "power1.out", zIndex: 10 })
        // .to(".desert-section .top-left", { opacity: 1, duration: 5, y: 80 })
        .to(".desert-section .top-left", { opacity: 1, scale: 2, x: '50%', duration: 5, y: -200 })
        .to(".hide-text", { opacity: 0 }, '-=5');

    gsap
        .timeline({ scrollTrigger: { trigger: ".desert-section .centered", start: "350% top", end: '1400%', scrub: !0, toggleActions: "restart pause reverse pause" } })
        .to(".desert-section .centered", { opacity: 5, scale: 1.1, x: -300, duration: 2.5, ease: "back.out(2)" });

} else {

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".desert-section",
                // markers: true,
                start: "15% 50%",
                scrub: !0,
                toggleActions: "restart pause reverse pause"
            }
        })
        .from(".desert-section", {
            scale: 4.5,
            ease: "none"
        })
        .to(".desert-section", {
            scale: 1,
            ease: "none"
        })

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".desert-section",
                pin: !0,
                start: "48.5% bottom",
                end: '80% bottom',
                scrub: 1,
                // markers: true,
                toggleActions: "play pause resume reset",
                onEnterBack: ({ progress: t, direction: o, isActive: a }) => {
                    console.log(t, o, a);
                },
                onLeave: ({ progress: t, direction: o, isActive: a }) => {
                    console.log(t, o, a);
                },
            },
        })
        .addLabel("start")
        .to(".blackmann", { scale: 1, }, 1)
        .addLabel("show-bg-video")
        .to(".blackmann", { toggleClass: ".fixed-logo" })
        .addLabel("fix-logo")
        .to(".babab", { opacity: 1, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0, x: 40, y: -40, duration: 2.5, ease: "power1.out" })
        .to(".desert-section .top-left", { opacity: 1, duration: 5, y: 200 })
        .to(".babab", { opacity: 0, x: 100, y: -70, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0.9, x: 110, y: -80, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 1, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 0, x: 250, y: -150, duration: 2.5, ease: "power1.out" })
        .to(".babab", { opacity: 1, x: 270, y: -160, duration: 2.5, ease: "power1.out", zIndex: 10 })
        .to(".desert-section .top-left", { opacity: 1, scale: 2, x: '50%', duration: 5, y: -200 })
        .to(".hide-text", { opacity: 0 }, '-=5');
    gsap
        .timeline({ scrollTrigger: { trigger: ".desert-section .centered", start: "100% 35%", end: '1700%', scrub: !0, toggleActions: "restart pause reverse pause" } })
        .to(".desert-section .centered", { opacity: 5, scale: 1.1, x: -300, duration: 2.5, ease: "back.out(2)" });

}
window.innerWidth > 900 &&
    window.innerWidth < 1040 &&
    (gsap
        .timeline({ scrollTrigger: { trigger: ".blackman-img1", start: "-5% 30%", end: "100% top", scrub: !0, toggleActions: "restart pause reverse pause" } })
        .to(".blackman-img1", { xPercent: -150, yPercent: 100, opacity: 1, scale: 0.1, duration: 2 })
        .to(".blackman-img1", { xPercent: -150, yPercent: 100, opacity: 0, scale: 0.1, duration: 2 }),
        gsap
        .timeline({ scrollTrigger: { trigger: ".blackman-stone1", start: "57% 30%", end: "200% top", scrub: !0, toggleActions: "restart pause reverse pause" } })
        .to(".blackman-stone1", { xPercent: -150, yPercent: 250, scale: 0.2, opacity: 1, ease: "power1.out", duration: 2 })
        .to(".blackman-stone1", { xPercent: -150, yPercent: 250, scale: 0.2, opacity: 0, ease: "power1.out", duration: 2 })),
    gsap.to(".main-img", { scrollTrigger: { trigger: ".main-img", start: "0px 500px", scrub: !0, toggleActions: "restart pause reverse pause" }, y: -200, duration: 2 });
var animation,
    tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5, ease: "power3.out" });
(
    tl.to(".bloon", 1, { y: -100 }),
    tl.to(".bloon", 1, { y: 0 }),
    window.innerWidth < 600
) ?
(
    gsap) :
(
    gsap);

$(".owl-carousel").owlCarousel({ loop: !0, margin: 40, dots: !1, responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 5 } } }),
    gsap.utils.toArray(".section").forEach((t, o) => {
        if (null !== t.getAttribute("data-color")) {
            var a = t.getAttribute("data-color");
            gsap.to(".wrap", { backgroundColor: "dark" === a ? gsap.getProperty("html", "--dark") : gsap.getProperty("html", "--light"), immediateRender: !1, scrollTrigger: { trigger: t, scrub: !0, start: "top bottom", end: "+=100%" } });
        }
    });

ScrollTrigger.matchMedia({
    "(min-width:1000px)": function() {

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".icon1",
                    pin: !0,
                    start: "-80% 400px",
                    end: "+=120%",
                    scrub: !0,
                    toggleActions: "restart pause reverse pause",
                },
            })
            .to(".icon1", { opacity: 1, y: -10, x: -50, rotation: -180 })
            .to(".icon1", { opacity: 0, y: -10, x: -50, rotation: -180 }),


            gsap
            .timeline({ scrollTrigger: { trigger: ".icon2", pin: !0, start: "-40% 600px", end: "+=80%", scrub: !0, toggleActions: "restart pause reverse pause" } })
            .to(".icon2", { opacity: 1, y: -2, x: -50, rotation: -75 })
            .to(".icon2", { opacity: 0, y: -2, x: -50, rotation: -75 }),
            gsap
            .timeline({ scrollTrigger: { trigger: ".icon3", pin: !0, start: "top 750px", end: "+=30%", scrub: !0, toggleActions: "restart pause reverse pause" } })
            .to(".icon3", { opacity: 1, y: -5, x: -50, rotation: -45 })
            .to(".icon3", { opacity: 0, y: -5, x: -50, rotation: -45 })


        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".right_icon1",
                    start: "-10% center",
                    scrub: true,
                    // markers: true,
                    toggleActions: "restart pause reverse pause",
                },
            })
            .to(".right_icon1", { y: '-30%', ease: "power1.out" })
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".right_icon2",
                    start: "50% center",
                    scrub: true,
                    // markers: true,
                    toggleActions: "restart pause reverse pause",
                },
            })
            .to(".right_icon2", { y: '-30%', x: '-10%', ease: "power1.out" })

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".right_icon3",
                    start: "40% center",
                    scrub: true,
                    // markers: true,
                    toggleActions: "restart pause reverse pause",
                },
            })
            .to(".right_icon3", { y: '-30%', ease: "power1.out" })

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".right_icon4",
                    start: "30% center",
                    scrub: true,
                    // markers: true,
                    toggleActions: "restart pause reverse pause",
                },
            })
            .to(".right_icon4", { y: '-30%', x: '10%', ease: "power1.out" })

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".allstatue",
                    start: "-20% center",
                    end: "-20% center",
                    // markers: true,
                    // yoyo: true,
                    toggleActions: "restart none reverse none",

                },
            })
            .addLabel("start")
            .to(".statue1", { opacity: 1, y: '-10%', ease: "power1.out" })
            .addLabel("show-bg-video")
            .to(".statue3", { opacity: 0.6, ease: "power1.out" })
            .to(".statue2", { opacity: 0.6, y: '-5%', x: '-10%', ease: "power1.out" })

        gsap
            .timeline({ scrollTrigger: { trigger: ".uppertext", start: "-10% bottom", scrub: !0, toggleActions: "restart pause reverse pause" } })
            .from(".uppertext", { x: "-45%", duration: 2.5, ease: "back.out(2)" });


        // clouds laptop

        gsap.to('.cloud-1', {
            scrollTrigger: {
                trigger: ".cloud-1",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -600,
            y: 50,
            duration: 2,
        });

        gsap.to(".cloud-2", {
            scrollTrigger: {
                trigger: ".cloud-2",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: 600,
            y: -100,
            duration: 2,
        });

        gsap.to(".cloud-3", {
            scrollTrigger: {
                trigger: ".cloud-3",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -800,
            duration: 2,
        });

        gsap.to('.cloud-4', {
            scrollTrigger: {
                trigger: ".cloud-4",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -600,
            y: 200,
            duration: 2,
        });

        gsap.to(".cloud-5", {
            scrollTrigger: {
                trigger: ".cloud-5",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: 600,
            duration: 2,
        });

        gsap.to(".cloud-6", {
            scrollTrigger: {
                trigger: ".cloud-6",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -300,
            y: 200,
            duration: 2,
        });



    },


    "(min-width: 600px) AND (max-width: 999px)": function() {
        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".icon1",
                    pin: !0,
                    start: "20% 400px",
                    end: "+=120%",
                    scrub: !0,
                    toggleActions: "restart pause reverse pause",
                },
            })
            .to(".icon1", { opacity: 1, y: -10, x: -50, rotation: -180 })
            .to(".icon1", { opacity: 0, y: -10, x: -50, rotation: -180 }),


            gsap
            .timeline({ scrollTrigger: { trigger: ".icon2", pin: !0, start: "100% 600px", end: "+=80%", scrub: !0, toggleActions: "restart pause reverse pause" } })
            .to(".icon2", { opacity: 1, y: -2, x: -50, rotation: -75 })
            .to(".icon2", { opacity: 0, y: -2, x: -50, rotation: -75 }),
            gsap
            .timeline({ scrollTrigger: { trigger: ".icon3", pin: !0, start: "top 750px", end: "+=50%", scrub: !0, toggleActions: "restart pause reverse pause" } })
            .to(".icon3", { opacity: 1, y: -5, x: -50, rotation: -75 })
            .to(".icon3", { opacity: 0, y: -5, x: -50, rotation: -75 })

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".allstatue",
                    start: "-20% center",
                    end: "-20% center",
                    // markers: true,
                    toggleActions: "restart none reverse none",

                },
            })
            .addLabel("start")
            .to(".statue1", { opacity: 1, y: '-10%', ease: "power1.out" })
            .addLabel("show-bg-video")
            .to(".statue3", { opacity: 0.6, ease: "power1.out" })
            .to(".statue2", { opacity: 0.6, y: '-5%', x: '-10%', ease: "power1.out" })

        gsap
            .timeline({ scrollTrigger: { trigger: ".uppertext", start: "-10% bottom", scrub: !0, toggleActions: "restart pause reverse pause" } })
            .from(".uppertext", { x: "-40%", duration: 2.5, ease: "back.out(2)" });

        // clouds  tab

        gsap.to('.cloud-1', {
            scrollTrigger: {
                trigger: ".cloud-1",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -600,
            y: 50,
            duration: 2,
        });

        gsap.to(".cloud-2", {
            scrollTrigger: {
                trigger: ".cloud-2",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: 600,
            y: -100,
            duration: 2,
        });

        gsap.to(".cloud-3", {
            scrollTrigger: {
                trigger: ".cloud-3",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -800,
            duration: 2,
        });

        gsap.to('.cloud-4', {
            scrollTrigger: {
                trigger: ".cloud-4",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -600,
            y: 200,
            duration: 2,
        });

        gsap.to(".cloud-5", {
            scrollTrigger: {
                trigger: ".cloud-5",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: 600,
            duration: 2,
        });

        gsap.to(".cloud-6", {
            scrollTrigger: {
                trigger: ".cloud-6",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -300,
            y: 200,
            duration: 2,
        });



    },

    "(max-width: 599px)": function() {

        gsap
            .timeline({ scrollTrigger: { trigger: ".uppertext", start: "20% 90%", scrub: !0, toggleActions: "restart pause reverse pause" } })
            .from(".uppertext", { x: "-40%", duration: 2.5, ease: "back.out(2)" });

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".icon1",
                    pin: !0,
                    start: "-350% 150px",
                    end: "top 20px",
                    scrub: !0,

                    toggleActions: "restart pause reverse pause",
                },
            })
            .to(".icon1", { opacity: 1, y: -10, x: -50, rotation: -200 })
            .to(".icon1", { opacity: 0, y: -10, x: -50, rotation: -200 }),
            gsap
            .timeline({ scrollTrigger: { trigger: ".icon2", pin: !0, start: "-100% 370px", end: "-100% center", scrub: !0, toggleActions: "restart pause reverse pause" } })
            .to(".icon2", { opacity: 1, y: -10, x: -50, rotation: -75 })
            .to(".icon2", { opacity: 0, y: -10, x: -50, rotation: -75 })

        gsap
            .timeline({
                scrollTrigger: {
                    trigger: ".allstatue",
                    start: "-100% center",
                    end: "-100% center",
                    // markers: true,
                    toggleActions: "restart none reverse none",

                },
            })
            .addLabel("start")
            .to(".statue1", { opacity: 1, y: '-10%', ease: "power1.out" })
            .addLabel("show-bg-video")
            .to(".statue3", { opacity: 0.6, ease: "power1.out" })
            .to(".statue2", { opacity: 0.6, y: '-5%', x: '-10%', ease: "power1.out" })


        // clouds mobile

        gsap.to('.cloud-1', {
            scrollTrigger: {
                trigger: ".cloud-1",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -600,
            y: 50,
            duration: 2,
        });

        gsap.to(".cloud-2", {
            scrollTrigger: {
                trigger: ".cloud-2",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: 600,
            y: -100,
            duration: 2,
        });

        gsap.to(".cloud-3", {
            scrollTrigger: {
                trigger: ".cloud-3",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -800,
            duration: 2,
        });

        gsap.to('.cloud-4', {
            scrollTrigger: {
                trigger: ".cloud-4",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -600,
            y: 200,
            duration: 2,
        });

        gsap.to(".cloud-5", {
            scrollTrigger: {
                trigger: ".cloud-5",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: 600,
            duration: 2,
        });

        gsap.to(".cloud-6", {
            scrollTrigger: {
                trigger: ".cloud-6",
                start: 'bottom bottom',
                // markers: true,
                scrub: true,
                toggleActions: "restart pause reverse pause" //
            },
            x: -300,
            y: 200,
            duration: 2,
        });

    }

})




var slideSource = document.getElementById('scrolldown');

function fadeing() {
    slideSource.classList.toggle('fade');
}
if (window.innerHeight > 0) {
    console.log(window.innerHeight);
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log(scroll);
    if (scroll > 250) {
        $('#scrolldown').css('opacity', '0');
    } else {
        $('#scrolldown').css('opacity', '1');
    }
});





gsap
    .timeline({
        scrollTrigger: {
            trigger: ".victorian",
            // markers: true,
            start: "-100% center",
            scrub: !0,
            toggleActions: "restart pause reverse pause"
        }
    })
    .to(".b3", {
        y: '-80%',
        ease: "none"
    })

$(window).on('load', function() {
    setTimeout(function() { // allowing 3 secs to fade out loader
        $('.page-loader').fadeOut('slow');
        $('body').css('overflow', 'unset');
    }, 2000);

    $(document).on('click', '.navbar-toggler', function() {
        if ($('body').hasClass('overflowY_custome')) {
            $("body").removeClass("overflowY_custome");
        } else {
            $("body").addClass("overflowY_custome");
        }
    });
});


gsap
    .timeline({
        scrollTrigger: {
            trigger: ".allaudience",
            // markers: true,
            start: "20% 95%",
            end: "80% 95%",
            scrub: !0,
            toggleActions: "restart none reverse none"
        }
    })
    .from([".aud_layer_1", ".aud_layer_2", ".aud_layer_3", ".aud_layer_4", ".aud_layer_5", ".aud_layer_6", ".aud_layer_7", ".aud_layer_8"], 1, { scale: 1.4 }, '-=0.9')
    .to(".allaudience .aud_layer_1", 1, { y: "-5%" }, '-=0.9')
    .to(".allaudience .aud_layer_2", 1, { y: "-4%" }, '-=0.9')
    .to(".allaudience .aud_layer_3", 1, { y: "-4%" }, '-=0.9')
    .to(".allaudience .aud_layer_4", 1, { y: "-10%" }, '-=0.9')
    .to(".allaudience .aud_layer_9", 1, { y: "-30rem" }, '-=1')
    .to(".allaudience .aud_layer_5", 1, { y: "-15%" }, '-=0.9')
    .to(".allaudience .aud_layer_6", 1, { y: "-20%" }, '-=0.9')
    .to(".allaudience .aud_layer_3", 1, { y: "0%" }, '-=0.9')
    .to(".allaudience .aud_layer_7", 1, { y: "-25%" }, '-=0.9')
    .to(".allaudience .aud_layer_1", 1, { y: "0%" }, '-=0.9')
    .to(".allaudience .aud_layer_8", 1, { y: "-30%" }, '-=0.9')
    .to(".allaudience .aud_layer_2", 1, { y: "0%" }, '-=0.9')
    .to([".aud_layer_1", ".aud_layer_2", ".aud_layer_3", ".aud_layer_4", ".aud_layer_5", ".aud_layer_6", ".aud_layer_7", ".aud_layer_8"], 1, { scale: 1 }, '-=0.9')




gsap
    .timeline({
        scrollTrigger: {
            trigger: ".water-section img",
            start: "top 95%",
            end: "bottom 95%",
            scrub: !0,
            toggleActions: "restart none reverse none"
        }
    })
    .to(".water-section img", 1, { y: "-25%" })

gsap
    .timeline({
        scrollTrigger: {
            trigger: ".b7",
            start: "top 99%",
            end: "bottom top",
            scrub: !0,
            // markers: true,
            toggleActions: "restart none reverse none"
        }
    })
    .to(".b7", 1, { x: "45%" })

gsap
    .timeline({
        scrollTrigger: {
            trigger: ".b8",
            start: "top 99%",
            end: "bottom top",
            scrub: !0,
            // markers: true,
            toggleActions: "restart none reverse none"
        }
    })
    .to(".b8", 1, { x: "45%" })