$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  lazyLoad: true,
  stagePadding: 30,
  responsive: {
    0: {
      items: 2,
    },
    400: {
      items: 3,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 6,
    },
    1400: {
      items: 8,
    },
  },
});
