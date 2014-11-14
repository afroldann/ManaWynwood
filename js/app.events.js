$(document).ready(function(){

    $(".open-basel-events").on('click', function(){
        setTimeout(function(){
            $("#basel-events").addClass("openEvents");
            $('html').css('overflow', 'hidden');
            $( "header" ).removeClass( "scrolled" );
        });
        return false;
    });     


    $(".open-walk-gallery, .open-walk-gallery .link-plus").on('click', function(){
        setTimeout(function(){
            $("#gallery-walk-container").addClass("openGallery");
            $('html').css('overflow', 'hidden');
            $( "header" ).removeClass( "scrolled" );
        });
        return false;
    }); 

    $(".open-walk-events").on('click', function(){
        setTimeout(function(){
            $("#walk-events").addClass("openEvents");
            $('html').css('overflow', 'hidden');
            $( "header" ).removeClass( "scrolled" );
        });
        return false;
    }); 

    $("#gallery-basel, #gallery-basel .link-plus").on('click', function(){
        setTimeout(function(){
            $("#gallery-basel-container").addClass("openGallery");
            $('html').css('overflow', 'hidden');
            $( "header" ).removeClass( "scrolled" );
        });
        return false;
    });     

    var sliderEvents = $("#events-walk").royalSlider({
        keyboardNavEnabled: true,
        autoHeight: true,
        autoScaleSlider: true,
        arrowsNavAutoHide: false,
        arrowsNav: true,
        loop: false

    }).data('royalSlider');

    $('.three.open-walk-events').on('click', function(){
        sliderEvents.goTo(2);
    });    

    $('.two.open-walk-events').on('click', function(){
        sliderEvents.goTo(1);
    });
    
    $('.one.open-walk-events').on('click', function(){
        sliderEvents.goTo(0);
    }); 

    var sliderBasel = $("#events-basel").royalSlider({
        keyboardNavEnabled: true,
        autoHeight: true,
        autoScaleSlider: true,
        arrowsNavAutoHide: false,
        arrowsNav: true,
        loop: false,
        autoPlay: {
            enabled: true,
            pauseOnHover: false,
            stopAtAction: false,
            delay: 8000
        }

    }).data('royalSlider');

    $('.two.open-basel-events').on('click', function(){
        sliderBasel.goTo(1);
    });
    
    $('.one.open-basel-events').on('click', function(){
        sliderBasel.goTo(0);
    });
    


    var sliderPlants = $('#sliderPlants').royalSlider({

    }).data('royalSlider');
    
    $('.lotTres.three').on('click', function(){
        sliderPlants.goTo(2);
    });    

    $('.lotDos.two').on('click', function(){
        sliderPlants.goTo(1);
    });
    
    $('.lotUno.one').on('click', function(){
        sliderPlants.goTo(0);
    });
});

$(function(){
    $('#gallery-walk').slides({
        preload: true,
        generateNextPrev: true
    });
});
    
$(function(){
    $('#links-basel').slides({
        preload: true,
        generateNextPrev: true
    });
});