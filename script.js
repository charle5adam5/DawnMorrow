
const screendance = document.getElementById("screendance");
const choreography = document.getElementById("choreography");
const classwork = document.getElementById("classwork");
const reels = document.getElementById("reels");
const button = document.querySelectorAll(".drop");
const content = document.querySelectorAll(".content");
const videos = document.getElementById("videos");
const close = document.querySelectorAll(".close");


  button[0].addEventListener("click", function() {
      $(button).toggle();
      $(content[0]).slideDown("slow");
    });
  button[1].addEventListener("click", function() {
      $(button).toggle();
      $(content[1]).slideDown("slow");
    });
  button[2].addEventListener("click", function() {
      $(button).toggle();
      $(content[2]).slideDown("slow");
    });
  button[3].addEventListener("click", function() {
      $(button).toggle();
      $(content[3]).slideDown("slow");
    });

close.forEach(function(item) {
  item.addEventListener("click", function() {
    $(content).slideUp("slow");
    $(button).toggle();
  })
});
