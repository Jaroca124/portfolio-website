$(document).ready(function() {

    if ($(".posterboard").length) {
        var topOffset = $(window).height()/2 - ($(".header").height() + ($(".jumbotron-fluid").height()/2));
        $(".posterboard").css("top", $(window).height() + "px");
        
        if (topOffset < 0) {
            $('.posterboard-background').animate({
                opacity: "1"
            },
            {
                easing: 'swing',
                duration: 1000
            });

            $(".posterboard").css("top", 0);
            $(".posterboard").css("margin-bottom", 0);
        }
        else if ($( document ).width() < 768) {
            $('.posterboard-background').animate({
                opacity: "1"
            },
            {
                easing: 'swing',
                duration: 1000
            });
            $(".posterboard").css("top", 0);
        }
        else {
            $('.posterboard-background').animate({
                opacity: "1"
            },
            {
                easing: 'swing',
                duration: 1000,
                complete: function() {
                    $(".posterboard").animate({
                            top: topOffset.toString() + "px"
                        },
                        {
                            easing: 'swing',
                            duration: 500,
                    });
                }
            });
            $(".posterboard").css("margin-bottom", topOffset.toString() + "px");
        }

        $(window).on('resize', function() {
            topOffset = $(window).height()/2 - ($(".header").height() + ($(".jumbotron-fluid").height()/2));
            if (topOffset < 0) {
                $(".posterboard").css("top", 0);
                $(".posterboard").css("margin-bottom", 0);
            }
            else if ($( document ).width() < 768) {
                $(".posterboard").css("top", 0);
            }
            else {
                $(".posterboard").css("top", topOffset.toString() + "px");
                $(".posterboard").css("margin-bottom", topOffset.toString() + "px");
            }
        });
    }
});