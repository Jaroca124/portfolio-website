$(document).ready(function() {
    if ($('.section--default--cabcs').length) {
        var renderDroneBool = true;
        var droneTrigger = $('.section--default--cabcs').offset().top;
        if ($('#layout--cabcs').length) {
            renderDrone();
        }
        else {
            $(window).on('scroll', function() {   
                if ((($(window).scrollTop() + ($(window).height() / 2)) >= droneTrigger) && renderDroneBool) {
                    renderDrone();
                    renderDroneBool = false;
                }
            });
        }
    }

    function renderDrone() {
        $('.section--default--cabcs').find('.section--default__image').find('img').css({transform: "translate(0, -50%) scale(.8)"});
    }
});