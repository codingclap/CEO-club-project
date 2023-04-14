jQuery(document).ready(function(jQuery) {
      jQuery('.slick-carousel').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
		prevArrow: '<div class="position-relative"><div class="slick-nav  prev-arrow"><img class="mt-2" src="img/dark-arrow-left.svg"></div></div>',
		nextArrow: '<div class="position-relative"><div class="slick-nav next-arrow"><img class="mt-2" src="img/dark-arrow-right.svg"></div></div>',
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
			prevArrow: false,
			nextArrow: false,
			 arrows: false
          }
        },
        {
           breakpoint: 400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,
			  prevArrow: false,
			nextArrow: false,
			 arrows: false
           }
        }]
    }); 
	
	
      jQuery('.whole-test').slick({
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
		autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,

        responsive: [{
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

			 arrows: false,
          }
        },
        {
           breakpoint: 1400,
           settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1,

			 arrows: true,
           }
        }]
    }); 

	// jQuery('.we-are').slick({
  //       dots: false,
  //       infinite: true,
  //       speed: 1200,
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
	// 	autoplay: true,
  //       autoplaySpeed: 2500,
  //       arrows: true,
	// 	prevArrow: '<div class="position-relative"><div class="slick-nav  prev-arrow"><img class="mt-2" src="img/arrow-up.svg"></i></div></div>',
	// 	nextArrow: '<div class="position-relative"><div class="slick-nav next-arrow"><img class="mt-2" src="img/arrow-down.svg"></i></div></div>',
  //       responsive: [{
  //         breakpoint: 600,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       },
  //       {
  //          breakpoint: 400,
  //          settings: {
  //             arrows: false,
  //             slidesToShow: 1,
  //             slidesToScroll: 1
  //          }
  //       }]
  //   });

jQuery('.center-slider').slick({
  centerMode: true,
  centerPadding: '20%',
  slidesToShow: 1,
    speed: 1000,
		prevArrow: '<div class="position-relative"><div class="slick-nav  prev-arrow"><img class="w-100" src="img/arrow-left.svg"></div></div>',
		nextArrow: '<div class="position-relative"><div class="slick-nav next-arrow"><img class="w-100" src="img/arrow-right.svg"></div></div>',
          autoplaySpeed: 3000,
        autoplay: true,
        
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
		  speed: 1000,
		        autoplaySpeed: 3000,
        autoplay: true
		
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
		  speed: 1000,
		        autoplaySpeed: 3000,
        autoplay: true
      }
    }
  ]
});


 jQuery('.carouse').slick({
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots:false,
	  arrows: false,
    centerMode: true,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,

      }

    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
		  arrows: false,
        slidesToScroll: 4,
        dots: false,
        infinite: true,

      }
    },  {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
		  arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
      }
    }]
  });









});


