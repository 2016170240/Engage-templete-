/*global $ document window*/
$(document).ready(function(){
    /*
 $(".active1").css({
    "borderTop":"2px solid #4CAF50",
    "color":"#4CAF50"
 })*/
 $(".active1").css({"color":"#FFF"})
 
 var navh   = $(".navbar").innerHeight(),
 windh  = $(window).height();
$(".slider,.carousel-item").height((windh-navh)+80); 

$(window).on('scroll',function(){
    var w=$(this).width();
    if(w<998 && w>425)
    {
        $(".slider,.carousel-item").height((windh-navh)+500); 
        $(".inner-slider").css({
        "color": "#FFF",
        
        "position":" absolute",
        "width": "100%",
        "height": "100%"})
   
    }
    if(w<=375)
    {
        $(".slider,.carousel-item").height((windh-navh)+500); 
        $(".inner1").css({
        "color": "#FFF",
        "top":"30%",
        "position":" absolute",
        "width": "100%",
         "height": "100%",
          
    })
   // $(".inner-fixed").animate({"right":"29px"},200)    
    }
})
$(".fixed-menue").height(windh)
$('.first-icon').click(function(){
        $(this).toggleClass('fa-cogs').toggleClass('fa-close')
})

$(".first-icon").click(function(){
   if($(this).hasClass("fa-close"))
    {
       $(".fixed-menue").animate({"right":"0px"},200);
        $(".inner-fixed").animate({"right":"300px"},200)
    }
    else{
        $(".fixed-menue").animate({"right":"-300px"},200);


    }
})
/*fix close icon*/



/*activate wow */
new WOW().init();

/*activate owel*/ /*
$('.my-owel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
   
    }
})*/
$(function(){
    $(".vc").owlCarousel({
     items:3,
     loop:true,
     autoplay:true,
     smartspeed:100,
     autoplayHoverPause:true ,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:1
        },
        768:{
            items:3
        }
    }});
});

$(function(){
    $(".f-img").owlCarousel({
     items:4,
     loop:true,
     autoplay:true,
     smartspeed:100,
     autoplayHoverPause:true ,
    responsive:{
        0:{
            items:1
        },
        326:{
            items:2
        },
    376:{
            items:2
        },
        768:
    {
        items:3
    },
    1024:
    {
        items:4
    }

    }});
});

     

/*activate count up*/
$('.counter').counterUp({
    delay: 10,
    time: 2000
});

$(".additional-values .overlay-add button").mouseenter(function(){
    
    $(".additional-values .overlay-add button i").animate({
        "position":"absolute",
        "opacity":"1",
        "right":"9%",
        "top":"30%"
    
    },500)
    $(".additional-values .overlay-add button span").animate({
        "margin-right":"10px"
    
    },200)
})

$(".additional-values .overlay-add button").mouseleave(function(){
    $(".additional-values .overlay-add button i").animate({
        "position":"absolute",
        "opacity":"0",
        "right":"0%"
    
    },200)
    $(".additional-values .overlay-add button span").animate({
        "margin-right":"0"
    
    },200)
})


$(".nav-item .last-link").mouseenter(function(){
    $(this).css({"backgroundColor":"#4CAF50","color":"#fff"})
})
$(".nav-item .last-link").mouseleave(function(){
    $(this).css({"backgroundColor":"#fff","color":"#000"})
})
    
$(window).on('scroll', function(){

     
    if($(this).scrollTop()>50)
    {
      $("nav").css({
          "backgroundColor":"#FFF",
           "paddingBottom":"20px",
           "boxShadow": "0 2px 15px rgba(100, 100, 100, 0.3)"           
        })
       
        $(".nav-item a").css("color","#000");
        $(".f-active").css("color","#4CAF50");
        $(".nav-item .last-link").css({
        
    "backgroundColor":"#4CAF50",
    "borderRadius": "2px",
    "color": "#000000",
    "padding":"10px 15px", 
    "marginTop":" 20px "
        })
      
$("nav").addClass("WOW Animated fadeInDown")
        $(".second").css("opacity",1);
        $(".first").css("opacity",0);
        $(".navbar-brand img").css({
            "position": "absolute",
            
            
            "top": "0px",
            "lineHeight": "62px"
        
        })
        $(".nav-item .last-link").mouseenter(function(){
            $(this).css({"opacity":0.8,"color":"#000"})
        })
        $(".nav-item .last-link").mouseleave(function(){
            $(this).css({"opacity":1,"backgroundColor":"#4CAF50"})
        })
    }
    else
    {
        $("nav").css({"background":"transparent","boxShadow":"unset"});
        $(".nav-item a").css("color","#fff")
        $(".nav-item .last-link").css({
        
            "backgroundColor":"#fff",
            "borderRadius": "2px",
            "color": "#000000",
            "padding":"10px 15px", 
            "marginTop":" 20px ",
           
                })
                $(".second").css("opacity",0);
                $(".first").css("opacity",1);
                $(".nav-item .last-link").mouseenter(function(){
                    $(this).css({"backgroundColor":"#4CAF50","color":"#fff"})
                })
                $(".nav-item .last-link").mouseleave(function(){
                    $(this).css({"backgroundColor":"#fff","color":"#000"})
                })
    }
  

 }); 

/*card img *//*
$(".card").click(function(){
    $(".card-img-top").animate({"transform":"scale(1.2)"},200)

})
*/
$(".card-body .btn1").mouseenter(function(){
    $(".card1 .btn1 .fa-long-arrow-right").css({"transform":"translate(5px,0)"});
    $(".card1 .btn1 ").css({"color":"#4CAF50"});

})
$(".card-body .btn2").mouseenter(function(){
    $(".card2 .btn2 .fa-long-arrow-right").css({"transform":"translate(5px,0)"});
    $(".card2 .btn2 ").css({"color":"#4CAF50"});

})
$(".card-body .btn3").mouseenter(function(){
    $(".card3 .btn3 .fa-long-arrow-right").css({"transform":"translate(5px,0)"});
    $(".card3 .btn3 ").css({"color":"#4CAF50"});

})
$(".card-body .btn1").mouseleave(function(){
    $(".card1 .btn1 .fa-long-arrow-right").css({"transform":"translate(-3px,0)"});
    $(".card1 .btn1 ").css({"color":"#666"});

})
$(".card-body .btn2").mouseleave(function(){
    $(".card2 .btn2 .fa-long-arrow-right").css({"transform":"translate(-3px,0)"});
    $(".card2 .btn2 ").css({"color":"#666"});

})
$(".card-body .btn3").mouseleave(function(){
    $(".card3 .btn3 .fa-long-arrow-right").css({"transform":"translate(-3px,0)"});
    $(".card3 .btn3 ").css({"color":"#666"});

})
$(window).scroll(function(){
    if($(window).scrollTop() >=300)
             {
                 
                 $(".to-top a").fadeIn();
             }
         else
             {
                 $(".to-top a").fadeOut();
             }
     $(".to-top a").click(function(){
        
         $("html,body").animate({scrollTop:0},'500')
     })

})

$(".navbar li a").click(function(e){
    e.preventDefault();
    $("html,body").animate({
        scrollTop : $("#"+$(this).data("scroll")).offset().top
    },1000);
    $(".navbar li a").removeClass("active1");
    $(this).addClass("active1");
    
})


});