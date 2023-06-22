$(document).ready(function() {
  $("button.show").click(function() {
    $("ins").css("background-color", "#a0ffa0");
    $("ins").css("text-decoration", "underline");
    $("del").css("display", "inline");
  });
});