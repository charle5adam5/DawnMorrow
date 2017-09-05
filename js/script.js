
///// Home slider /////
var slider = document.getElementById('slider');

var images = [
  './images/wall2.JPG',
  './images/sitting.jpg',
  './images/ledge.jpg',
  './images/jump.jpg',
];

function slide() {
  var i = 0;
  slider.src = images[i];
  setInterval(() => {
    slider.className = 'fadeIn';
    setTimeout(() => {
      slider.className = '';
    }, 3999);
    i++;
    slider.src = images[i];
    if (i >= images.length) {
      i = 0;
      slider.src = images[i];
    }
  }, 5000);
}
slide();

///// end /////
