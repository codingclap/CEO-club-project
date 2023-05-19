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
    prevArrow: '<div class="position-relative"><div class="slick-nav  prev-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/dark-arrow-left.png"></div></div>',
    nextArrow: '<div class="position-relative"><div class="slick-nav next-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/dark-arrow-right.png"></div></div>',
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
    prevArrow: '<div class="position-relative"><div class="slick-nav  prev-arrow"><img class="w-100" src="https://ceoclubsindia.org/wp-content/themes/ceo-club/img/arrow-left.svg"></div></div>',
    nextArrow: '<div class="position-relative"><div class="slick-nav next-arrow"><img class="w-100" src="https://ceoclubsindia.org/wp-content/themes/ceo-club/img/arrow-right.svg"></div></div>',
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
    centerMode: false,
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
  autoplay: true,
  autoplaySpeed: 400000,
  arrows: true,
  dots: true,
  prevArrow: '<div class="position-relative"><div class="event-nav  prev-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"></div></div>',
    nextArrow: '<div class="position-relative"><div class="event-nav next-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png"></div></div>',
  rows:3,
  adaptiveHeight: true
});

// jQuery('.upcomming-box-slider').slick({
//   autoplay: true,
//   autoplaySpeed: 400000,
//   arrows: true,
//   dots: true,
//   prevArrow: '<div class="position-relative"><div class="upcomming-nav  prev-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"></div></div>',
//     nextArrow: '<div class="position-relative"><div class="upcomming-nav next-arrow"><img class="mt-2" src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png"></div></div>',
//   rows:3,
//   adaptiveHeight: true
// });
 






});




jQuery(document).ready(function () {

  //Pagination JS
  //how much items per page to show
  var show_per_page = 6; 
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


// Second slide
jQuery(document).ready(function () {

  //Pagination JS
  //how much items per page to show
  var show_per_page2 = 1; 
  //getting the amount of elements inside pagingBox div
  var number_of_items2 = $('#pagingBox2').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages2 = Math.ceil(number_of_items2/show_per_page2);
  
  //set the value of our hidden input fields
  $('#current_page2').val(0);
  $('#show_per_page2').val(show_per_page2);
  
  //now when we got all we need for the navigation let's make it '
  
  /* 
  what are we going to have in the navigation?
    - link to previous page
    - links to specific pages
    - link to next page
  */
  var navigation_html2 = '<a class="previous_link2" href="javascript:previous2();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"  ></a>';
  var current_link2 = 0;
  while(number_of_pages2 > current_link2){
    navigation_html2 += '<a class="page_link2" href="javascript:go_to_page2(' + current_link2 +')" longdesc="' + current_link2 +'">'+ (current_link2 + 1) +'</a>';
    current_link2++;
  }
  navigation_html2 += '<a class="next_link2" href="javascript:next2();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png" ></a>';
  
  $('#page_navigation2').html(navigation_html2);
  
  //add active_page class to the first page link
  $('#page_navigation2 .page_link2:first').addClass('active_page2');
  
  //hide all the elements inside pagingBox div
  $('#pagingBox2').children().css('display', 'none');
  
  //and show the first n (show_per_page) elements
  $('#pagingBox2').children().slice(0, show_per_page2).css('display', 'block');

});

//Pagination JS

function previous2(){

new_page2 = parseInt($('#current_page2').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page2').prev('.page_link2').length==true){
  go_to_page2(new_page2);
}

}

function next2(){
new_page2 = parseInt($('#current_page2').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page2').next('.page_link2').length==true){
  go_to_page2(new_page2);
}

}
function go_to_page2(page_num2){
//get the number of items shown per page
var show_per_page2 = parseInt($('#show_per_page2').val());

//get the element number where to start the slice from
start_from2 = page_num2 * show_per_page2;

//get the element number where to end the slice
end_on2 = start_from2 + show_per_page2;

//hide all children elements of pagingBox div, get specific items and show them
$('#pagingBox2').children().css('display', 'none').slice(start_from2, end_on2).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link2[longdesc=' + page_num2 +']').addClass('active_page2').siblings('.active_page2').removeClass('active_page2');

//update the current page input field
$('#current_page2').val(page_num2);
}


// third slide
jQuery(document).ready(function () {

  //Pagination JS
  //how much items per page to show
  var show_per_page3 = 1; 
  //getting the amount of elements inside pagingBox div
  var number_of_items3 = $('#pagingBox3').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages3 = Math.ceil(number_of_items3/show_per_page3);
  
  //set the value of our hidden input fields
  $('#current_page3').val(0);
  $('#show_per_page3').val(show_per_page3);
  
  //now when we got all we need for the navigation let's make it '
  
  /* 
  what are we going to have in the navigation?
    - link to previous page
    - links to specific pages
    - link to next page
  */
  var navigation_html3 = '<a class="previous_link3" href="javascript:previous3();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"  ></a>';
  var current_link3 = 0;
  while(number_of_pages3 > current_link3){
    navigation_html3 += '<a class="page_link3" href="javascript:go_to_page3(' + current_link3 +')" longdesc="' + current_link3 +'">'+ (current_link3 + 1) +'</a>';
    current_link3++;
  }
  navigation_html3 += '<a class="next_link3" href="javascript:next3();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png" ></a>';
  
  $('#page_navigation3').html(navigation_html3);
  
  //add active_page class to the first page link
  $('#page_navigation3 .page_link3:first').addClass('active_page3');
  
  //hide all the elements inside pagingBox div
  $('#pagingBox3').children().css('display', 'none');
  
  //and show the first n (show_per_page3) elements
  $('#pagingBox3').children().slice(0, show_per_page3).css('display', 'block');

});

//Pagination JS

function previous3(){

new_page3 = parseInt($('#current_page3').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page3').prev('.page_link3').length==true){
  go_to_page3(new_page3);
}

}

function next3(){
new_page3 = parseInt($('#current_page3').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page3').next('.page_link3').length==true){
  go_to_page3(new_page3);
}

}
function go_to_page3(page_num3){
//get the number of items shown per page
var show_per_page3 = parseInt($('#show_per_page3').val());

//get the element number where to start the slice from
start_from3 = page_num3 * show_per_page3;

//get the element number where to end the slice
end_on3 = start_from3 + show_per_page3;

//hide all children elements of pagingBox div, get specific items and show them
$('#pagingBox3').children().css('display', 'none').slice(start_from3, end_on3).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link3[longdesc=' + page_num3 +']').addClass('active_page3').siblings('.active_page3').removeClass('active_page3');

//update the current page input field
$('#current_page3').val(page_num3);
}


// Fourth slide
jQuery(document).ready(function () {

  //Pagination JS
  //how much items per page to show
  var show_per_page4 = 4; 
  //getting the amount of elements inside pagingBox div
  var number_of_items4 = $('#pagingBox4').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages4 = Math.ceil(number_of_items4/show_per_page4);
  
  //set the value of our hidden input fields
  $('#current_page4').val(0);
  $('#show_per_page4').val(show_per_page4);
  
  //now when we got all we need for the navigation let's make it '
  
  /* 
  what are we going to have in the navigation?
    - link to previous page
    - links to specific pages
    - link to next page
  */
  var navigation_html4 = '<a class="previous_link4" href="javascript:previous4();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"  ></a>';
  var current_link4 = 0;
  while(number_of_pages4 > current_link4){
    navigation_html4 += '<a class="page_link4" href="javascript:go_to_page4(' + current_link4 +')" longdesc="' + current_link4 +'">'+ (current_link4 + 1) +'</a>';
    current_link4++;
  }
  navigation_html4 += '<a class="next_link4" href="javascript:next4();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png" ></a>';
  
  $('#page_navigation4').html(navigation_html4);
  
  //add active_page class to the first page link
  $('#page_navigation4 .page_link4:first').addClass('active_page4');
  
  //hide all the elements inside pagingBox div
  $('#pagingBox4').children().css('display', 'none');
  
  //and show the first n (show_per_page) elements
  $('#pagingBox4').children().slice(0, show_per_page4).css('display', 'block');

});

//Pagination JS

function previous4(){

new_page4 = parseInt($('#current_page4').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page4').prev('.page_link4').length==true){
  go_to_page4(new_page4);
}

}

function next4(){
new_page4 = parseInt($('#current_page4').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page4').next('.page_link4').length==true){
  go_to_page4(new_page4);
}

}
function go_to_page4(page_num4){
//get the number of items shown per page
var show_per_page4 = parseInt($('#show_per_page4').val());

//get the element number where to start the slice from
start_from4 = page_num4 * show_per_page4;

//get the element number where to end the slice
end_on4 = start_from4 + show_per_page4;

//hide all children elements of pagingBox div, get specific items and show them
$('#pagingBox4').children().css('display', 'none').slice(start_from4, end_on4).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link4[longdesc=' + page_num +']').addClass('active_page4').siblings('.active_page4').removeClass('active_page4');

//update the current page input field
$('#current_page4').val(page_num4);
}

// Fifth slide
jQuery(document).ready(function () {

  //Pagination JS
  //how much items per page to show
  var show_per_page5 = 4; 
  //getting the amount of elements inside pagingBox div
  var number_of_items5 = $('#pagingBox5').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages5 = Math.ceil(number_of_items5/show_per_page5);
  
  //set the value of our hidden input fields
  $('#current_page5').val(0);
  $('#show_per_page5').val(show_per_page5);
  
  //now when we got all we need for the navigation let's make it '
  
  /* 
  what are we going to have in the navigation?
    - link to previous page
    - links to specific pages
    - link to next page
  */
  var navigation_html5 = '<a class="previous_link5" href="javascript:previous5();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"  ></a>';
  var current_link5 = 0;
  while(number_of_pages5 > current_link5){
    navigation_html5 += '<a class="page_link5" href="javascript:go_to_page5(' + current_link5 +')" longdesc="' + current_link5 +'">'+ (current_link5 + 1) +'</a>';
    current_link5++;
  }
  navigation_html5 += '<a class="next_link5" href="javascript:next5();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png" ></a>';
  
  $('#page_navigation5').html(navigation_html5);
  
  //add active_page class to the first page link
  $('#page_navigation5 .page_link5:first').addClass('active_page5');
  
  //hide all the elements inside pagingBox div
  $('#pagingBox5').children().css('display', 'none');
  
  //and show the first n (show_per_page) elements
  $('#pagingBox5').children().slice(0, show_per_page5).css('display', 'block');

});

//Pagination JS

function previous5(){

new_page5 = parseInt($('#current_page5').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page5').prev('.page_link5').length==true){
  go_to_page5(new_page5);
}

}

function next5(){
new_page5 = parseInt($('#current_page5').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page5').next('.page_link5').length==true){
  go_to_page5(new_page5);
}

}
function go_to_page5(page_num5){
//get the number of items shown per page
var show_per_page5 = parseInt($('#show_per_page5').val());

//get the element number where to start the slice from
start_from5 = page_num5 * show_per_page5;

//get the element number where to end the slice
end_on5 = start_from5 + show_per_page5;

//hide all children elements of pagingBox div, get specific items and show them
$('#pagingBox5').children().css('display', 'none').slice(start_from5, end_on5).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link5[longdesc=' + page_num +']').addClass('active_page5').siblings('.active_page5').removeClass('active_page5');

//update the current page input field
$('#current_page5').val(page_num5);
}

// sixth slide
jQuery(document).ready(function () {

  //Pagination JS
  //how much items per page to show
  var show_per_page6 = 4; 
  //getting the amount of elements inside pagingBox div
  var number_of_items6 = $('#pagingBox6').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages6 = Math.ceil(number_of_items6/show_per_page6);
  
  //set the value of our hidden input fields
  $('#current_page6').val(0);
  $('#show_per_page6').val(show_per_page6);
  
  //now when we got all we need for the navigation let's make it '
  
  /* 
  what are we going to have in the navigation?
    - link to previous page
    - links to specific pages
    - link to next page
  */
  var navigation_html6 = '<a class="previous_link6" href="javascript:previous6();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"  ></a>';
  var current_link6 = 0;
  while(number_of_pages6 > current_link6){
    navigation_html6 += '<a class="page_link6" href="javascript:go_to_page6(' + current_link6 +')" longdesc="' + current_link6 +'">'+ (current_link6 + 1) +'</a>';
    current_link6++;
  }
  navigation_html6 += '<a class="next_link6" href="javascript:next6();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png" ></a>';
  
  $('#page_navigation6').html(navigation_html6);
  
  //add active_page class to the first page link
  $('#page_navigation6 .page_link6:first').addClass('active_page6');
  
  //hide all the elements inside pagingBox div
  $('#pagingBox6').children().css('display', 'none');
  
  //and show the first n (show_per_page) elements
  $('#pagingBox6').children().slice(0, show_per_page6).css('display', 'block');

});

//Pagination JS

function previous6(){

new_page6 = parseInt($('#current_page6').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page6').prev('.page_link6').length==true){
  go_to_page6(new_page);
}

}

function next6(){
new_page6 = parseInt($('#current_page6').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page6').next('.page_link6').length==true){
  go_to_page6(new_page6);
}

}
function go_to_page6(page_num6){
//get the number of items shown per page
var show_per_page6 = parseInt($('#show_per_page6').val());

//get the element number where to start the slice from
start_from6 = page_num6 * show_per_page6;

//get the element number where to end the slice
end_on6 = start_from6 + show_per_page6;

//hide all children elements of pagingBox div, get specific items and show them
$('#pagingBox6').children().css('display', 'none').slice(start_from6, end_on6).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link6[longdesc=' + page_num +']').addClass('active_page6').siblings('.active_page6').removeClass('active_page6');

//update the current page input field
$('#current_page6').val(page_num6);
}

// Upcomming
jQuery(document).ready(function () {

  //Pagination JS
  //how much items per page to show
  var show_per_page7 = 6; 
  //getting the amount of elements inside pagingBox div
  var number_of_items7 = $('#pagingBox7').children().size();
  //calculate the number of pages we are going to have
  var number_of_pages7 = Math.ceil(number_of_items7/show_per_page7);
  
  //set the value of our hidden input fields
  $('#current_page7').val(0);
  $('#show_per_page7').val(show_per_page7);
  
  //now when we got all we need for the navigation let's make it '
  
  /* 
  what are we going to have in the navigation?
    - link to previous page
    - links to specific pages
    - link to next page
  */
  var navigation_html7 = '<a class="previous_link7" href="javascript:previous7();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-left.png"  ></a>';
  var current_link7 = 0;
  while(number_of_pages7 > current_link7){
    navigation_html7 += '<a class="page_link7" href="javascript:go_to_page7(' + current_link7 +')" longdesc="' + current_link7 +'">'+ (current_link7 + 1) +'</a>';
    current_link7++;
  }
  navigation_html7 += '<a class="next_link7" href="javascript:next7();"><img src="https://ceoclubsindia.org/wp-content/uploads/2023/05/arrow-right.png" ></a>';
  
  $('#page_navigation7').html(navigation_html7);
  
  //add active_page class to the first page link
  $('#page_navigation7 .page_link7:first').addClass('active_page7');
  
  //hide all the elements inside pagingBox div
  $('#pagingBox7').children().css('display', 'none');
  
  //and show the first n (show_per_page) elements
  $('#pagingBox7').children().slice(0, show_per_page7).css('display', 'block');

});

//Pagination JS

function previous7(){
new_page7 = parseInt($('#current_page7').val()) - 1;
//if there is an item before the current active link run the function
if($('.active_page7').prev('.page_link7').length==true){
  go_to_page7(new_page7);
}

}

function next7(){
new_page7 = parseInt($('#current_page7').val()) + 1;
//if there is an item after the current active link run the function
if($('.active_page7').next('.page_link7').length==true){
  go_to_page7(new_page7);
}

}
function go_to_page7(page_num7){
//get the number of items shown per page
var show_per_page7 = parseInt($('#show_per_page7').val());

//get the element number where to start the slice from
start_from7 = page_num7 * show_per_page7;

//get the element number where to end the slice
end_on7 = start_from7 + show_per_page7;

//hide all children elements of pagingBox div, get specific items and show them
$('#pagingBox7').children().css('display', 'none').slice(start_from7, end_on7).css('display', 'block');

/*get the page link that has longdesc attribute of the current page and add active_page class to it
and remove that class from previously active page link*/
$('.page_link7[longdesc=' + page_num7 +']').addClass('active_page7').siblings('.active_page7').removeClass('active_page7');

//update the current page input field
$('#current_page7').val(page_num7);
}