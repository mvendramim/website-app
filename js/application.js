$(document).ready(function() {
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });
});

var mainbottom = 550;
var logo = 700;
 
$(window).on('scroll',function(){
    
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
        $('.nav-text').addClass('nav-text-selected');
    } else {
        $('.nav-text').removeClass('nav-text-selected');
   }
    
    if (stop > mainbottom) {
        $('.item').addClass('item-red');
    } else {
        $('.item').removeClass('item-red');
   }
    
    if (stop > mainbottom) {
        $('.current').addClass('selected-item-red');
    } else {
        $('.current').removeClass('selected-item-red');
   }
    
    if (stop > logo) {
        $('.logo').addClass('logo-scroll');
    } else {
        $('.logo').removeClass('logo-scroll');
   }


});