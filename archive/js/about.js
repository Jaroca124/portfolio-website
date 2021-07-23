$('p1').hover(
  function(){
  		$(panel_overlay).css("background-color", "rgba(0,0,0,.4)");
	}, function(){
  		$(panel_overlay).css("background-color", "rgba(0,0,0,0");
});

i = 0;
var num_slides = 3;
function load() {
    setInterval(function() {  
        i++;
        $(p1).fadeOut(1000, function () {
            $(p1).css('background-image', 'url(../Website/assets/about/panels/b' + i + '.png');
            $(p1).fadeIn(1000);
        });
        $(p2).fadeOut(1000, function () {
            $(p2).css('background-image', 'url(../Website/assets/about/panels/v' + i + '.png');
            $(p2).fadeIn(1000);
        });
        $(p3).fadeOut(1000, function () {
            $(p3).css('background-image', 'url(../Website/assets/about/panels/m' + i + '.png');
            $(p3).fadeIn(1000);
        });
        $(p4).fadeOut(1000, function () {
            $(p4).css('background-image', 'url(../Website/assets/about/panels/mu' + i + '.png');
            $(p4).fadeIn(1000);
        });
        $(p5).fadeOut(1000, function () {
            $(p5).css('background-image', 'url(../Website/assets/about/panels/tv' + i + '.png');
            $(p5).fadeIn(1000);
        });
        if(i == num_slides) {
            i = 0;
        }
    }, 5000);
}