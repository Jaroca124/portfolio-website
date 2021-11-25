$(document).ready(function() {
    $(window).scroll(function() {
        $('.block--images').each(function() {
            var scrollTrigger = $(this).parentsUntil('.section--default').parent().offset().top;
            if (($(window).scrollTop() + ($(window).height() / 2)) >= scrollTrigger) {
                var direction = $(this).attr('data-animation-direction');
                if (typeof direction !== typeof undefined && direction !== false) {
                    renderImages(direction, $(this).find('.block--images__image'));
                }
            }
        });
    });
});

function renderImages(direction, images) {
    for (i = 0; i < images.length; i++) {
        (function(i) {
            setTimeout(function() {
                $(images[i]).css({ opacity: 1, transform: "translateY(0)" });
            }, 250 * i);
        })(i);
    }
}