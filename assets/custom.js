if (
    (

        gsap.registerPlugin(ScrollTrigger),
        gsap.to(".blackhead", { scale: 0.2, duration: 1, scrollTrigger: { trigger: ".blackhead", scrub: !0, start: "top bottom" } }),
        gsap.to(".whitehead", { scale: 2.5, duration: 1, scrollTrigger: { trigger: ".whitehead", scrub: !0, start: "top 75%", end: '250% top' } }),
        gsap.to(".whitehead2", { scale: 1, y: "400%", duration: 1, scrollTrigger: { trigger: ".whitehead2", scrub: !0, start: "top 50%", end: '800% top' } }),
        gsap.to(".whitehead3", { scale: 2.5, duration: 1, scrollTrigger: { trigger: ".whitehead3", scrub: !0, start: "center center", end: '700% top' } }),
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


    // sun layer tablet

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".sun_layer-container",
                // markers: true,
                start: "-50% bottom",
                // end: "bottom bottom",
                scrub: !0,
                toggleActions: "restart none reverse none"
            }
        })

    .to(".sun_layer_1", 1, { y: "-10%" }, '-=0.9')
        .to(".sun_layer_2", 1, { y: "-10%" }, '-=0.9')
        .to(".sun_layer_3", 1, { y: "-40%" }, '-=0.9')
        .to(".sun_layer_4", 1, { y: "-20%" }, '-=0.9')
        .to(".sun_layer_5", 1, { y: "-10rem" }, '-=1')
        .to(".sun_layer_6", 1, { y: "-20%" }, '-=0.9')
        .to(".sun_layer_7", 1, { y: "-60%" }, '-=0.9')
        .to(".sun_layer_8", 1, { y: "-60%" }, '-=0.9')


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


    // sun layer tablet

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".sun_layer-container",
                // markers: true,
                start: "-30% bottom",
                // end: "bottom bottom",
                scrub: !0,
                toggleActions: "restart none reverse none"
            }
        })

    .to(".sun_layer_1", 1, { y: "-10%" }, '-=0.9')
        .to(".sun_layer_2", 1, { y: "-10%" }, '-=0.9')
        .to(".sun_layer_3", 1, { y: "-40%" }, '-=0.9')
        .to(".sun_layer_4", 1, { y: "-20%" }, '-=0.9')
        .to(".sun_layer_5", 1, { y: "-20rem" }, '-=1')
        .to(".sun_layer_6", 1, { y: "-30%" }, '-=0.9')
        .to(".sun_layer_7", 1, { y: "-100%" }, '-=0.9')
        .to(".sun_layer_8", 1, { y: "-100%" }, '-=0.9')

} else {

    gsap
        .timeline({
            scrollTrigger: {
                trigger: "#desert-section",
                // markers: true,
                start: "-70% 50%",
                // start: "15% 50%",
                lazy: false,
                scrub: !0,
                toggleActions: "restart pause reverse pause"
            }
        })
        .from("#desert-section", {
            scale: 4.5,
            ease: "none"
        })
        .to("#desert-section", {
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
        .timeline({
            scrollTrigger: {
                trigger: ".desert-section .centered",
                start: "100% 35%",
                end: '1700%',
                scrub: !0,
                toggleActions: "restart pause reverse pause"
            }
        })
        .to(".desert-section .centered", {
            opacity: 5,
            scale: 1.1,
            x: "-60vw",
            duration: 2.5,
            ease: "back.out(2)"
        });

    // sun layer laptop

    gsap
        .timeline({
            scrollTrigger: {
                trigger: ".sun_layer-container",
                // markers: true,
                start: "-30% bottom",
                end: "200% top",
                scrub: !0,
                toggleActions: "restart none reverse none"
            }
        })

    .to(".sun_layer_1", 1, { y: "-10%" }, '-=0.9')
        .to(".sun_layer_2", 1, { y: "-10%" }, '-=0.9')
        .to(".sun_layer_3", 1, { y: "-40%" }, '-=0.9')
        .to(".sun_layer_4", 1, { y: "-20%" }, '-=0.9')
        .to(".sun_layer_5", 1, { y: "-40rem" }, '-=1')
        .to(".sun_layer_6", 1, { y: "-30%" }, '-=0.9')
        .to(".sun_layer_7", 1, { y: "-100%" }, '-=0.9')
        .to(".sun_layer_8", 1, { y: "-100%" }, '-=0.9')

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
        .to(".blackman-stone1", { xPercent: -150, yPercent: 250, scale: 0.2, opacity: 0, ease: "power1.out", duration: 2 }));

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

//$(".owl-carousel").owlCarousel({ loop: !0, margin: 40, dots: !1, responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 4 } } }),
gsap.utils.toArray(".section").forEach((t, o) => {
    if (null !== t.getAttribute("data-color")) {
        var a = t.getAttribute("data-color");
        gsap.to(".wrap", { backgroundColor: "dark" === a ? gsap.getProperty("html", "--dark") : gsap.getProperty("html", "--light"), immediateRender: !1, scrollTrigger: { trigger: t, scrub: !0, start: "top bottom", end: "+=100%" } });
    }
});

ScrollTrigger.matchMedia({
    "(min-width:1000px)": function() {
        // laptoppp
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
            .to(".statue1", { opacity: 1, y: '-10%', ease: "Bounce.easeOut" })
            .addLabel("show-bg-video")
            .to(".statue3", { opacity: 0.6, ease: "power1.out" })
            .to(".statue2", { opacity: 0.6, y: '-5%', x: '-10%', ease: "power1.out" })
            .to(".inner_p", { opacity: 1, x: '55vw', ease: "power1.out" })




        // clouds laptop



        gsap.to("#floater", {
            scrollTrigger: {
                trigger: "#floater",
                start: "top 25%",
                // markers: true,
                scrub: !0,
                toggleActions: "restart pause reverse pause",
            },
            duration: 10,
            y: 250,
        });

        gsap.to(".left-text-2", {
            scrollTrigger: {
                trigger: ".left-text-2",
                start: "top bottom",
                // markers: true,
                scrub: !0,
                toggleActions: "restart pause reverse pause",
            },
            duration: 10,
            y: 150,
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
            .to(".statue1", { opacity: 1, y: '-10%', ease: "Bounce.easeOut" })
            .addLabel("show-bg-video")
            .to(".statue3", { opacity: 0.6, ease: "power1.out" })
            .to(".statue2", { opacity: 0.6, y: '-5%', x: '-10%', ease: "power1.out" })
            .to(".inner_p", { opacity: 1, x: '55vw', ease: "power1.out" })


    },

    "(max-width: 599px)": function() {

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
            .to(".statue1", { opacity: 1, y: '-10%', ease: "Bounce.easeOut" })
            .addLabel("show-bg-video")
            .to(".statue3", { opacity: 0.6, ease: "power1.out" })
            .to(".statue2", { opacity: 0.6, y: '-5%', x: '-10%', ease: "power1.out" })
            .to(".inner_p", { opacity: 1, x: '55vw', ease: "power1.out" })

        // clouds mobile
    }

})




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


gsap.to(".b7", {
    scrollTrigger: {
        trigger: ".b7",
        start: "-200% 99%",
        // markers: true,
        toggleActions: "restart none none none",
    },
    duration: 20,
    x: '40vw'
});


gsap.to(".b8", {
    scrollTrigger: {
        trigger: ".b8",
        start: "-220% 99%",
        // markers: true,
        toggleActions: "restart none none none",
    },
    duration: 30,
    x: '20vw'
});

gsap.to(".b4", {
    scrollTrigger: {
        trigger: ".b4",
        start: "-10% 99%",
        // markers: true,
        toggleActions: "restart none none none",
    },
    scale: 1,
    duration: 8,
    x: '150vw',
    y: '200%',
    scale: 2
});


gsap.to(".below-audiance-footer p", {
    scrollTrigger: {
        trigger: ".below-audiance-footer p",
        start: "top 90%",
        // markers: true,
        scrub: !0,
        toggleActions: "restart pause reverse pause",
    },
    duration: 10,
    y: "100%",
});

gsap.to(".meeting-container p", {
    scrollTrigger: {
        trigger: ".meeting-container p",
        start: "top 95%",
        // markers: true,
        scrub: !0,
        toggleActions: "restart pause reverse pause",
    },
    duration: 5,
    y: "200%",
});

gsap.to("#child-section-content", {
    scrollTrigger: {
        trigger: "#child-section-content",
        start: "top center",
        end: '200% top',
        // markers: true,
        scrub: !0,
        toggleActions: "restart pause reverse pause",
    },
    duration: 10,
    y: "200%",
});


gsap.to(".left-text-sky-section", {
    scrollTrigger: {
        trigger: ".left-text-sky-section",
        start: "top bottom",
        end: "200% top",
        // markers: true,
        scrub: !0,
        toggleActions: "restart pause reverse pause",
    },
    duration: 5,
    y: "130%",
});

gsap.to(".uppertext", {
    scrollTrigger: {
        trigger: ".uppertext",
        start: "top bottom",
        end: "200% top",
        // markers: true,
        scrub: !0,
        toggleActions: "restart pause reverse pause",
    },
    duration: 5,
    y: "200%",
});





var slideSource = document.getElementById('scrolldown');

function fadeing() {
    slideSource.classList.toggle('fade');
}
if (window.innerHeight > 0) {
    console.log(window.innerHeight);
}

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    // console.log("scroll screen " + scroll);
    if (scroll > 820) {
        $('#scrolldown').css('opacity', '0');
    } else {
        $('#scrolldown').css('opacity', '1');
    }
});

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


$(document).on("scroll", function() {
    if ($(document).scrollTop() > 100) {
        $("#header-logo").addClass("shrink");
        $('.sb-example-1 a').css('font-size', '17px');
    } else {
        $("#header-logo").removeClass("shrink");
        $('.sb-example-1 a').css('font-size', '20px');
    }

    var innrheight = $(document).innerHeight();
    var cal_innrheight = innrheight / 1.2;
    console.log("documents " + innrheight);
    console.log("document heigts " + cal_innrheight);

    if ($(document).scrollTop() > cal_innrheight) {
        $('#universal-arrow').addClass('cus_none_log');
    } else {
        $('#universal-arrow').removeClass('cus_none_log');
    }

});


var scrollTimer = -1;

function bodyScroll() {
    $('#universal-arrow').fadeOut();

    if (scrollTimer != -1)
        clearTimeout(scrollTimer);

    scrollTimer = window.setTimeout("scrollFinished()", 2000);
}

function scrollFinished() {
    $('#universal-arrow').fadeIn();
}