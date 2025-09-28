$(document).ready(function () {


  // website lang
  var bodyDir = $("body").css("direction");
  console.log(bodyDir);
  var dirAr;
  if (bodyDir == "rtl") {
    dirAr = true;
  } else {
    dirAr = false;
  }

  // Scroll to the top of the page
  window.addEventListener('scroll', () => {
    document.getElementById('scrollUp').style.display = window.scrollY > 300 ? 'flex' : 'none';
  });

  var $carousel = $(".programs .owl-carousel");
  var itemsCount = $carousel.find(".card").length; // عدد العناصر
  $(".programs .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    dots: true,
    responsiveClass: true,
    margin: 60,
    rtl: dirAr,
    responsive: {
      0: {
        items: 2,
      },
      578: {
        items: 2,
      },
      992: {
        items: 5,
      },
      1200:{
        items: 6,
        mouseDrag: itemsCount > 6, // السماح بالسحب فقط لو >=6 
        touchDrag: itemsCount > 6
      }
    }
  });
  
  $(".external-programs .owl-carousel").owlCarousel({
    nav: false,
    loop: false,
    dots: true,
    responsiveClass: true,
    margin: 40,
    rtl: dirAr,
    responsive: {
      0: {
        items: 2,
      },
      578: {
        items: 2,
      },
      992: {
        items: 4
      }
    }
  });

  AOS.init({
    duration: 1000
  });


});
