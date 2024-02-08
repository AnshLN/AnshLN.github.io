$(document).ready(function() {
  $(".card").hover(
      function() {
          $(this).find(".discount").addClass("slide-down");
      },
      function() {
          $(this).find(".discount").removeClass("slide-down");
      }
  );

  $(window).on('scroll resize', function() {
    var viewportHeight = $(window).height();
    var topOffset = 50;
    var bottomOffset = viewportHeight - 50;

    $('.common-title>div>div').each(function() {
        var $this = $(this);
        var elementTop = $this.offset().top - $(window).scrollTop();
        var elementBottom = elementTop + $this.height();

        // Check if the element is within the specified range from the top and bottom of the viewport
        if (elementTop >= topOffset && elementBottom <= bottomOffset) {
            $this.addClass('title-underline-animation');
        } else {
            $this.removeClass('title-underline-animation');
        }
    });
});

// Trigger the scroll event initially to check elements on page load
$(window).trigger('scroll');






/* close btn for cart-body */
$(document).ready(function() {
  $('.cart-body .btn-close').click(function() {
    $(this).closest('.cart-body').remove();
  });
});

$(document).ready(function(){
  $("#shopping-cart").click(function(){
    $(".shopping-cart-container").slideToggle("slow");
  });
});


/* Product Pop-up counter */


var num;

$('.button-count:first-child').click(function(){
  num = parseInt($('input:text').val());
  if (num > 1) {
    $('input:text').val(num - 1);
  }
  if (num == 2) {
    $('.button-count:first-child').prop('disabled', true);
  }
  if (num == 10) {
    $('.button-count:last-child').prop('disabled', false);
  }
});

$('.button-count:last-child').click(function(){
  num = parseInt($('input:text').val());
  if (num < 10) {
    $('input:text').val(num + 1);
  }
  if (num > 0) {
    $('.button-count:first-child').prop('disabled', false);
  }
  if (num == 9) {
    $('.button-count:last-child').prop('disabled', true);
  }
});


/* OWL CAROUSEL CSS */

var owl = $('.owl-carousel-1');
owl.owlCarousel({
  center: true,
  loop: false,
  nav: false,
  dots: false,
  margin: 10,
  autoplay: false,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      960: {
          items: 1
      },
      1200: {
          items: 1
      }
  },
});


/* OWL CAROUSEL FOR 2*/

var owl1 = $('.owl-carousel-2');
owl1.owlCarousel({
  center: true,
  loop: false,
  margin: 25,
  nav: false,
  dots: true,
  autoplay: false,
  responsive: {
      0: {
          items: 3
      },
      600: {
          items: 3
      },
      960: {
          items: 3
      },
      1200: {
          items: 3
      }
  },
});
$('.owl-carousel-2 .owl-item').on('click', function(){
  var $clickedItem = $(this);
  var itemIndex = $clickedItem.index();
  owl1.trigger('to.owl.carousel', [itemIndex, 300, true]);
});


owl.on('changed.owl.carousel', function(event) {
  if (event.namespace && event.property.name === 'position') {
      var item = event.relatedTarget.relative(event.property.value);
      owl1.trigger('to.owl.carousel', [item, 150, true]);
  }
});

// When owlCarousel2 changes, move owlCarousel1
owl1.on('changed.owl.carousel', function(event) {
  if (event.namespace && event.property.name === 'position') {
      var item = event.relatedTarget.relative(event.property.value);
      owl.trigger('to.owl.carousel', [item, 150, true]);
  }
});



/* Owl carousel custom prev next icon */
$('.next-owl-carousel').click(function(e) {
  e.preventDefault();
  owl.trigger('next.owl.carousel');
});

$('.prev-owl-carousel').click(function(e) {
  e.preventDefault();
  owl.trigger('prev.owl.carousel');
});





/* Shopping Cart Default */


const observer = new MutationObserver(function(mutationsList) {
  for (let mutation of mutationsList) {
    if (mutation.type === 'childList') {
      const divCount = $('.all-items-container').children('div').length;
      if (divCount === 0) {
        $('.cart-footer').css('display', 'none');
        $('.default-cart-item').css('display', 'block');
      } else {
        $('.cart-footer').css('display', 'block');
        $('.default-cart-item').css('display', 'none');
      }
    }
  }
});

const targetNode = document.querySelector('.all-items-container');
const config = { childList: true };
observer.observe(targetNode, config);


/* Discount Offer card Timer */

(function () {
  const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "02/15/",
      birthday = dayMonth + yyyy;
  
  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end
  
  const countDown = new Date(birthday).getTime(),
      x = setInterval(function() {    

        const now = new Date().getTime(),
              distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("headline").innerText = "It's my birthday!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());




/* OWL CAROUSEL FOR OUR CLIENT */

var owl3 = $('.owl-carousel-3');
owl3.owlCarousel({
  items:3,
  // margin:20,
  center: true,
  loop: true,
  nav: false,
  dots: false,
   margin: 30,
  autoplayTimeout: 4000,
  autoplayHoverPause: true,
  autoplay: true,
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      960: {
          items: 1
      },
      1200: {
          items: 3
      }
  },

});







/* Centred Owl item css change */





/* Dropdown Position */

   
$(document).ready(function() {
  $('.nav-item').hover(
    function() {
      var $navItem = $(this);
      var $megaMenu = $navItem.find('.mega-menu');
      
      // Calculate available space
      var navItemWidth = $navItem.outerWidth();
      var spaceAvailable = $(window).width() - ($navItem.offset().left + navItemWidth);
      
      if (spaceAvailable+navItemWidth < $megaMenu.outerWidth()+15) {
        var leftPosition = -1 * (($megaMenu.outerWidth()+15) - (spaceAvailable+navItemWidth));
        $megaMenu.css({ left: leftPosition + 'px'});
      }
      else{
        $megaMenu.css({ left: '0'});
      }
    }
  );
});


/* Discount Offer Cards Border animation */
$(window).on('scroll resize', function() {
  var viewportHeight = $(window).height();
  var topOffset = 50;
  var bottomOffset = viewportHeight - 50;

  $('.offerr-card-text').each(function() {
    var $parent = $(this);
    var elementTop = $parent.offset().top - $(window).scrollTop();
    var elementBottom = elementTop + $parent.height();

    if (elementTop >= topOffset && elementBottom <= bottomOffset) {
      $parent.find('.top-bordr > div, .bottom-bordr > div').css('width', '100%');
      $parent.find('.right-bordr > div, .left-bordr > div').css('height', '100%');
    } else {
      $parent.find('.top-bordr > div, .bottom-bordr > div').css('width', '0%');
      $parent.find('.right-bordr > div, .left-bordr > div').css('height', '0%');
    }
  });
});

// Trigger the scroll event initially to check elements on page load
$(window).trigger('scroll');


/* Delay for discount offer card hover shadows */
$(window).on('scroll resize', function() {
  var viewportHeight = $(window).height();
  var topOffset = 50;
  var bottomOffset = viewportHeight - 50;

  $('.offerr-card').each(function() {
    var $parent = $(this);
    var elementTop = $parent.offset().top - $(window).scrollTop();
    var elementBottom = elementTop + $parent.height();

    if (elementTop >= topOffset && elementBottom <= bottomOffset) {
      $parent.find('.offerr-card-text').addClass('offerr-card-text-shadow');
    } else {
      $parent.find('.offerr-card-text').removeClass('offerr-card-text-shadow');
    }
  });
});
$(window).trigger('scroll');


});


// VIDEO CSS

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("Video");
  const playPauseLink = document.querySelector(".video-play-pause-button");

  playPauseLink.addEventListener("click", function(e) {
    e.preventDefault(); 

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("Video");
  const playIcon = document.querySelector(".play-icon");
  const pauseIcon = document.querySelector(".pause-icon");
  const discountVideoContainer = document.querySelector(".discount-video-container>div");
  const videooo = document.querySelector(".discount-video-container video")
  const playPauseLink = document.querySelector(".video-play-pause-button");

 
  pauseIcon.style.display = "none";

  
  video.addEventListener("play", function() {
    playIcon.style.display = "none";
    pauseIcon.style.display = "flex";

   
  });

  video.addEventListener("pause", function() {
    playIcon.style.display = "block";
    pauseIcon.style.display = "none";

  });


  
  discountVideoContainer.addEventListener("mouseenter", function() {
    if (discountVideoContainer.matches(':hover')) {
      videooo.style.opacity = "0.8";
      playPauseLink.style.opacity = "1";
    }
  });
  discountVideoContainer.addEventListener("mouseleave", function() {

    if (video.paused) {
      videooo.style.opacity = "0.8";
      playPauseLink.style.opacity = "1";
    } else {
      
    
    setTimeout(function() {
     
        videooo.style.opacity = "1";
        playPauseLink.style.opacity = "0";
        playPauseLink.style.transition="opacity ease-in-out 600ms";
        videooo.style.transition="opacity ease-in-out 600ms";
        
    }, 1000);
  }
  });

 
});









