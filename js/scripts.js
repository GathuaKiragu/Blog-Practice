$(document).ready(function() {
  $("button#Lightblue").click(function() {
    $("body").removeClass();
    $("body").addClass("lightbg");
  });

  $("button#grey").click(function() {
    $("body").removeClass();
    $("body").addClass("darkbg");
  });
});