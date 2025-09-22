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


  let started = false; // عشان الكاونتر يشتغل مره واحدة بس

  function animateCounters() {
    $('.counter').each(function () {
      let $this = $(this);
      let target = +$this.attr('data-target');
      let prefix = $this.attr('data-prefix') || '';
      let suffix = $this.attr('data-suffix') || '';

      $({ countNum: $this.text() }).animate(
        { countNum: target },
        {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(prefix + Math.floor(this.countNum) + suffix);
          },
          complete: function () {
            $this.text(prefix + this.countNum + suffix);
          }
        }
      );
    });
  }

  $(window).on('scroll', function () {
    let top = $('#stats').offset().top - window.innerHeight + 100;
    if (!started && $(window).scrollTop() > top) {
      animateCounters();
      started = true;
    }
  });

  AOS.init({
    duration: 1000
  });


});
