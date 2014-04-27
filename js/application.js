$(document).ready(function() {
	$('#nav').onePageNav();
});

$('#nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
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