
///// Home slider /////
var slider = document.getElementById('slider');

var images = [
  './images/wall2.JPG',
  './images/sitting.jpg',
  './images/ledge.jpg',
  './images/jump.jpg',
];

(function imageFlip() {
  var counter = 0;
  slider.src = images[counter];
  setInterval(function() {
    counter++;
    if (counter >= images.length) {
      counter = 0;
    }
    if (slider.className != 'fadeIn') {
      slider.className = 'fadeIn';
      setTimeout(function() {
        slider.className = '';
      }, 1000);
  }
  slider.src = images[counter];
}, 3000);
})();



///// end /////
