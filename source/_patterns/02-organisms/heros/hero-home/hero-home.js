$(document).ready(function() {
    var delay = 150;
    var shots = $('.component--gallery').find('.col-4');
    var numberShots = shots.length;
    for (i = 0; i < numberShots; i++) {
        (function(i) {
            setTimeout(function() {
                $(shots[i]).fadeIn();
                if (i == shots.length - 1) {
                    renderOverlay();
                }
            }, delay * i);
        })(i);
    }

    function renderOverlay() {
        $('.hero--home__overlay').fadeIn(1000);
        setTimeout(function() {
            renderLogo();
        }, 1000);
    }

    function renderLogo() {
        $('.hero--home__overlay__content').fadeIn(500);
    }
});