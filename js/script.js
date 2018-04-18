
///// Home slider /////
var slider = document.getElementById('slider');

var images = [
  './images/wall2.JPG',
  './images/sitting.jpg',
  './images/ledge.jpg',
  './images/jump.jpg',
];
slider.src = images[0];

function imageFlip() {
  let counter = 0;
  setInterval(function() {
    counter++;
    slider.src = images[counter];
    if(counter >= images.length) {
      counter = 0;
      slider.src = images[counter];
    }
  }, 2000);
}

slider.addEventListener("load", imageFlip());



///// end /////
