$(document).ready(function (){

	$("#s-home").click(function (){
        $('html, body').animate({
                    scrollTop: $("#home").offset().top
                }, 1500);
    });
    $("#s-profile, #c-s-profile").click(function (){
        $('html, body').animate({
                    scrollTop: $("#profile").offset().top
                }, 1500);
    });
    $("#s-books, #c-s-books").click(function (){
        $('html, body').animate({
                    scrollTop: $("#books").offset().top
                }, 1500);
    });
    $("#s-contact, #c-s-contact").click(function (){
        $('html, body').animate({
                    scrollTop: $("#contact").offset().top
                }, 1500);
    });
});
// Produces width of .barChart  $("#p1").mouseenter(function()
 
    

$(document).ready(function() {
 $("#profile").mouseenter(function(){
  $('.graph-bar').each(function() {
     var dataWidth = $(this).data('value');
     $(this).css("width", dataWidth + "%");
  });
 }); 
});

// Produces width of .barChart  $("#p1").mouseenter(function()
