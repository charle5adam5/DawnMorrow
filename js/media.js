///// Media /////
var screendance = document.getElementById("screendance");
var choreography = document.getElementById("choreography");
var classwork = document.getElementById("classwork");
var reels = document.getElementById("reels");
var videos = document.getElementById("videos");
var content = document.querySelectorAll(".content");
var button = document.querySelectorAll(".drop");
var close = document.querySelectorAll(".close");


button[0].addEventListener('click', function() {
  $(content).hide();
  $(screendance).slideDown("slow");
});
button[1].addEventListener('click', function() {
  $(content).hide();
  $(choreography).slideDown("slow");
});
button[2].addEventListener('click', function() {
  $(content).hide();
  $(classwork).slideDown("slow");
});
button[3].addEventListener('click', function() {
  $(content).hide();
  $(reels).slideDown("slow");
});

close.forEach(function(item) {
  item.addEventListener("click", function() {
    $(content).hide();
  })
});
///// end var
