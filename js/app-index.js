jQuery(document).ready(function($){	
	var sliderJQ = jQuery('#mana-slider').royalSlider({
	    arrowsNav:true,
	    loop:false,
	    keyboardNavEnabled:true,
	    controlsInside:false,
	    imageScaleMode:'fill',
	    arrowsNavAutoHide:false,
	    autoScaleSlider:true, 
	    autoScaleSliderWidth:960,     
	    autoScaleSliderHeight:650,
	    controlNavigation:'none',
	    thumbsFitInViewport:false,
	    navigateByClick:true,
	    startSlideId:0,
	    autoPlay:false,
	    transitionType:'move',
	    globalCaption:false,
	    slidesSpacing: 0,
	    
	    block: {
    		fadeEffect: true,
    		moveEffect: 'bottom',
    		moveOffset: 50,
    		speed: 300
    	},

	    deeplinking: {
	      	enabled:true,
	      	change:false
	    },

	    imgWidth:1400  	
	});

	var sliderInstance = sliderJQ.data('royalSlider');
	var logo = $('.logo img');
	
    sliderInstance.ev.on('rsAfterSlideChange', function(event) {
		currSliderNum = sliderInstance.currSlideId; 
		if(currSliderNum === 0 ){
			$(logo).fadeOut(550, function(){
				$(this).attr('src','img/svg/logo.svg').fadeIn(550);
			});
		}
		if(currSliderNum === 1 ){
			$(logo).fadeOut(550, function(){
				$(this).attr('src','img/svg/logo-art.svg').fadeIn(550);
			});	
		}
		if(currSliderNum === 2 ){
			$(logo).fadeOut(550, function(){
				$(this).attr('src','img/svg/logo-properties.svg').fadeIn(550);
			});
		}
		if(currSliderNum === 3 ){
			alert(currSliderNum + 1);
		}
	});
});