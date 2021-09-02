document.addEventListener("DOMContentLoaded", function(event) { 
    componentContentMenu.init();
});
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
// $(document).ready(function() {
//     $('.navigation--primary__menu-button, #menu-close, .navigation--drawer--overlay').click(function() {
//         $('.navigation--drawer').toggleClass('drawer--open');
//         $('.navigation--drawer--overlay').toggle();
//     });
// });
// $(document).ready(function() {
//     $('.navigation--mobile__menu-button').click(function() {
//         $('.navigation--mobile__link').toggleClass('open');
//     });
// });
$( document ).ready(function() {
    $('.tabs').tabs();
});
$(document).ready(function() {
    if ($('.component--burger').length) {
        var renderBurgerBool = true;
        var burgerTrigger = $('.section--default--burgerbuilder').offset().top;
        $(window).scroll(function() {   
            if ((($(window).scrollTop() + ($(window).height() / 2)) >= burgerTrigger) && renderBurgerBool) {
                renderBurger();
                renderBurgerBool = false;
            }
        });
    }

    var ingredientPositions = {
        'top-bun': '173%',
        'bacon': '189%',
        'cheese': '72%',
        'meat': '-28%',
        'tomatos': '-90%',
        'lettuce': '-97%',
        'bottom-bun': '-269%'
    };

    function renderBurger() {
        $('.component--burger__ingredient').each(function() {
            $(this).css({'transform': 'translate(0, 0)'});
        });
        setTimeout(function() {
            returnIngredients();
        }, 3000);
    }

    function returnIngredients() {
        $('.component--burger__ingredient').each(function() {
            var ingredient = $(this).attr('class').split('component--burger__ingredient--')[1];
            var ingredientPosition = 'translate(0, ' + ingredientPositions[ingredient] + ')';
            var targetIngredient = '.component--burger__ingredient--' + ingredient;
            $(targetIngredient).css({'transform': ingredientPosition});
        });
    }
});
$(document).ready(function() {
    $("#contactUsForm").submit(function(e) {
        e.preventDefault();
        var form = $(this);
        var url = form.attr('action');
        $.ajax({
               type: "POST",
               url: url,
               data: form.serialize(),
               success: function(data)
               {
                   //alert(data);
               }
        });
    });
});
var componentContentMenu = (function() {
    'use strict';
   
    /* =================== private methods ================= */
    function computeActiveSection() {
        stickybits('#stickybits-target');

        $(window).on('scroll', () => {
            let activeSection = $('.component--content-menu').find('.active');
            if (activeSection.length) {
                // console.log(activeSection);
                let $collapseButton = $('#' + activeSection.parentsUntil('.collapse').parent().attr('aria-labelledby'));
                if ($collapseButton.attr('aria-expanded') == "false") {
                    $collapseButton.trigger('click');
                }
            }
        });
    }

    /* =================== public methods ================== */
    function init() {
        computeActiveSection();
    }
    /* =============== export public methods =============== */
    return {
        init: init
    };
}());
$(document).ready(function() {
    if ($("#shots").length) {
        var projectID = "";
        // Determine Project
        if ($('#portfolio--vgs').length) {
            projectID = "1186682";
        }
        else if ($('#portfolio--marvel').length) {
            projectID = "951608";
        }

        if (projectID != "") {
            var accessToken = 'b2394526e177d23b8da5a807806fc533a636027de359450b0c9d453b8499d9a1';
            var url = 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken+'&per_page=100';
            // DRIBBBLE
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    data = JSON.parse(this.responseText);
                    parseData(data, projectID);
                }
            };
            xhttp.open("GET", url, true);
            xhttp.send();
        }
    }
});

function parseData(data, projectID) {
    if (data) {
        for (var i=0; i < data.length; i++) {
            if (data[i].projects[0] && data[i].projects[0]['id'] == projectID) {
                $('#shots').prepend('<div class="shot col-md-6 col-xl-4"><a class="shot__link" target="_blank" href="'+ data[i].html_url +'" title="' + data[i].title + '"><img src="'+ data[i].images.hidpi +'"/></a></div>');
            }
        }
    }
    else {
        $('#shots').append('<p>No shots yet!</p>');
    }
}
$(document).ready(function() {
    if ($('.section--default--cabcs').length) {
        var renderDroneBool = true;
        var droneTrigger = $('.section--default--cabcs').offset().top;
        $(window).scroll(function() {   
            if ((($(window).scrollTop() + ($(window).height() / 2)) >= droneTrigger) && renderDroneBool) {
                renderDrone();
                renderDroneBool = false;
            }
        });
    }

    function renderDrone() {
        $('.section--default--cabcs').find('.section--default__image').find('img').css({transform: "translate(0, -50%) scale(.8)"});
    }
});
// $(document).ready(function() {
//     if ($('#component--logo__circle').length) {
//         var bar = new ProgressBar.Circle('#component--logo__circle', {
//             strokeWidth: 3,
//             easing: 'easeInOut',
//             duration: 2000,
//             color: '#fff',
//             trailColor: '#000',
//             trailWidth: 0,
//             svgStyle: null
//         });

//         bar.animate(1.0); // Number from 0.0 to 1.0
//     }
// });
$(document).ready(function() {
    $('.scrollspy').scrollSpy();
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
        for (i = 0; i < $('.navigation--primary').find('a, span').length; i++) {
            (function(i) {
                setTimeout(function() {
                    $($('.navigation--primary').find('a, span')[i]).fadeIn();
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