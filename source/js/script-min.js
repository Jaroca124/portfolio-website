function renderImages(e,t){for(i=0;i<t.length;i++)!function(e){setTimeout(function(){$(t[e]).css({opacity:1,transform:"translateY(0)"})},250*e)}(i)}function parseData(e){if(e)for(var t=0;t<e.length;t++)e[t].projects[0]&&"951608"==e[t].projects[0].id&&$("#shots").prepend('<div class="shot col-md-6 col-xl-4"><a class="shot__link" target="_blank" href="'+e[t].html_url+'" title="'+e[t].title+'"><img src="'+e[t].images.hidpi+'"/></a></div>');else $("#shots").append("<p>No shots yet!</p>")}$(document).ready(function(){$(window).scroll(function(){$(".block--images").each(function(){var e=$(this).parentsUntil(".section--default").parent().offset().top;if($(window).scrollTop()+$(window).height()/2>=e){var t=$(this).attr("data-animation-direction");void 0!==t&&!1!==t&&renderImages(t,$(this).find(".block--images__image"))}})})}),$(document).ready(function(){$(".navigation--mobile__menu-button").click(function(){$(".navigation--mobile__link").toggleClass("open")})}),$(document).ready(function(){$(".tabs").tabs()}),$(document).ready(function(){if($("#shots").length){var e=new XMLHttpRequest;e.onreadystatechange=function(){4==this.readyState&&200==this.status&&(data=JSON.parse(this.responseText),parseData(data))},e.open("GET","https://api.dribbble.com/v2/user/shots?access_token=b2394526e177d23b8da5a807806fc533a636027de359450b0c9d453b8499d9a1&per_page=100",!0),e.send()}}),$(document).ready(function(){$("#component--logo__circle").length&&new ProgressBar.Circle("#component--logo__circle",{strokeWidth:3,easing:"easeInOut",duration:2e3,color:"#fff",trailColor:"#000",trailWidth:0,svgStyle:null}).animate(1)}),$(document).ready(function(){$("#demo-progress-circle").length&&new ProgressBar.Circle("#demo-progress-circle",{strokeWidth:1,easing:"easeInOut",duration:2e3,color:"#417dc1",trailColor:"#fff",trailWidth:0,svgStyle:null}).animate(1);$("#overall-gpa-circle").length&&new ProgressBar.Circle("#overall-gpa-circle",{strokeWidth:1,easing:"easeInOut",duration:2e3,color:"#417dc1",trailColor:"#fff",trailWidth:0,svgStyle:null}).animate(.99);$("#major-gpa-circle").length&&new ProgressBar.Circle("#major-gpa-circle",{strokeWidth:1,easing:"easeInOut",duration:2e3,color:"#417dc1",trailColor:"#fff",trailWidth:0,svgStyle:null}).animate(1)}),$(document).ready(function(){var e=200;function t(){$(".hero--home__overlay").fadeIn(5e3),setTimeout(function(){$(".hero--home__overlay__content").fadeIn(500),setTimeout(function(){!function(){for(i=0;i<$(".navigation--primary").find("a, span").length;i++)!function(t){setTimeout(function(){$($(".navigation--primary").find("a, span")[t]).fadeIn()},e*t)}(i)}(),function(){for(i=0;i<$(".hero--home__overlay__social").find("img").length;i++)!function(t){setTimeout(function(){$($(".hero--home__overlay__social").find("img")[t]).fadeIn()},e*t)}(i)}(),$(".component--scroll").fadeIn()},500)},4e3)}$("layout--index".length)&&($("html, body").addClass("overflow-hidden"),$(window).on("load",function(){$("html, body").removeClass("overflow-hidden"),$(".component--loader").fadeOut(100),function(){var e=$(".component--gallery").find(".col-4"),o=e.length,n=[11,9,15,8,14,6,1,22,12,5,2,7,19,21,18,3,16,10,0,13,20,17,4,23];for(i=0;i<o;i++)!function(o){setTimeout(function(){$(e[n[o]]).animate({opacity:1},1500),o==e.length-22&&t()},100*o)}(i)}()}))});