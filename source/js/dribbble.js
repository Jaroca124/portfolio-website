$( document ).ready(function() {
    $('.tabs').tabs();

    // Set the Access Token
    if ($("#shots").length) {
        var accessToken = '6b1ab673c477ebcc8b2812c1e9bef03b521df396cb746ccd546002982f30c0e9';

        // DRIBBBLE
        $.ajax({
            url: 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken,
            dataType: 'json',
            type: 'GET',
            success: function(data) {  
            if (data.length > 0) { 
                $.each(data.reverse(), function(i, val) {                
                $('#shots').prepend(
                    '<a class="shot" target="_blank" href="'+ val.html_url +'" title="' + val.title + '"><h2 class="title">' + val.title + '</h2><img src="'+ val.images.hidpi +'"/></a>'
                    )
                })
            }
            else {
                $('#shots').append('<p>No shots yet!</p>');
            }
            }
        });

        // INSTAGRAM
        var igAccessToken = '8923463321.345b6eb.5ce918c2ce294c06baaab6161cb477cc';
        var reqURL = 'https://api.instagram.com/v1/users/self/media/recent/?access_token='+igAccessToken;

        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
                response = JSON.parse(xhttp.responseText);
                loadInstagramPosts(response.data);
            }
        };
        xhttp.open("GET", reqURL, true);
        xhttp.send();
    }
});

function loadInstagramPosts(data) {
    if (data.length > 0) {
        for (i = 0; i < data.length; i++) { 
            let val = data[i];
            $('#instagram_posts').append(
                '<a class="post" target="_blank" href="'+ val.link +'"><img src="'+ val.images.standard_resolution.url +'" alt="' + val.caption + '"/><p class="caption">' + val.caption.text + '</p></a>'
            );
        }
    }
    else {
        $('#instagram_posts').append('<p>No posts yet!</p>');
    }
}