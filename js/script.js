
///// Home slider /////
var slider = document.getElementById('slider');

var images = [
  './images/wall2.JPG',
  './images/sitting.jpg',
  './images/ledge.jpg',
  './images/jump.jpg',
];
slider.src = images[0];


function slideStyle() {
  if(slider.className != "fadeIn") {
    slider.className = "fadeIn";
  }
  setTimeout(() => {
    slider.className = "";
  }, 1000)
}


function imageFlip() {
  let counter = 0;
  setInterval(function() {
    counter++;
    slider.src = images[counter];
    if(counter >= images.length) {
      counter = 0;
      slider.src = images[counter];
    }
  slideStyle();
  }, 2000);
}

slider.addEventListener("load", imageFlip());



///// end /////
