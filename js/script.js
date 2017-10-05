
///// Home slider /////
var slider = document.getElementById('slider');

var images = [
  './images/wall2.JPG',
  './images/sitting.jpg',
  './images/ledge.jpg',
  './images/jump.jpg',
];
var counter = 0;
slider.src = images[counter];

function imageIncrement () {
  counter++;
  if (counter >= images.length) {
    counter = 0;
  }
  return slider.src = images[counter];
};

function imageFade() {
    if (slider.className !== 'fadeIn') {
      slider.className = 'fadeIn';
      setTimeout(function() {
        slider.className = '';
      }, 0999);
  }
};

(function slide() {
  setInterval(function() {
    imageIncrement();
    imageFade();
  }, 4000);
})();


///// end /////
