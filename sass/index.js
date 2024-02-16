// Function For hiding item count if its empty
$(document).ready(function(){
    $('.item-count').each(function() {
        if ($(this).html() === "") {
            $(this).css('display', 'none');
        } else {
            $(this).css('display', 'flex');
        }
    });
});

// Sidebar Js


$(document).ready(function() {
    $('#sidebar').click(function(){
        $('.sidebar').toggleClass('sideAfter');
        $('.sidebar').css('z-index','1');
        $('.sidebarInside').css('z-index','2');
        $('.sidebarInside').toggleClass('sideInsideAfter');
        $('.sidebarInside>*').css('display','block');
        setTimeout(ExtFn,10);
    });
    $('#sidebarCloseBtn').click(function(){
        $('.sidebar').removeClass('sideAfter');
        setTimeout(function(){
            $('.sidebar').css('z-index','-1');
            $('.sidebarInside').css('z-index','-2');
        },500);
        $('.sidebarInside').removeClass('sideInsideAfter');
        $('.sidebarInside>*').css('display','none');  //
        $(document).off('click.sidebar');
    });
});
function ExtFn(){
    if ($('.sidebar').hasClass('sideAfter')) {
        $(document).on('click.sidebar', function(event) {
            if (!$(event.target).closest('.sidebarInside').length) {
                $('.sidebar').removeClass('sideAfter');
                setTimeout(function(){
                    $('.sidebar').css('z-index','-1');
                    $('.sidebarInside').css('z-index','-2');
                },500);
                $('.sidebarInside').removeClass('sideInsideAfter');
                $('.sidebarInside>*').css('display','none');
                $(document).off('click.sidebar');
            }
        });
    } else {
        $(document).off('click.sidebar');
    }
}



// default values

var ThemeColorsArray = ['#000000','#ffffff','#AE5454','#000000','#ffffff','#ffffff'];  
// IN SCSS:
// ThemeColorsArray[0] = $TopbarBackgrounTheme
// ThemeColorsArray[1] = $TopBarTextTheme
// ThemeColorsArray[2] = $HeaderTheme
// ThemeColorsArray[3] = $HeaderThemeHover
// ThemeColorsArray[4] = $HeaderThemeText
// ThemeColorsArray[5] = $HeaderThemeTextHover

// getting Default saved to array/localstorage
$(document).ready(function(){
        var RecievedItem = localStorage.getItem('ThemeColors');
        if(RecievedItem != null){
        ThemeColorsArray = JSON.parse(RecievedItem);
        colorChangeFn();
        }
        else{
            colorChangeFn();
        }
});

// on change color ,applying changes to theme

$(document).ready(function(){
    $('input[type=color]').on('input',function(){
        ThemeColorsArray[0] = $('#TopbarTheme').val();
        ThemeColorsArray[1] = $('#TopbarTextTheme').val();
        ThemeColorsArray[2] = $('#HeaderTheme').val();
        ThemeColorsArray[3] = $('#HeaderThemeHover').val();
        ThemeColorsArray[4] = $('#HeaderTextTheme').val();
        ThemeColorsArray[5] = $('#HeaderTextThemeHover').val();
        colorChangeFn();
    });
});

function colorChangeFn(){
    document.documentElement.style.setProperty('--TopbarBackgrounTheme',ThemeColorsArray[0]);
    document.documentElement.style.setProperty('--TopBarTextTheme',ThemeColorsArray[1]);
    document.documentElement.style.setProperty('--HeaderTheme',ThemeColorsArray[2]);
    document.documentElement.style.setProperty('--HeaderThemeHover',ThemeColorsArray[3]);
    document.documentElement.style.setProperty('--HeaderThemeText',ThemeColorsArray[4]);
    document.documentElement.style.setProperty('--HeaderThemeTextHover',ThemeColorsArray[5]);
    $('#TopbarTheme').val(ThemeColorsArray[0]);
    $('#TopbarTextTheme').val(ThemeColorsArray[1]); 
    $('#HeaderTheme').val(ThemeColorsArray[2]); 
    $('#HeaderThemeHover').val(ThemeColorsArray[3]);
    $('#HeaderTextTheme').val(ThemeColorsArray[4]);
    $('#HeaderTextThemeHover').val(ThemeColorsArray[5]);
}


// Function to be run on apply or cancel
$('#cancelButton').click(function(){
    applyOrCancel();     
});
$('#applyButton').click(function(){
    var ThemeColorsArrayString = JSON.stringify(ThemeColorsArray);
    localStorage.setItem('ThemeColors',ThemeColorsArrayString);
    applyOrCancel();   
    
    // closing sidebar
    $('.sidebar').removeClass('sideAfter');
    setTimeout(function(){
        $('.sidebar').css('z-index','-1');
        $('.sidebarInside').css('z-index','-2');
    },500);
    $('.sidebarInside').removeClass('sideInsideAfter');
    $('.sidebarInside>*').css('display','none');  //
    $(document).off('click.sidebar'); 
});

function applyOrCancel(){
    var RecievedItem = localStorage.getItem('ThemeColors');
        if(RecievedItem != null){
            ThemeColorsArray = JSON.parse(RecievedItem);
            colorChangeFn();
        }
        else{
            colorChangeFn();
        }
}
