//
// alert("Working!");


$(window).scroll(function() {
  if ($(document).scrollTop() > 130) {
    $("#mist").addClass("shrink");
  } else $("#mist").removeClass("shrink");
});
