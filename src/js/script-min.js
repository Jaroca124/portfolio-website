function renderImages(t,n){for(i=0;i<n.length;i++)!function(t){setTimeout(function(){$(n[t]).css({opacity:1,transform:"translateY(0)"})},250*t)}(i)}function parseData(t,n){if(t)for(var e=0;e<t.length;e++)t[e].projects[0]&&t[e].projects[0].id==n&&$("#shots").prepend('<div class="shot col-md-6 col-xl-4"><a class="shot__link" target="_blank" href="'+t[e].html_url+'" title="'+t[e].title+'"><img src="'+t[e].images.hidpi+'"/></a></div>');else $("#shots").append("<p>No shots yet!</p>")}$(document).ready(function(){$(window).scroll(function(){$(".block--images").each(function(){var t=$(this).parentsUntil(".section--default").parent().offset().top;if($(window).scrollTop()+$(window).height()/2>=t){var n=$(this).attr("data-animation-direction");void 0!==n&&!1!==n&&renderImages(n,$(this).find(".block--images__image"))}})})}),$(document).ready(function(){if($(".component--burger").length){var t=!0,n=$(".section--default--burgerbuilder").offset().top;$(window).scroll(function(){$(window).scrollTop()+$(window).height()/2>=n&&t&&($(".component--burger__ingredient").each(function(){$(this).css({transform:"translate(0, 0)"})}),setTimeout(function(){$(".component--burger__ingredient").each(function(){var t=$(this).attr("class").split("component--burger__ingredient--")[1],n="translate(0, "+e[t]+")",o=".component--burger__ingredient--"+t;$(o).css({transform:n})})},3e3),t=!1)})}var e={"top-bun":"173%",bacon:"189%",cheese:"72%",meat:"-28%",tomatos:"-90%",lettuce:"-97%","bottom-bun":"-269%"}}),$(document).ready(function(){$("#contactUsForm").submit(function(t){t.preventDefault();var n=$(this),e=n.attr("action");$.ajax({type:"POST",url:e,data:n.serialize(),success:function(t){}})})}),$(document).ready(function(){if($("#shots").length){var t="";if($("#portfolio--vgs").length?t="1186682":$("#portfolio--marvel").length&&(t="951608"),""!=t){var n=new XMLHttpRequest;n.onreadystatechange=function(){4==this.readyState&&200==this.status&&(data=JSON.parse(this.responseText),parseData(data,t))},n.open("GET","https://api.dribbble.com/v2/user/shots?access_token=b2394526e177d23b8da5a807806fc533a636027de359450b0c9d453b8499d9a1&per_page=100",!0),n.send()}}}),$(document).ready(function(){if($(".section--default--cabcs").length){var t=!0,n=$(".section--default--cabcs").offset().top;$(window).scroll(function(){$(window).scrollTop()+$(window).height()/2>=n&&t&&($(".section--default--cabcs").find(".section--default__image").find("img").css({transform:"translate(0, -50%) scale(.8)"}),t=!1)})}}),$(document).ready(function(){$(".scrollspy").scrollSpy()}),$(document).ready(function(){var t=200;function n(){$(".hero--home__overlay").fadeIn(5e3),setTimeout(function(){$(".hero--home__overlay__content").fadeIn(500),setTimeout(function(){!function(){for(i=0;i<$(".navigation--primary").find("a, span").length;i++)!function(n){setTimeout(function(){$($(".navigation--primary").find("a, span")[n]).fadeIn()},t*n)}(i)}(),function(){for(i=0;i<$(".hero--home__overlay__social").find("img").length;i++)!function(n){setTimeout(function(){$($(".hero--home__overlay__social").find("img")[n]).fadeIn()},t*n)}(i)}(),$(".component--scroll").fadeIn()},500)},4e3)}$("layout--index".length)&&($("html, body").addClass("overflow-hidden"),$(window).on("load",function(){$("html, body").removeClass("overflow-hidden"),$(".component--loader").fadeOut(100),function(){var t=$(".component--gallery").find(".col-4"),e=t.length,o=[11,9,15,8,14,6,1,22,12,5,2,7,19,21,18,3,16,10,0,13,20,17,4,23];for(i=0;i<e;i++)!function(e){setTimeout(function(){$(t[o[e]]).animate({opacity:1},1500),e==t.length-22&&n()},100*e)}(i)}()}))}),$(document).ready(function(){$(".tabs").tabs()});