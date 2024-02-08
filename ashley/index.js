
var owl = $('.owl-carousel-1');
owl.owlCarousel({
    center:true,
    loop: true,
    nav:true,
    dots:true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 3
        },
        1200: {
            items: 3
        }
    },
    onInitialized: scaleCenterItem,
    onTranslated: scaleCenterItem
});

$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})



function scaleCenterItem(event) {
    $('.owl-item').removeClass('centered');
    var $center = $(event.target).find('.owl-item.active.center');
    $center.addClass('centered');
}

var owl2 = $('.owl-carousel-2');
owl2.owlCarousel({
  center: true,
  loop: true,
  nav: true,
  dots: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      960: {
          items: 3
      },
      1200: {
          items: 3
      }
  },
});

var owl3 = $('.owl-carousel-3');
owl3.owlCarousel({
  center: true,
  loop: true,
  nav: true,
  dots: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      960: {
          items: 3
      },
      1200: {
          items: 3
      }
  },
});

$(document).ready(function(){
    $('.navbar-nav a').on('click', function(){
     $('.navbar-collapse').collapse('hide');
   });
 });


 /* swap classes names if css name is index2.css */

 // Check if the specific stylesheet is loaded
// Function to swap classes
// Function to swap classes
/*
function swapClasses() {
    if (isStyleSheetLoaded('index2.css')) {
      $('.arrow-left').toggleClass('arrow-left arrow-right');
      $('.arrow-right').toggleClass('arrow-right arrow-left');
    }
  }
  
  // Check if the specific stylesheet is loaded
  function isStyleSheetLoaded(stylesheetName) {
    var styleSheets = document.styleSheets;
    for (var i = 0; i < styleSheets.length; i++) {
      var styleSheet = styleSheets[i];
      if (styleSheet.href && styleSheet.href.includes(stylesheetName)) {
        return true;
      }
    }
    return false;
  }
  
  // Call the function when the document is ready
  $(document).ready(function() {
    swapClasses();
  });

*/



