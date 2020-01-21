$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false;
    });

    function change(x) {
        let stuff = '.info-container-'+x;
        let img = '.info-image-'+x;
        $(stuff).hover(function(){
        $(img).animate({padding:0}, 300);
    });
        $(stuff).mouseleave(function(){
        $(img).animate({padding:10}, 300);
        });
    }
    change(1);
    change(2);
    change(3);
});