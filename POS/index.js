var item = {
    uniqueKey : [],
    Name : [],
    Quantity : [],
    Price : []
}

$(document).ready(function(){
    $("a").click(function(){
        if(item.uniqueKey.includes($(this).parent().attr('id')) === true){
            let Counter = item.uniqueKey.indexOf($(this).parent().attr('id'));
            item.Quantity[Counter] += 1;
        }
        else{
            item.uniqueKey[item.uniqueKey.length] = $(this).parent().attr('id');
            item.Name[item.Name.length] = $(this).find('.itemImage').attr('src');
            item.Quantity[item.Quantity.length] = 1;
            item.Price[item.Price.length] = $(this).find('.price').text();
        }
        printFunction();
    });
});


function printFunction(){
        if(item.Name.length > 0){
    let txt = "<ul><h3>INVOICE : </h3>";
    let TotalPrice = 0;
    let TotalQuantity = 0;
    for(let i=0; i < item.Name.length;){
        if(item.Quantity[i] == 0){
            item.uniqueKey.splice(i,1);
            item.Name.splice(i,1);
            item.Quantity.splice(i,1);
            item.Price.splice(i,1);
        }
        else{
        txt += '<li data-key=' + i +  '><img src="' + item.Name[i] + '"><a href ="javascript:void(0)" class="itemRemoveBtn">-</a> &nbsp;' + item.Quantity[i] + '&nbsp; <a href ="javascript:void(0)" class="itemAddBtn">+</a>price : <span class="singlePrice">' + item.Price[i] + '₹</span>&nbsp;total : <span class="MultiPrice">' + item.Price[i]*item.Quantity[i] + '₹</span></li>'; 
        TotalPrice += item.Price[i]*item.Quantity[i];
        TotalQuantity += item.Quantity[i];
        i++;
        }
    }
    txt += '</ul><div class="total"><span class="TotalQuant">Total Quantity : '+ TotalQuantity + ' </span><span>Total : </span><span class="totalPrice">' + TotalPrice + '₹</span></div>';
    $(".invoice").html(txt);

    // saving in localstorage
    objectInString = JSON.stringify(item);
    localStorage.setItem('key',objectInString);

    removeAddFn();   //reassigning remove btn's 
        }
}

// '+' & '-' function
function removeAddFn(){
    $(".itemRemoveBtn").click(function(){
        var removeItemIndex = $(this).parent().attr('data-key');
        item.Quantity[removeItemIndex] -= 1;
        printFunction();
    });
    $(".itemAddBtn").click(function(){
        var remover = $(this).parent().attr('data-key');
        item.Quantity[remover] += 1;
        printFunction();
    });
}
    
// Getting from localstorage then printing 
$(document).ready(function(){
    var fromLocalStorage = localStorage.getItem('key');
    if(fromLocalStorage != null){
        var item = JSON.parse(fromLocalStorage);
        printFunction();
    }
});

// Animation on Hover Shopping cart
$(document).ready(function(){
    $('.col-sm-7 a').mouseenter(function(){
        $(this).find('.icon').attr('src','shopping_cart.gif');
    });
    $('.col-sm-7 a').mouseleave(function(){
        $(this).find('.icon').attr('src','shopping_cart.png');
    });
});
