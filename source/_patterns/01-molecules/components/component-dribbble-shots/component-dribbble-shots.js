$(document).ready(function() {
    if ($("#shots").length) {
        var accessToken = 'b2394526e177d23b8da5a807806fc533a636027de359450b0c9d453b8499d9a1';
        var url = 'https://api.dribbble.com/v2/user/shots?access_token='+accessToken+'&per_page=100';
        // DRIBBBLE
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                data = JSON.parse(this.responseText);
				parseData(data);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
});

function parseData(data) {
    if (data) {
        for (var i=0; i < data.length; i++) {
            if (data[i].projects[0] && data[i].projects[0]['id'] == "951608") {
                $('#shots').prepend('<div class="shot col-md-6 col-xl-4"><a class="shot__link" target="_blank" href="'+ data[i].html_url +'" title="' + data[i].title + '"><img src="'+ data[i].images.hidpi +'"/></a></div>');
            }
        }
    }
    else {
        $('#shots').append('<p>No shots yet!</p>');
    }
}