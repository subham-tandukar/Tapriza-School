$(document).ready(function () {
  $(".carousel-gallery").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });
});
$(document).ready(function () {
  $(".carousel-facility").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 4,
        loop: false,
      },
    },
  });
});
$(document).ready(function () {
  $(".carousel-events").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
        loop: false,
      },
    },
  });
});

const tlNavbar = gsap.timeline({
  defaults: { duration: 3, ease: "Power3.easeOut" },
});
tlNavbar.fromTo(".hero-banner", { clipPath: "circle(10px at 100% -10%)" }, { clipPath: "circle(2000px at 100% -10%)"});

const tlWhyUsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".why-choose-us",
    start: "-60%",
    end: "-10%",
    scrub: 1,
  },
});

tlWhyUsAnimation.fromTo(".why-choose-us-left", { x: "-700%"}, { x: "0%"});
tlWhyUsAnimation.fromTo(".why-choose-us-right", { x: "700%"}, { x: "0%"}, "<90%");

const tlFacilityAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".facility",
    start: "-60%",
    end: "-10%",
    scrub: 1,
  },
});

tlFacilityAnimation.fromTo(".facility-animation1", { y: "300%", transition: 0.3 }, { y: "0%"});
tlFacilityAnimation.fromTo(".facility-animation2", { y: "300%", transition: 0.5 }, { y: "0%"});
tlFacilityAnimation.fromTo(".facility-animation3", { y: "300%", transition: 0.7 }, { y: "0%"});
tlFacilityAnimation.fromTo(".facility-animation4", { y: "300%", transition: 0.9 }, { y: "0%"});
tlFacilityAnimation.fromTo(".facility-animation5", { y: "300%", transition: 0.9 }, { y: "0%"});
tlFacilityAnimation.fromTo(".facility-animation6", { y: "300%", transition: 0.9 }, { y: "0%"});
tlFacilityAnimation.fromTo(".facility-animation7", { y: "300%", transition: 0.9 }, { y: "0%"});


const tlEventAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".events",
    start: "-60%",
    end: "-10%",
    scrub: 1,
  },
});

tlEventAnimation.fromTo(".event-animation1", { y: "300%", transition: 0.3 }, { y: "0%"});
tlEventAnimation.fromTo(".event-animation2", { y: "300%", transition: 0.5 }, { y: "0%"});
tlEventAnimation.fromTo(".event-animation3", { y: "300%", transition: 0.7 }, { y: "0%"});
tlEventAnimation.fromTo(".event-animation4", { y: "300%", transition: 0.9 }, { y: "0%"});
tlEventAnimation.fromTo(".event-animation5", { y: "300%", transition: 0.9 }, { y: "0%"});
tlEventAnimation.fromTo(".event-animation6", { y: "300%", transition: 0.9 }, { y: "0%"});
tlEventAnimation.fromTo(".event-animation7", { y: "300%", transition: 0.9 }, { y: "0%"});


const tlGalleryAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".gallery",
    start: "-60%",
    end: "-10%",
    scrub: 1,
  },
});

tlGalleryAnimation.fromTo(".gallery-animation1", { y: "300%", transition: 0.3 }, { y: "0%"});
tlGalleryAnimation.fromTo(".gallery-animation2", { y: "300%", transition: 0.5 }, { y: "0%"});
tlGalleryAnimation.fromTo(".gallery-animation3", { y: "300%", transition: 0.7 }, { y: "0%"});
tlGalleryAnimation.fromTo(".gallery-animation4", { y: "300%", transition: 0.9 }, { y: "0%"});
tlGalleryAnimation.fromTo(".gallery-animation5", { y: "300%", transition: 0.9 }, { y: "0%"});
tlGalleryAnimation.fromTo(".gallery-animation6", { y: "300%", transition: 0.9 }, { y: "0%"});
tlGalleryAnimation.fromTo(".gallery-animation7", { y: "300%", transition: 0.9 }, { y: "0%"});

$(window).scroll(function () {
  var dh = $(document).scrollTop();
  var navHeight = $("header").height();

  if (dh > navHeight / 2) {
    $(".navbar")
      .addClass("fixed-top").addClass("box-shadow");
      $(".hero-banner").css({"margin-top":"5rem"});

  } else {
    $(".navbar")
      .removeClass("fixed-top").removeClass("box-shadow");
      $(".hero-banner").css({"margin-top":"0"});

  }
});

$(function () {
  $(".photo-btn").click(function () {
    $(".photo")
      .removeClass("d-none")
      .addClass("d-block")
      .css({ transition: "all 1s linear" });
    $(".video").addClass("d-none");
    $(".photo-btn").removeClass("non-active").addClass("active1");
    $(".video-btn").removeClass("active1").addClass("non-active");
  });
  $(".video-btn").click(function () {
    $(".video")
      .removeClass("d-none")
      .addClass("d-block")
      .css({ transition: "all 1s linear" });
    $(".photo").addClass("d-none");
    $(".video-btn").removeClass("non-active").addClass("active1");
    $(".photo-btn").removeClass("active1").addClass("non-active");
  });
});
