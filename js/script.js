
///// Home slider /////
var slider = document.getElementById('slider');

var images = [
  './images/wall2.JPG',
  './images/sitting.jpg',
  './images/ledge.jpg',
  './images/jump.jpg',
];


function imageFlip() {
  let counter = 0;
  slider.src = images[counter];
  setInterval(function() {
    counter++;
    images.forEach(item => {
      if(slider.className != 'fadeIn') {
        slider.className = 'fadeIn';
        setTimeout(function() {
         slider.className = '';
        }, 1000);
      }
    })
    if (counter >= images.length) {
      counter = 0;
    }
    slider.src = images[counter];
  }, 2000);
}

slider.addEventListener("load", imageFlip());



///// end /////
