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

    var jssor_sliderDos = new $JssorSlider$("slider-basel-gallery", options)
    var jssor_sliderCuatro = new $JssorSlider$("slider-walk-gallery", options);
    
});
