$(function(){
    $(".question").click(function(e){
        $(e.currentTarget).parent().children("p").toggle();
        $(e.currentTarget).toggleClass("bold");
        $(e.currentTarget).parent().children().children(".arrow").toggleClass("rotate");
    });
});