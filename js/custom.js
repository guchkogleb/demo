// JavaScript Document




// cufon font replacement class/id
Cufon.replace('h1,h2,h3,h4,th',{textShadow: '0px 1px 0px #ffffff'});

 
$(document).ready(function(){

$('#navigation').localScroll({
    offset: { top : '-40px' }
});


//Nivo slider
$('#slider').nivoSlider({
        effect:'random', // Specify sets like: 'fold,fade,sliceDown' or choose 'random' for mixed effects
        slices:15, // For slice animations
        boxCols: 8, // For box animations
        boxRows: 4, // For box animations
        animSpeed:500, // Slide transition speed
        pauseTime:5000, // How long each slide will show
		pauseOnHover:true,
       directionNav:true, // Next & Prev navigation
        directionNavHide:true, // Only show on hover
        controlNav:false // 1,2,3... navigation
	
});

////Fancybox for image / partner gallery
//$("a[rel=next]").fancybox({
//		'opacity'		: true,
//		'overlayShow'	       : true,
//		'overlayColor': '#000000',
//		'overlayOpacity'     : 0.9,
//		'titleShow':true,
//		'transitionIn'	: 'elastic',
//		'transitionOut'	: 'elastic'
//});

//On Hover Event for gallery, social
$('ul.gallery li img, ul.social li img').hover(function(){
			$(this).animate({opacity: 0.6}, 300);
		}, function () {
			$(this).animate({opacity: 1}, 300);
});

//subscribe form
$(function(){
	$('#subform').validate({
	    submitHandler: function(form) {
			    $(form).ajaxSubmit({
				    url: 'http://tanshcreative.com/eventus-lp-preview/php/subscribe-form.php',
					clearForm: true,
				    success: function() {
				    	$('.sub_inner').hide();
				    	$('.subscribe').append("<h3>Thank you!</h3><p>Duis aute habent claritatem irure dolor in habent reprehenderit qui in voluptate quod velit esse cillum soluta dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>")
				    }
			    });
		    }
	});         
});


}); // close document.ready


//	getTwitters('twitter', {
//       id: 'envato',
//        count: 2,
//        enableLinks: true,
//        template: '<span class="twitterPrefix"><span class="twitterStatus">%text%</span> <span class="username"><a href="http://twitter.com/%user_screen_name%"><br/></span>',
//        newwindow: true
//});

