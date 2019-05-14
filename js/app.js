// GLOBAL VARIABLE
var graphicdesign = document.querySelector(".sect1-gdesign-work");

// SECTION 1 - GRAPHIC DESIGN
$(graphicdesign).hide();


// WORK SHOWCASE BUTTON - JQUERY

$("#sect1-gdesign-but").click(function(){
    $(graphicdesign).fadeIn(500);
    console.log("hi");
});



// SLICK CAROUSEL
$(document) .ready(function(){
    $(".sect1-gdesign-work .gdesign-carousel").slick({
        dots:true,
        arrows:true,
        // fade:true,
        adaptiveHeight: true
    });
});
