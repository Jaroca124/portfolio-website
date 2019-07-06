$( document ).ready(function() {
    var delay = 200;
    var shots = $('.component--gallery').find('.col-md-2');
    for (i = 0; i < shots.length; i++ ) {
        (function(i){
            setTimeout(function(){
                $(shots[i]).fadeIn();
            }, delay*i);
            if (i == shots.length - 1) {
                renderOverlay();
            }
        })(i);
    }

    function renderOverlay() {
        $('component--gallery__overlay').fadeIn();
    }
});