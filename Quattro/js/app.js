
AOS.init();

$(document).ready(function(){
  $(".menu").click(function(){
    $(".bar-alt").slideToggle();
  })
})



$(function(){
  $(window).on("scroll",function(){
    if($(window).scrollTop() > 300) {
      $(".header").css("background-color","black");
      $(".header").css("opacity","0.8");
      $(".header").css("padding","7px");
    }
    else{
      $(".header").css("background-color","transparent");
      $(".header").css("padding","30px");
    }
  })
})



$('.sliderAll').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });
          

  $('.sliderCar').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
     
    ]
  });

function tabclick(webname) {
    var content = document.getElementsByClassName("content");
    for(i=0; i<content.length; i++) {
        content[i].style.display = "none"
    }
    document.getElementById(webname).style.display = "block";
}

$(document).ready(function(){
  $(".tab1").click(function(){
    $(".tab1").addClass("active");
    $(".tab2").removeClass("active");
    $(".tab3").removeClass("active");
    $(".tab4").removeClass("active");
  })
})

$(document).ready(function(){
  $(".tab2").click(function(){
    $(".tab2").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab1").removeClass("tab1");
    $(".tab3").removeClass("active");
    $(".tab4").removeClass("active");
  })
})

$(document).ready(function(){
  $(".tab3").click(function(){
    $(".tab3").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab1").removeClass("tab1");
    $(".tab2").removeClass("active");
    $(".tab4").removeClass("active");
  })
})

$(document).ready(function(){
  $(".tab4").click(function(){
    $(".tab4").addClass("active");
    $(".tab1").removeClass("active");
    $(".tab1").removeClass("tab1");
    $(".tab2").removeClass("active");
    $(".tab3").removeClass("active");
  })
})


$('.counter').each(function(){
  var $this = $(this);
  countTo = $this.attr('data-count');

$({ countNum: $this.text()}).animate({
  countNum:countTo
},

{

  duration: 6000,
  easing: 'linear',
  step: function() {
      $this.text(Math.floor(this.countNum));
  },
  complete: function() {
      $this.text(this.countNum);
  }
}
)
});


$('.squareslick').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});


$(document).ready(function(){
  $(".pl").click(function(){
    $(".birinci").slideDown();
    $(".pl").css("display","none");
    $(".min").css("display","block");
    
  });
})

$(document).ready(function(){
  $(".min").click(function(){
    $(".birinci").slideUp();
    $(".pl").css("display","block");
    $(".min").css("display","none");
    
  });
})

$(document).ready(function(){
  $(".plu").click(function(){
    $(".ikinci").slideDown();
    $(".plu").css("display","none");
    $(".minu").css("display","block");
    
  });
})

$(document).ready(function(){
  $(".minu").click(function(){
    $(".ikinci").slideUp();
    $(".plu").css("display","block");
    $(".minu").css("display","none");
    
  });
})

$(document).ready(function(){
  $(".plus").click(function(){
    $(".ucuncu").slideDown();
    $(".plus").css("display","none");
    $(".minus").css("display","block");
    
  });
})

$(document).ready(function(){
  $(".minus").click(function(){
    $(".ucuncu").slideUp();
    $(".plus").css("display","block");
    $(".minus").css("display","none");
    
  });
})

$(document).ready(function(){
  $(".pluss").click(function(){
    $(".dorduncu").slideDown();
    $(".pluss").css("display","none");
    $(".minuss").css("display","block");
    
  });
})

$(document).ready(function(){
  $(".minuss").click(function(){
    $(".dorduncu").slideUp();
    $(".pluss").css("display","block");
    $(".minuss").css("display","none");
    
  });
})


$('.carimgs').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});


$('.newslide').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
   
  ]
});






$('.r').slick({
  infinite: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }
   
  ]
});

