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
$(document).ready(function() {
    var bar = new ProgressBar.Circle('#component--logo__circle', {
        strokeWidth: 3,
        easing: 'easeInOut',
        duration: 2000,
        color: '#fff',
        trailColor: '#000',
        trailWidth: 0,
        svgStyle: null
    });
    
    bar.animate(1.0);  // Number from 0.0 to 1.0
});
$(document).ready(function() {
    /*var bar = new ProgressBar.Circle('#demo-progress-circle', {
        strokeWidth: 1,
        easing: 'easeInOut',
        duration: 2000,
        color: '#417dc1',
        trailColor: '#fff',
        trailWidth: 0,
        svgStyle: null
    });

    bar.animate(1.0);*/ // Number from 0.0 to 1.0

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
});
$( document ).ready(function() {
    $('.tabs').tabs();
});