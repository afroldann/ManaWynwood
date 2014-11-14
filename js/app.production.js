$(document).ready(function(){
    
    $(".open-cola-events").on('click', function(){
        setTimeout(function(){
            $("#cola-events").addClass("openEvents");
            $('html').css('overflow', 'hidden');
            $( "header" ).removeClass( "scrolled" );
        });
        return false;
    }); 

    $(".open-villale-events").on('click', function(){
        setTimeout(function(){
            $("#village-events").addClass("openEvents");
            $('html').css('overflow', 'hidden');
            $( "header" ).removeClass( "scrolled" );
        });
        return false;
    });     

    $("#gallery-rc,#gallery-rc .link-plus").on('click', function(){
        setTimeout(function(){
            $("#gallery-rc-container").addClass("openGallery");
            $('html').css('overflow', 'hidden');
            $( "header" ).removeClass( "scrolled" );
        });
        return false;
    }); 

    $("#gallery-slider,#gallery-slider a.link-plus").on('click', function(){
        setTimeout(function(){
            $( "header" ).removeClass( "scrolled" );
            $("#gallery").addClass("openGallery");
            $('html').css('overflow', 'hidden');
        });
        return false;
    }); 

    var sliderEvents = $("#events-rc").royalSlider({
        keyboardNavEnabled: true,
        autoHeight: true,
        autoScaleSlider: true,
        arrowsNavAutoHide: false,
        arrowsNav: true,
        loop: false

    }).data('royalSlider');

    $('.three.open-cola-events').on('click', function(){
        sliderEvents.goTo(2);
    });    

    $('.two.open-cola-events').on('click', function(){
        sliderEvents.goTo(1);
    });
    
    $('.one.open-cola-events').on('click', function(){
        sliderEvents.goTo(0);
    }); 

    var sliderEventsVillage = $("#events-village").royalSlider({
        keyboardNavEnabled: true,
        autoHeight: true,
        autoScaleSlider: true,
        arrowsNavAutoHide: false,
        arrowsNav: true,
        loop: false

    }).data('royalSlider');

    $('.three.open-villale-events').on('click', function(){
        sliderEventsVillage.goTo(2);
    });    

    $('.two.open-villale-events').on('click', function(){
        sliderEventsVillage.goTo(1);
    });
    
    $('.one.open-villale-events').on('click', function(){
        sliderEventsVillage.goTo(0);
    });

});