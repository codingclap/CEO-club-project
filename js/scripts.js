jQuery(document).ready(function (jQuery) {
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

  /**testimonial **/
  jQuery('.whole-test').slick({
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
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
        slidesToShow: 2,
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
    dots: false,
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
    }, {
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

/*  Event Slider ****/

jQuery('.event-box-slider').slick({
  autoplay: false, 
  arrows: true,
  dots: true,
  prevArrow: '<div class="position-relative"><div class="event-nav  prev-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"></div></div>',
    nextArrow: '<div class="position-relative"><div class="event-nav next-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png"></div></div>',
  rows:3,
  adaptiveHeight: true
});
 


jQuery('.upcomming-box-slider').slick({
  autoplay: false, 
  arrows: true,
  dots: true,
  prevArrow: '<div class="position-relative"><div class="upcomming-nav  prev-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"></div></div>',
    nextArrow: '<div class="position-relative"><div class="upcomming-nav next-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png"></div></div>',
  rows:3,
  adaptiveHeight: true
});
 




});


jQuery(document).ready(function () {

  //Pagination JS
  //how much items per page to show
  var show_per_page = 4; 
  //getting the amount of elements inside pagingBox div
  var number_of_items = $('#pagingBox').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages = Math.ceil(number_of_items/show_per_page);
  
  //set the value of our hidden input fields
  $('#current_page').val(0);
  $('#show_per_page').val(show_per_page);
  
  //now when we got all we need for the navigation let's make it '
  
  /* 
  what are we going to have in the navigation?
    - link to previous page
    - links to specific pages
    - link to next page
  */
  var navigation_html = '<a class="previous_link" href="javascript:previous();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"  ></a>';
  var current_link = 0;
  while(number_of_pages > current_link){
    navigation_html += '<a class="page_link" href="javascript:go_to_page(' + current_link +')" longdesc="' + current_link +'">'+ (current_link + 1) +'</a>';
    current_link++;
  }
  navigation_html += '<a class="next_link" href="javascript:next();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png" ></a>';
  
  $('#page_navigation').html(navigation_html);
  
  //add active_page class to the first page link
  $('#page_navigation .page_link:first').addClass('active_page');
  
  //hide all the elements inside pagingBox div
  $('#pagingBox').children().css('display', 'none');
  
  //and show the first n (show_per_page) elements
  $('#pagingBox').children().slice(0, show_per_page).css('display', 'block');

});



//Pagination JS

function previous(){

new_page = parseInt($('#current_page').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page').prev('.page_link').length==true){
  go_to_page(new_page);
}

}

function next(){
new_page = parseInt($('#current_page').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page').next('.page_link').length==true){
  go_to_page(new_page);
}

}
function go_to_page(page_num){
//get the number of items shown per page
var show_per_page = parseInt($('#show_per_page').val());

//get the element number where to start the slice from
start_from = page_num * show_per_page;

//get the element number where to end the slice
end_on = start_from + show_per_page;

//hide all children elements of pagingBox div, get specific items and show them
$('#pagingBox').children().css('display', 'none').slice(start_from, end_on).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link[longdesc=' + page_num +']').addClass('active_page').siblings('.active_page').removeClass('active_page');

//update the current page input field
$('#current_page').val(page_num);
}

