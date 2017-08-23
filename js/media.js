///// Media /////
const screendance = document.getElementById("screendance");
const choreography = document.getElementById("choreography");
const classwork = document.getElementById("classwork");
const reels = document.getElementById("reels");
const videos = document.getElementById("videos");
const content = document.querySelectorAll(".content");
const button = document.querySelectorAll(".drop");
const close = document.querySelectorAll(".close");

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
})
///// end /////
