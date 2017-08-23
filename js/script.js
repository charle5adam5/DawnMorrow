///// Home slider /////
const slider = document.getElementById('slider');

let images = [
  './images/wall2.JPG',
  './images/sitting.jpg',
  './images/ledge.jpg',
  './images/jump.jpg',
];

function slide() {
  let i = 0;
  slider.src = images[i];
  setInterval(() => {
    i++;
    slider.src = images[i];
    if (i >= images.length) {
      i = 0;
      slider.src = images[i];
    }
    slider.className = 'fadeIn';
    setTimeout(() => {
      slider.className = '';
    }, 1000);
  }, 5000);
}
slide();
///// end /////
