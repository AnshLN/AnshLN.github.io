var data = [
    {
        type:"Breakfast",
        name:"poha",
        img:"poha.png",
    },
    {
        type:"Lunch",
        name:"Italian",
        img:"italian.png",
    },
    {
        type:"Dinner",
        name:"Dal-rice",
        img:"dal-rice.png",
    },
    {
        type:"Lunch",
        name:"South-indian",
        img:"south-indian.png",
    },
    {
        type:"Breakfast",
        name:"Sandwhich",
        img:"sandwhich.png",
    }
    ];


function FilterItem(filtered){
    if(data.length > 0){

            if(filtered=="All"){
                let html = "";
                for(let i=0;i<data.length;i++){
                    html+=`<div class="card" data-type="`+ data[i].type +`">
                    <img class="card-img-top" src="`+ data[i].img +`" alt="`+ data[i].name +`">
                    <div class="card-body">
                        <h4 class="card-title">`+ data[i].type +`</h4>
                        <p class="card-text">`+ data[i].name +`</p>
                    </div>
                    </div>`;
                }
                $(".card-container").html(html);
            }
            else{
                let html = "";
                for(let i=0;i<data.length;i++){
                    if(data[i].type == filtered){
                       html += `<div class="card" data-type="`+ data[i].type +`">
                       <img class="card-img-top" src="`+ data[i].img +`" alt="`+ data[i].name +`">
                       <div class="card-body">
                           <h4 class="card-title">`+ data[i].type +`</h4>
                           <p class="card-text">`+ data[i].name +`</p>
                       </div>
                       </div>`;
                    }
                }
                $(".card-container").html(html);
            }
    }
}

// for Dropdown Functionality
$("a").click(function(){
    var Links = $("a");
      Links.each(function() {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
        }
      });
      $(this).addClass("active");
      let filter=$(this).attr('data-target');
      FilterItem(filter);
});
// on DOM load
$(document).ready(function(){
    let filter = "All";
    FilterItem(filter);
});




// Button Functionality
$(".btn").click(function(){
    var Btns = $("button");
    Btns.each(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
          }
    });
    $(this).addClass("active");
    let filter=$(this).attr('data-target');
    FilterItem(filter);
});

$(document).ready(function(){
    $(".dropdown").css("display","none");
});
