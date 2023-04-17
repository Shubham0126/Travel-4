    // Dropdown on mouse hover
  
    
    
    // Back to top button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn();
            $('.navbar').addClass('fixed-top')
        } else {
            $('#back-to-top').fadeOut();
            $('.navbar').removeClass('fixed-top')
        }
    });
    
    //Click event scroll to top button jquery
    
    $('#back-to-top').click(function(){
    
        $('html, body').animate({scrollTop : 0},600);
        return false;
    });
    
    (jQuery);
