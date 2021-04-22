
//replace $ to jquery
(function($){
//jquery document ready
	$(document).ready(function(){
        $('.banner-area .owl-carousel').owlCarousel({
            loop:true,
            autoplay:true,
            responsiveClass:true,
               responsive:{
            0:{
                items:1,
                nav:true
            },
            1200:{
                items:1,
                nav:true,
                loop:true
            }
        }
    });
		

	//owl-carousel-coding-start
    $('.section2-element .owl-carousel').owlCarousel({
    	loop:true,
   		margin: 30,
   		autoplay:true,
    	responsiveClass:true,
    	   responsive:{
        0:{
            items:1.01,
            nav:true
        },
        500:{
            items:2.01,
            nav:false
        },
        756:{
            items:2.01,
            nav:false
        },
        900:{
            items:3,
            nav:false
        },
        1100:{
            items:3,
            nav:false
        },
        1200:{
            items:4,
            nav:true,
            loop:true
        }
    }
});//owl-carousel-coding-ends
    //owl-carousel-coding-start
    $('.section6-element .owl-carousel').owlCarousel({
        loop:true,
        margin: 18,
        autoplay:true,
        responsiveClass:true,
           responsive:{
        0:{
            items:1.2,
            nav:true
        },
        400:{
            items:2,
            nav:false
        },
        550:{
            items:3,
            nav:false
        },
        800:{
            items:4,
            nav:false
        },
        991:{
            items:5,
            nav:false
        },
        1200:{
            items:6,
            nav:true,
            loop:false
        }
    }
});
    //owl-carousel-coding-start
    $('.section8-element .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        autoplay:true,
        responsiveClass:true,
           responsive:{
        0:{
            items:1,
            nav:true
        },
        
        800:{
            items:2,
            nav:false
        }
    }
});
//footer-btn-effect
$('.footer-btn a').blur(function(){
    $(this).css({
        background:'#48a7d4',
        borderColor:'#48a7d4'
    });
});
//toggle-menu
$('#bar').click(function(){
    $('.toggle-menu').slideToggle();
});





	
	});
})(jQuery)