$(document).ready(function() {
  $("button.hide").click(function() {
    $("ins").css("background-color", "none");
    $("ins").css("text-decoration", "none");
    $("del").hide();
  })
})