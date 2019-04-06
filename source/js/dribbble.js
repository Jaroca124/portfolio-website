$( document ).ready(function() {
    // Set the Access Token
    if ($("#shots").length) {
        var accessToken = '6b1ab673c477ebcc8b2812c1e9bef03b521df396cb746ccd546002982f30c0e9';

        // Call Dribble v2 API
        $.ajax({
            url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
            dataType: 'json',
            type: 'GET',
            success: function(data) {  
            if (data.length > 0) { 
                $.each(data.reverse(), function(i, val) {                
                $('#shots').prepend(
                    '<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><div class="title">' + val.title + '</div><img src="'+ val.images.hidpi +'"/></a>'
                    )
                })
            }
            else {
                $('#shots').append('<p>No shots yet!</p>');
            }
            }
        });
    }
});