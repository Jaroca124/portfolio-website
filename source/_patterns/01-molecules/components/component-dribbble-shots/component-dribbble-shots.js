$(document).ready(function() {
    if ($("#shots").length) {
        var accessToken = 'b2394526e177d23b8da5a807806fc533a636027de359450b0c9d453b8499d9a1';

        // DRIBBBLE
        $.ajax({
            url: 'https://api.dribbble.com/v2/user/access_token='+accessToken,
            dataType: 'json',
            type: 'GET',
            headers: { 'Access-Control-Allow-Origin': 'http://localhost:3000' },
            success: function(data) {
                console.log(data);
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