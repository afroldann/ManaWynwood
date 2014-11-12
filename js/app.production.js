$(document).ready(function(){ 
    var options = {
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $ChanceToShow: 2,                 
            $AutoCenter: 1,
            $SpacingX: 25
        },
        $ArrowNavigatorOptions: {                           
            $Class: $JssorArrowNavigator$,                  
            $ChanceToShow: 2,
            $AutoCenter: 2,
            $Steps: 1
        }
    };

    var jssor_sliderUno = new $JssorSlider$("slider-list-gallery-id", options);
    var jssor_sliderTres = new $JssorSlider$("slider-rc-gallery", options);

});