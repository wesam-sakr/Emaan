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


$(".text-box").each(function () {
  let $box = $(this);
  let $text = $box.find(".text-content");
  let $btn = $box.find(".toggleBtn");

  // قارن ارتفاع النص الحقيقي مع الـ max-height
  if ($text[0].scrollHeight <= parseFloat($text.css("max-height"))) {
    $btn.hide(); // لو قصير → اخفي الزر
  }

  // عند الضغط
  $btn.on("click", function () {
    $text.toggleClass("expanded");
    $(this).text($text.hasClass("expanded") ? "عرض أقل" : "عرض المزيد");
  });
});


  AOS.init({
    duration: 1000
  });


});
