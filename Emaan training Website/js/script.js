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
        items: 4,
      },
      992: {
        items: 5,
      },
      1200: {
        items: 6,
        mouseDrag: itemsCount > 6, // السماح بالسحب فقط لو >=6 
        touchDrag: itemsCount > 6
      }
    }
  });

  var $externalCarousel = $(".external-programs .owl-carousel");
  var externalItemsCount = $externalCarousel.find(".card").length; // عدد العناصر
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
        margin: 30,
        stagePadding: 20,
      },
      578: {
        stagePadding: 40,
        items: 3,
      },
      992: {
        stagePadding: 40,
        items: 4
      },
      1200: {
        items: 4,
        mouseDrag: externalItemsCount > 4, // السماح بالسحب فقط لو >=4 
        touchDrag: externalItemsCount > 4
      }
    }
  });

  $(".owl-carousel").each(function () {
    let isExternal = $(this).closest(".program-slider").hasClass("external");
    $(this).owlCarousel({
      nav: true,
      loop: false,
      dots: false,
      responsiveClass: true,
      margin: 20,
      rtl: dirAr,
      navText: [
    '<i class="fa-solid fa-chevron-right"></i>', // سهم يمين
    '<i class="fa-solid fa-chevron-left"></i>'  // سهم شمال
  ],
      responsive: isExternal ? {
        0: { items: 1 },
        992: { items: 2 }
      } : {
        0: { items: 1 },
        756: { items: 2 },
        1200: { items: 3 }
      }
    });
  });


  AOS.init({
    duration: 1000
  });


});
