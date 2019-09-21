$(document).ready(function() {
    var delay = 200;
    
    if ($('layout--index'.length)) {
        $('html, body').addClass('overflow-hidden');
        setTimeout(function() {
            $('html, body').removeClass('overflow-hidden');
            $('.component--loader').fadeOut(100);
            startGallery();
        }, 5500);
    }

    function startGallery() {
        var shots = $('.component--gallery').find('.col-4');
        var numberShots = shots.length;
        var randMap = [11, 9, 15, 8, 14, 6, 1, 22, 12, 5, 2, 7, 19, 21, 18, 3, 16, 10, 0, 13, 20, 17, 4, 23];
        for (i = 0; i < numberShots; i++) {
            (function(i) {
                setTimeout(function() {
                    $(shots[randMap[i]]).animate({ opacity: 1 }, 600);
                    if (i == shots.length - 22) {
                        renderOverlay();
                    }
                }, delay * i);
            })(i);
        }
    }

    function renderOverlay() {
        $('.hero--home__overlay').fadeIn(5000);
        setTimeout(function() {
            renderLogo();
        }, 4000);
    }

    function renderLogo() {
        $('.hero--home__overlay__content').fadeIn(500);
        setTimeout(function() {
            renderMenu();
        }, 500);
    }

    function renderMenu() {
        for (i = 0; i < $('.navbar').find('a').length; i++) {
            (function(i) {
                setTimeout(function() {
                    $($('.navbar').find('a')[i]).fadeIn();
                }, delay * i);
            })(i);
        }
    }
});