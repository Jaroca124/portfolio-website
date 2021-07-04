function load() {
	
    $(info_wrapper).css('visibility', 'hidden');
    $(flip_button).css('visibility', 'hidden');
    
    // Define Load Variable
    loaded = false;
    
    // Set Up Reuest for Data
    request = new XMLHttpRequest();
	url = "/assets/ff/fluencyfacts.json";

    // Wait for Data to Loa
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			
            loaded = true;
            
            // Parse Incoming Data
            data_array = JSON.parse(request.responseText);
    	}
	}

    request.open("GET", url, true);
	request.send();
}

$(document).ready(function() {

    $("#nc_button").click(function(event) {
        // Clear Data
        $(card).css('background-color',"rgba(0,0,0,.3)");
        $(flip_button).css('visibility', 'visible');
        $(info_wrapper).css('visibility', 'hidden');
        $(credits).css('display', 'none');
        if (loaded) {
           index = Math.floor((Math.random() * 143) + 0);

           // Load the Term Name
           document.getElementById("ffTerm").innerHTML = data_array[index].Name;
           document.getElementById("ff_Who").innerHTML = data_array[index].Who;
           document.getElementById("ff_When").innerHTML = data_array[index].When;
           document.getElementById("ff_Where").innerHTML = data_array[index].Where;
           document.getElementById("ff_What").innerHTML = data_array[index].What;
           document.getElementById("ff_Why").innerHTML = data_array[index].Why;
       }
    });

    $("#flip_button").click(function(event) {
        $(info_wrapper).css('visibility', 'visible');
        $(card).css('background-color', 'white');
        $(flip_button).css('visibility', 'hidden');
    });
    
});