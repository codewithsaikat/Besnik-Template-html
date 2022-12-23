  // card-carousel

  $(document).ready(function () {

    $('.card-list').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      variableWidth: false,
      arrows: true,
      prevArrow: '<button class="button-slider slide-arrow prev-arrow-Custom"><i class="fa-solid fa-arrow-right"></i></button>',
      nextArrow: '<button class="button-slider slide-arrow next-arrow-Custom"><i class="fa-solid fa-arrow-left"></i></button>',

      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

  });

  $(document).ready(function () {

    $('.testimonial-list').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      variableWidth: false,
      arrows: true,
      prevArrow: '<button class="button-slider slide-arrow prev-arrow-Custom"><i class="fa-solid fa-arrow-right"></i></button>',
      nextArrow: '<button class="button-slider slide-arrow next-arrow-Custom"><i class="fa-solid fa-arrow-left"></i></button>',
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    })

  });

  $(document).ready(function () {

    $('.travel-card-all').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 800,
      lazyLoad: 'progressive',
      variableWidth: true,
      infinite: true,
      cssEase: 'linear',
      // centerMode: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      prevArrow: '<button class="button-slider slide-arrow prev-arrow-Custom-1"><i class="fa-solid fa-arrow-right"></i></button>',
      nextArrow: '<button class="button-slider slide-arrow next-arrow-Custom-1"><i class="fa-solid fa-arrow-left"></i></button>',

      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 765,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

  }).slickAnimation();

  // Init slick slider + animation

  $('.slider').slick({
    autoplay: true,
    speed: 800,
    lazyLoad: 'progressive',
    arrows: false,
    dots: true,
  }).slickAnimation();



  // select-2


  $(document).ready(function () {
    $('.js-is-select2').on('select2:open', function () {
      if (Modernizr.touch) {
        $('.select2-search__field').prop('focus', false);
      }
    });
  });

  $(document).ready(function () {
    $('.js-source-states').select2({
      width: "100%",
      allowClear: true,
      tag: false,
      placeholder: "Select"
    });
  });