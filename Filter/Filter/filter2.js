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
    },
    {
        type:"Drinks",
        name:"CocaCola",
        img:"coc.png",
    },
    {
        type:"Drinks",
        name:"Fanta",
        img:"fanta.png",
    },
    {
        type:"Dessert",
        name:"Strawberry Ice-creame",
        img:"dessert2.png",
    },
    {
        type:"Drinks",
        name:"Sprite",
        img:"sprite.png",
    },
    {
        type:"Dessert",
        name:"Rose Ice-creame",
        img:"dessert.png",
    }
    ];


/*
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
*/
function FilterItem(filtered) {
    if (data.length > 0) {
        let html = "";

        if (filtered === "All") {
            html = generateHtml(data);
        } else {
            for (let i = 0; i < data.length; i++) {
                if (data[i].type === filtered) {
                    html += generateCardHtml(data[i]);
                }
            }
        }

        $(".card-container").html(html);
    }
}

function generateHtml(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
        html += generateCardHtml(data[i]);
    }
    return html;
}

function generateCardHtml(item) {
    return `<div class="card" data-type="${item.type}">
                <img class="card-img-top" src="${item.img}" alt="${item.name}">
                <div class="card-body">
                    <h4 class="card-title">${item.type}</h4>
                    <p class="card-text">${item.name}</p>
                </div>
            </div>`;
}




$(document).ready(function(){
    var DynamicDropdownItem = [];
    for(let i=0;i<data.length;i++) {
        if(!DynamicDropdownItem.includes(data[i].type)){
            DynamicDropdownItem.push(data[i].type);
        }
    }
    DynamicFilter(DynamicDropdownItem);
});

function DynamicFilter(value){
    for(i=0;i<value.length;i++)
    {
        $(".btn-group").append(`<button class="btn btn-outline-warning rounded-0" data-target="`+ value[i] +`">`+ value[i] +`</button>`);
    }
}




// Button Functionality
$(document).on("click", ".btn", function() {
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

// on DOM load
$(document).ready(function(){
    let filter = "All";
    FilterItem(filter);
});
