var u = 0;
var text2;
$("input").keypress(function(event){ 
    if (event.which === 13){
        // getting text from input;
        var text = $(this).val();
        $("ul").append("<li>"+"<span><i class = 'far fa-trash-alt'></i></span>"+" "+text+"</li>");
        // u  = 1;
        // $("li").addClass("l");
    }

});
$("ul").on("click",'li',function(){
    $(this).toggleClass("g");
});
$("ul").on("click","span",function(){
    $(this).parent().toggleClass("g");
    $(this).parent().fadeOut(600,function(){
        $(this).remove();
    });
});
var inp = document.querySelector(".fas");
inp.addEventListener("click",function(){
    if (u == 0){
        $('input').hide();
        u = 1;
    }
    else{
        $("input").show();
        u = 0;
    }
    
});
