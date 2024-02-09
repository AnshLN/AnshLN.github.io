var style = document.createElement('style');
style.textContent = ":root{--theme-color: cyan;}";
        document.head.appendChild(style);

    
    function optionChangeFunction(){
    if(document.getElementById('cyan').checked==true){     
        style.textContent = ":root{--theme-color: cyan;} .container{box-shadow: 0 0 50px #00ffff63;}";
    }
    else if(document.getElementById('lime').checked == true){
        style.textContent = ":root{--theme-color: lime;} .container{box-shadow: 0 0 50px #00ff306e};";
    }
    else if(document.getElementById('yellow').checked == true){
        style.textContent = ":root{--theme-color: yellow;} .container{box-shadow: 0 0 50px #f4ff006e;}";
    }
    else if(document.getElementById('red').checked == true){
        style.textContent = ":root{--theme-color: red;} .container{box-shadow: 0 0 50px #ff000054;}"; 
    }
}
document.getElementById('cyan').onchange = function(){
    optionChangeFunction();
}
document.getElementById('lime').onchange = function(){
    optionChangeFunction();
}
document.getElementById('red').onchange = function(){
    optionChangeFunction();
}
document.getElementById('yellow').onchange = function(){
    optionChangeFunction();
}
$(document).ready(function() {
        optionChangeFunction();
$(window).on('scroll resize', function() {
    var viewportHeight = $(window).height();
    var topOffset = -400;
    var bottomOffset = viewportHeight + 400;

    $('.iframe').each(function() {
        var $this = $(this);
        var elementTop = $this.offset().top - $(window).scrollTop();
        var elementBottom = elementTop + $this.height();

        // Check if the element is within the specified range from the top and bottom of the viewport
        if (elementTop >= topOffset && elementBottom <= bottomOffset) {
            $this.addClass('iframe-added');
        } else {
            $this.removeClass('iframe-added');
        }
    });
});
$(window).trigger('scroll');
});
$(document).ready(function() {
    $(window).on('scroll resize', function() {
        var viewportHeight = $(window).height();
        var topOffset = 50;
        var bottomOffset = viewportHeight - 50;
    
        $('hr').each(function() {
            var $this = $(this);
            var elementTop = $this.offset().top - $(window).scrollTop();
            var elementBottom = elementTop + $this.height();
    
            // Check if the element is within the specified range from the top and bottom of the viewport
            if (elementTop >= topOffset && elementBottom <= bottomOffset) {
                $(this).css('width', '100%');
            } else {
                $(this).css('width', '0');
            }
        });
    });
    $(window).trigger('scroll');
    });
