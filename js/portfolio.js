var fade = .2;

$(function() {
  $('#redhat').hover(function() {
    $('#slider_overlay').css('background-image', 'url(project_pages/project_assets/galaxy_pic.jpg)');
    $('#cabcs').css('opacity', fade);
    $('#vft').css('opacity', fade);
  }, function() {
    // on mouseout, reset the background colour
    $('#slider_overlay').css('background-image', 'none');
      $('#cabcs').css('opacity', '1');
    $('#vft').css('opacity', '1');
  });
});

$(function() {
  $('#cabcs').hover(function() {
    $('#slider_overlay').css('background-image', 'url(assets/portfolio/Drone_Background@3x.png)');
      $('#redhat').css('opacity', fade);
    $('#vft').css('opacity', fade);
  }, function() {
    // on mouseout, reset the background colour
    $('#slider_overlay').css('background-image', 'none');
      $('#redhat').css('opacity', '1');
    $('#vft').css('opacity', '1');
  });
});

$(function() {
  $('#vft').hover(function() {
    $('#slider_overlay').css('background-image', 'url(assets/portfolio/Gardening_Background@3x.png)');
      $('#redhat').css('opacity', fade);
      $('#cabcs').css('opacity', fade);
  }, function() {
    // on mouseout, reset the background colour
    $('#slider_overlay').css('background-image', 'none');
      $('#redhat').css('opacity', '1');
      $('#cabcs').css('opacity', '1');
  });
});