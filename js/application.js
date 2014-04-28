$(document).ready(function() {
    configureLightBox();
    configureEventsOfMenu();

    $('#nav').onePageNav({
        currentClass: 'current',
        changeHash: false,
        scrollSpeed: 950,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing',
        begin: function() {

        },
        end: function() {
            var $selectedItem = $('.item.current');
        },
        scrollChange: function($currentListItem) {
            $liSecondScreen = $('#li-second-screen');
            if ($currentListItem.attr('id') === $liSecondScreen.attr('id')) {
                $('.item').addClass('red');
            } else {
                $('.item').removeClass('red');
            }
        }
    });
});

function configureEventsOfMenu() {
    $(document).on('click', '.item > a', function() {
        if ($(this).parent().attr('id') === 'li-second-screen') {
            $('.item').addClass('red');
        } else {
            $('.item').removeClass('red');
        }
    });
}


function configureLightBox()
{
$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
};

var mainbottom = 550;