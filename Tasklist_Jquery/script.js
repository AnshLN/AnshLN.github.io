// Add Item Functionality
var ArrayItem = [];
$("#AddBtn").click(function(){
    ArrayItem[ArrayItem.length] = $('#AddTask').val();
    printFunction();
    $('#AddTask').val("");
  });


//   printing function (Common)
function printFunction(){
    $("#OutputBox").empty();
    for(i=0;i < ArrayItem.length;i++){
        if(ArrayItem[i] != undefined){
            var liElement = '<li>'+'<textarea maxlength="255" oninput="autoExpand(this)" name="' + i + '" readonly type="text" value="">' + ArrayItem[i] + '</textarea><a href="javascript:void(0)" class="EditButtonParent Save"><img src="saveBtn.png" class="EditButton"></a><a href="javascript:void(0)" class="EditButtonParent Edit"><img src="editIcon.png" class="EditButton"></a><a href="javascript:void(0)" class="DeleteButtonParent"><img src="DeleteIcon.png" class="DeleteButton"></a></li>';
            $('#OutputBox').append(liElement);
        }
    }
    
    var ArrayInString = JSON.stringify(ArrayItem);
    localStorage.setItem('key',ArrayInString);

    DeleteFn();         //assigning delete buttons on each re-print
    editAndDelete();    //assigning Edit and save buttons on each re-print
    AnimationFn();      //assignin Animation of edit /save on each reload
    // Call autoExpand function for each textarea after printing
    $('#OutputBox textarea').each(function() {
        autoExpand(this);
    });
}

// On page reload Item remains
$(document).ready(function(){
   var RecievedItem = localStorage.getItem('key');
   if(RecievedItem != null){
   ArrayItem = JSON.parse(RecievedItem);
   printFunction();
   }
});

// Delete Functionality
function DeleteFn(){
    $('.DeleteButtonParent').click(function(){
        delete ArrayItem[$(this).prev().prev().prev().attr('name')];
        printFunction();
    });
}

// Edit Functionality
function editAndDelete(){
    $('.Edit').click(function(){
        $(this).css('display','none');
        $(this).parent().find('.Save').css('display','inline-block');
        $(this).prev().prev().removeAttr("readonly").addClass('EditButtonClicked');
    });

    $('.Save').click(function(){
        $(this).css('display','none');
        $(this).parent().find('.Edit').css('display','inline-block');
        $(this).prev().attr("readonly","readonly").removeClass('EditButtonClicked');
        ArrayItem[$(this).prev().attr('name')] = $(this).prev().val();
        printFunction();
    });
}

// Edit Delete Save Button Animation
function AnimationFn(){
    // Save Button animation
    $('.Save').mouseover(function(){
        $(this).find('img').attr('src','saveBtn.gif');
    });
    $('.Save').mouseout(function(){
        $(this).find('img').attr('src','saveBtn.png');
    });

    // Edit Button Animation
    $('.Edit').mouseover(function(){
        $(this).find('img').attr('src','editIcon.gif');
    });
    $('.Edit').mouseout(function(){
        $(this).find('img').attr('src','editIcon.png');
    });

    // Delete Button Animation
    $('.DeleteButtonParent').mouseover(function(){
        $(this).find('img').attr('src','DeleteIcon.gif');
    });
    $('.DeleteButtonParent').mouseout(function(){
        $(this).find('img').attr('src','DeleteIcon.png');
    });
}



// Text area auto height adjust
function autoExpand(textarea) {
    // Reset textarea height to default
    textarea.style.height = 'auto';
    // Set the height of the textarea to its scrollHeight
    textarea.style.height = textarea.scrollHeight + 'px';
  }
