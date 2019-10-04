/*window.onload = function() {
  Particles.init({
    selector: '.background',
    color: "#ffffff",
    connectParticles: true,
    maxParticles: 50,
    speed: .25,
    responsive: [
        {
            breakpoint: 
                768,
                options: {
                    maxParticles: 0,
                    connectParticles: true
                }
        }
    ]
  });
};*/
$( document ).ready(function() {
    $('.tabs').tabs();

    // Set the Access Token
    if ($("#shots").length) {
        var accessToken = 'b2394526e177d23b8da5a807806fc533a636027de359450b0c9d453b8499d9a1';

        // DRIBBBLE
        $.ajax({
            url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
            dataType: 'json',
            type: 'GET',
            success: function(data) {  
            if (data.length > 0) { 
                $.each(data.reverse(), function(i, val) {                
                $('#shots').prepend(
                    '<div class="shot col-md-6 col-xl-4"><a class="shot__link" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><img src="'+ val.images.hidpi +'"/></a></div>'
                    )
                }); 
            }
            else {
                $('#shots').append('<p>No shots yet!</p>');
            }
            }
        });
    }
});
$(document).ready(function() {
    if ($('#component--logo__circle').length) {
        var bar = new ProgressBar.Circle('#component--logo__circle', {
            strokeWidth: 3,
            easing: 'easeInOut',
            duration: 2000,
            color: '#fff',
            trailColor: '#000',
            trailWidth: 0,
            svgStyle: null
        });

        bar.animate(1.0); // Number from 0.0 to 1.0
    }
});
$(document).ready(function() {

    if ($('#demo-progress-circle').length) {
        var bar = new ProgressBar.Circle('#demo-progress-circle', {
            strokeWidth: 1,
            easing: 'easeInOut',
            duration: 2000,
            color: '#417dc1',
            trailColor: '#fff',
            trailWidth: 0,
            svgStyle: null
        });
        bar.animate(1.0); // Number from 0.0 to 1.0
    }

    if ($('#overall-gpa-circle').length) {
        var overallGPA = new ProgressBar.Circle('#overall-gpa-circle', {
            strokeWidth: 1,
            easing: 'easeInOut',
            duration: 2000,
            color: '#417dc1',
            trailColor: '#fff',
            trailWidth: 0,
            svgStyle: null
        });
        overallGPA.animate(.99); // Number from 0.0 to 1.0
    }

    if ($('#major-gpa-circle').length) {
        var majorGPA = new ProgressBar.Circle('#major-gpa-circle', {
            strokeWidth: 1,
            easing: 'easeInOut',
            duration: 2000,
            color: '#417dc1',
            trailColor: '#fff',
            trailWidth: 0,
            svgStyle: null
        });
        majorGPA.animate(1.0); // Number from 0.0 to 1.0
    }
});
$( document ).ready(function() {
    $('.tabs').tabs();
});
$(document).ready(function() {
    var delay = 200;
    
    if ($('layout--index'.length)) {
        $('html, body').addClass('overflow-hidden');
        $(window).on("load", function() {
            $('html, body').removeClass('overflow-hidden');
            $('.component--loader').fadeOut(100);
            startGallery();
        });
    }

    function startGallery() {
        var shots = $('.component--gallery').find('.col-4');
        var numberShots = shots.length;
        var randMap = [11, 9, 15, 8, 14, 6, 1, 22, 12, 5, 2, 7, 19, 21, 18, 3, 16, 10, 0, 13, 20, 17, 4, 23];
        for (i = 0; i < numberShots; i++) {
            (function(i) {
                setTimeout(function() {
                    $(shots[randMap[i]]).animate({ opacity: 1 }, 1500);
                    if (i == shots.length - 22) {
                        renderOverlay();
                    }
                }, 100 * i);
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
            renderSocials();
            renderScroll();
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
    function renderSocials() {
        for (i = 0; i < $('.hero--home__overlay__social').find('img').length; i++) {
            (function(i) {
                setTimeout(function() {
                    $($('.hero--home__overlay__social').find('img')[i]).fadeIn();
                }, delay * i);
            })(i);
        }
    }
    function renderScroll() {
        $('.component--scroll').fadeIn();
    }
});