$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.slide').each( function(i){
            
            var bottom_of_object = $(this).offset().top + 300;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if(bottom_of_window > bottom_of_object){
                $(this).children().eq(0).children().eq(0).animate({'opacity':'1'},800);  //title    
                $(this).children().eq(1).children().eq(0).children().eq(0).delay(200).animate({'opacity':'1'},800);  //description
                $(this).children().eq(2).children().eq(0).delay(400).animate({'opacity':'1'},800);  //image
            
                $(this).children().eq(1).children().eq(0).animate({'opacity':'1'},800);  //image1
                $(this).children().eq(1).children().eq(1).animate({'opacity':'1'},800);  //image1  
                $(this).children().eq(2).children().eq(0).delay(200).animate({'opacity':'1'},800);  //image2
                $(this).children().eq(2).children().eq(1).animate({'opacity':'1'},800);  //image1  
                $(this).children().eq(3).children().eq(0).delay(400).animate({'opacity':'1'},800);  //image3
                $(this).children().eq(3).children().eq(1).animate({'opacity':'1'},800);  //image1  
            }
        });
    });
});