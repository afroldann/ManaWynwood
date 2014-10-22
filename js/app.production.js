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

    var jssor_sliderUno = new $JssorSlider$("slider-list-gallery", options);
    var jssor_sliderDos = new $JssorSlider$("slider-basel-gallery", options);
    var jssor_sliderTres = new $JssorSlider$("slider-rc-gallery", options);
    var jssor_sliderCuatro = new $JssorSlider$("slider-walk-gallery", options);

    function ScaleSlider() {
        var parentWidth = jssor_sliderUno.$Elmt.parentNode.clientWidth;
        
        if (parentWidth) {
            var sliderWidth = parentWidth;
            sliderWidth = Math.min(sliderWidth);
            jssor_sliderUno.$ScaleWidth(sliderWidth);
        }
        else
            window.setTimeout(ScaleSlider, 30);
    }
    ScaleSlider();
    
    if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
        $(window).bind('resize', ScaleSlider);
    }
});