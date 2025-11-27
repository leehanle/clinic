$(function () {
  $(".lipwo").on("mouseenter", function () {
    $(this).css({ transform: "scale(1.5)" });
  });
  $(".lipwo").on("mouseleave", function () {
    $(this).css({ transform: "scale(1)" });
  });
  $(".eyewo").on("mouseenter", function () {
    $(this).css({ transform: "scale(1.5)" });
  });
  $(".eyewo").on("mouseleave", function () {
    $(this).css({ transform: "scale(1)" });
  });
  $(".our .cos li").on("click", function () {
    let a = $(this).index();
    $(".our .dv div").removeClass("ab");
    $(".our .dv div").eq(a).addClass("ab");
  });
});
