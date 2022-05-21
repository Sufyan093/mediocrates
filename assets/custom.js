AOS.init();

// $(window).on('scroll', function() {
//     if ($(window).scrollTop()) {
//         $('header').addClass('custom-header');
//         $('.img-brand').addClass('custom-logo');
//     } else {
//         $('header').removeClass('custom-header ');
//         $('.img-brand').removeClass('custom-logo');
//     }
// })

// $(window).scroll(function() {
//     var sticky = $('#header'),
//         scroll = $(window).scrollTop();
//     var abc = $('.top-header-img img');
//     if (scroll >= 40) {
//         sticky.addClass('fixed');
//         abc.addClass('top-header-img-custom');
//         $('.img-brand').addClass('custom-logo');
//     } else {
//         sticky.removeClass('fixed');
//         abc.removeClass('top-header-img-custom');
//         $('.img-brand').removeClass('custom-logo');
//     }
// });


gsap.registerPlugin(ScrollTrigger);

gsap.to('.blackhead', {
    scale: 0.4,
    duration: 1,
    scrollTrigger: {
        trigger: '.blackhead',
        // markers: true,
        scrub: true,
        start: 'bottom bottom'
    }
});
gsap.to('.whitehead', {
    scale: 1.5,
    duration: 1,
    scrollTrigger: {
        trigger: '.whitehead',
        // markers: true,
        scrub: true,
        start: 'top center'
    }
})

gsap.to('.main-cloud', {
    scale: 2.0,
    transformOrigin: "bottom",
    duration: 1,
    scrollTrigger: {
        trigger: '.main-cloud',
        // markers: true,
        scrub: true,
        start: '10px 500px'
    }
});


gsap.to(".cloud-1", {
    scrollTrigger: {
        trigger: ".cloud-1",
        start: '0px 500px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    x: -200,
    duration: 2,
});

gsap.to(".cloud-2", {
    scrollTrigger: {
        trigger: ".cloud-2",
        start: '0px 500px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    x: 200,
    duration: 2,
});

gsap.to(".cloud-3", {
    scrollTrigger: {
        trigger: ".cloud-3",
        start: '0px 500px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    x: -300,
    duration: 2,
});

gsap.to(".cloud-4", {
    scrollTrigger: {
        trigger: ".cloud-4",
        start: '0px 500px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    x: -300,
    duration: 2,
});


gsap.to(".cloud-5", {
    scrollTrigger: {
        trigger: ".cloud-5",
        start: '0px 500px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    x: 300,
    duration: 2,
});


gsap.to(".cloud-6", {
    scrollTrigger: {
        trigger: ".cloud-6",
        start: '0px 500px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    x: -200,
    duration: 2,
});

gsap.to(".blackman-stone", {
    scrollTrigger: {
        trigger: ".blackman-stone",
        start: '0px 500px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    x: 100,
    y: -60,
    rotation: -360,
    duration: 2,
});

gsap.to(".blackman-img", {
    scrollTrigger: {
        trigger: ".blackman-img",
        start: '0px 550px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    x: 100,
    y: -60,
    // rotation: -360,
    duration: 2,
});

gsap.to(".main-img", {
    scrollTrigger: {
        trigger: ".main-img",
        start: '0px 500px',
        // markers: true,
        scrub: true,
        toggleActions: "restart pause reverse pause" //
    },
    y: -200,
    duration: 2,
});

var tl = new TimelineMax({ repeat: -1, repeatDelay: 0.5, ease: "power3.out" });

tl.to(".bloon", 1, { y: -100 });
// tl.set(".bloon", { zIndex: 5 });
tl.to(".bloon", 1, { y: 0 });

// tl.staggerFrom(".cp-1", 1.5, { top: -100, opacity: 0, delay: 0.5, ease: Elastic.easeOut.config(0.9, 0.45) }, 0.6);
// tl.staggerTo(".cp-1", 1, { top: 200, opacity: 0, delay: 2, ease: Power4.easeIn }, 0.1);


if (window.innerWidth < 600) {

    gsap.to(".icon1", {
        scrollTrigger: {
            trigger: ".icon1",
            pin: true, // pin the trigger element while active
            start: 'top 250px',
            end: "top 20px", // end after scrolling 500px beyond the start
            // markers: true, //
            scrub: true, //
            // pin: true, //
            toggleActions: "restart pause reverse pause" //
        }, // start the animation when ".box" enters the viewport (once)
        y: -10,
        x: -50,
        rotation: -200,
        duration: 2,
    });

    gsap.to(".icon2", {
        scrollTrigger: {
            trigger: ".icon2",
            pin: true, // pin the trigger element while active
            start: "top 370px", // when the top of the trigger hits the top of the viewport
            end: "top 150px", // end after scrolling 500px beyond the start
            // markers: true, //
            scrub: true, //
            // pin: true, //
            toggleActions: "restart pause reverse pause" //
        }, // start the animation when ".box" enters the viewport (once)
        y: -10,
        x: -50,
        rotation: -75,
        duration: 2,
    });

    gsap.to(".icon3", {
        scrollTrigger: {
            trigger: ".icon3",
            pin: true, // pin the trigger element while active
            start: "top 470px", // when the top of the trigger hits the top of the viewport
            end: "top 400px", // end after scrolling 500px beyond the start
            // markers: true, //
            scrub: true, //
            // pin: true, //
            toggleActions: "restart pause reverse pause" //
        }, // start the animation when ".box" enters the viewport (once)
        y: -10,
        x: -50,
        rotation: -75,
        duration: 2,
    });

} else {


    gsap.to(".icon1", {
        scrollTrigger: {
            trigger: ".icon1",
            pin: true, // pin the trigger element while active
            start: 'top 250px',
            end: '+=110%', // end after scrolling 500px beyond the start
            // markers: true, //
            scrub: true, //
            // pin: true, //
            toggleActions: "restart pause reverse pause" //
        }, // start the animation when ".box" enters the viewport (once)
        y: -10,
        x: -50,
        rotation: -180,
        duration: 2,
    });

    gsap.to(".icon2", {
        scrollTrigger: {
            trigger: ".icon2",
            pin: true, // pin the trigger element while active
            start: "top 600px", // when the top of the trigger hits the top of the viewport
            end: "+=110%", // end after scrolling 500px beyond the start
            // markers: true, //
            scrub: true, //
            // pin: true, //
            toggleActions: "restart pause reverse pause" //
        }, // start the animation when ".box" enters the viewport (once)
        y: -10,
        x: -50,
        rotation: -75,
        duration: 2,
    });

    gsap.to(".icon3", {
        scrollTrigger: {
            trigger: ".icon3",
            pin: true, // pin the trigger element while active
            start: "top 750px", // when the top of the trigger hits the top of the viewport
            // end: "top 100px", // end after scrolling 500px beyond the start
            // markers: true, //
            scrub: true, //
            // pin: true, //
            toggleActions: "restart pause reverse pause" //
        }, // start the animation when ".box" enters the viewport (once)
        y: -10,
        x: -50,
        rotation: -75,
        duration: 2,
    });

}




$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 40,
    dots: false,
    // nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

gsap.registerPlugin(ScrollTrigger);

//gsap.fromTo( ".wrap", {
//  backgroundColor: gsap.getProperty("html", "--dark")
//}, {
//  scrollTrigger: {
//    trigger: ".color-light",
//    scrub: true,
//    end: "bottom bottom",
//  },
//  backgroundColor: gsap.getProperty("html", "--light")
//});

gsap.utils.toArray('.section').forEach((section, i) => {

    if (section.getAttribute('data-color') !== null) {

        var colorAttr = section.getAttribute('data-color')

        gsap.to(".wrap", {
            backgroundColor: colorAttr === "dark" ? gsap.getProperty("html", "--dark") : gsap.getProperty("html", "--light"),
            immediateRender: false,
            scrollTrigger: {
                trigger: section,
                scrub: true,
                start: 'top bottom',
                end: '+=100%'
            }
        });

    }

});