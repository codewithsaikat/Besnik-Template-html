  // card-carousel

  $(document).ready(function () {

    $('.logo-list').slick({
      autoplay: true,     
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: false,
      variableWidth: false,
      arrows: false,
      prevArrow: '<button class="button-slider slide-arrow prev-arrow-Custom"><i class="fa-solid fa-arrow-right"></i></button>',
      nextArrow: '<button class="button-slider slide-arrow next-arrow-Custom"><i class="fa-solid fa-arrow-left"></i></button>',

      responsive: [{
          breakpoint: 1200,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },

        {
          breakpoint: 765,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
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
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }

      ]
    });

  });



  

  // horizontal+vertical slider

  document.documentElement.classList.add('js');

const $rootSingle = $('.cSlider--single');
const $rootNav = $('.cSlider--nav');

 $rootSingle.slick({
	slide: '.cSlider__item',
 	slidesToShow: 4,
   autoplay: true,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: false,
 	adaptiveHeight: true,
 	infinite: true,
	useTransform: true,
 	speed: 400,
  //  autoplay: {
  //   delay: 5000,
  // },
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      infinite: true,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 760,
    settings: {
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
   }
  },
  , {
    breakpoint: 420,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
   }
  },
   {
    breakpoint: 360,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
 }
  }],
 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
   prevArrow: '<button class="button-slider slide-arrow prev-arrow-Custom"><i class="fa-solid fa-arrow-right"></i></button>',
    nextArrow: '<button class="button-slider slide-arrow next-arrow-Custom"><i class="fa-solid fa-arrow-left"></i></button>',
 });

 $rootNav.on('init', function(event, slick) {
 		$(this).find('.slick-slide.slick-current').addClass('is-active');
 	})
 	.slick({
	 	slide: '.cSlider__item',
 		slidesToShow: 4,
     slidesToScroll: 1,
    //  autoplay: {
    //   delay: 5000,
    // },
 		dots: false,
     arrows: false,
     vertical: true,
 		focusOnSelect: false,
 		infinite: true,
     autoplay: true,
 		responsive: [{
 			breakpoint: 1024,
 			settings: {
 				slidesToShow: 4,
         infinite: true,
 				slidesToScroll: 1,
 			}
 		}, {
 			breakpoint: 640,
 			settings: {
 				slidesToShow: 4,
 				slidesToScroll: 1,
			}
 		},, {
      breakpoint: 420,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
     }
    },
     {
 			breakpoint: 360,
 			settings: {
 				slidesToShow: 4,
         slidesToScroll: 1,
 			
		},  
    
    
    
 		}]
 	});

 $rootSingle.on('afterChange', function(event, slick, currentSlide) {
 	$rootNav.slick('slickGoTo', currentSlide);
 	$rootNav.find('.slick-slide.is-active').removeClass('is-active');
 	$rootNav.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('is-active');
 });

 $rootNav.on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = $(this).data('slick-index');

 	 $rootSingle.slick('slickGoTo', goToSingleSlide);
 });



//  Real-State-slider

document.documentElement.classList.add('js');

const $rootSingleA = $('.cSlider--single-2');
const $rootNavA = $('.cSlider--nav-2');

 $rootSingleA.slick({
	slide: '.cSlider__item',
 	slidesToShow: 3,
   autoplay: true,
 	slidesToScroll: 1,
 	arrows: false,
 	fade: false,
 	adaptiveHeight: true,
 	infinite: true,
	useTransform: true,
 	speed: 400,
  //  autoplay: {
  //   delay: 5000,
  // },
  responsive: [{
    breakpoint: 1400,
    settings: {
      slidesToShow: 3,
      infinite: true,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 1360,
    settings: {
      slidesToShow: 2,
      infinite: true,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      infinite: true,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
    }
  },
  {
    breakpoint: 760,
    settings: {
      slidesToShow: 1,
      infinite: true,
      slidesToScroll: 1,
    }
  }, {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
   }
  }, {
    breakpoint: 420,
    settings: {
      slidesToShow: 1,
    
 }
  }],
 	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',

  //  prevArrow: '<button class="button-slider slide-arrow prev-arrow-Custom"><i class="fa-solid fa-arrow-right"></i></button>',
  //   nextArrow: '<button class="button-slider slide-arrow next-arrow-Custom"><i class="fa-solid fa-arrow-left"></i></button>',

 });

 $rootNavA.on('init', function(event, slick) {
 		$(this).find('.slick-slide.slick-current').addClass('is-active');
 	})
 	.slick({
	 	slide: '.cSlider__item',
 		slidesToShow: 4,
     slidesToScroll: 1,
    //  autoplay: {
    //   delay: 5000,
    // },
    autoplay: true,
 		dots: false,
     arrows: false,
    
 		focusOnSelect: false,
 		infinite: true,
   
 		responsive: [{
 			breakpoint: 1024,
 			settings: {
 				slidesToShow: 3,
         infinite: true,
 				slidesToScroll: 1,
 			}
 		}, 
     {
      breakpoint: 740,
      settings: {
        slidesToShow: 2,
        infinite: true,
        slidesToScroll: 1,
      }
    },{
 			breakpoint: 640,
 			settings: {
 				slidesToShow: 1,
 				slidesToScroll: 1,
			}
 		}, {
 			breakpoint: 420,
 			settings: {
 				slidesToShow: 1,
 			
		}
 		}]
 	});

 $rootSingleA.on('afterChange', function(event, slick, currentSlide) {
 	$rootNavA.slick('slickGoTo', currentSlide);
 	$rootNavA.find('.slick-slide.is-active').removeClass('is-active');
 	$rootNavA.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('is-active');
 });

 $rootNavA.on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = $(this).data('slick-index');

 	 $rootSingle.slick('slickGoTo', goToSingleSlide);
 });






  // select-2


  // $(document).ready(function () {
  //   $('.js-is-select2').on('select2:open', function () {
  //     if (Modernizr.touch) {
  //       $('.select2-search__field').prop('focus', false);
  //     }
  //   });
  // });

  // $(document).ready(function () {
  //   $('.js-source-states').select2({
  //     width: "100%",
  //     allowClear: true,
  //     tag: false,
  //     placeholder: "Select"
  //   });
  // });