$(function(){
    $(".arrow").click(function(e){
        $(e.currentTarget).parent().parent().children("p").toggle();
        $(e.currentTarget).parent().children(".asked").toggleClass("bold");
        $(e.currentTarget).toggleClass("rotate");
    });
});