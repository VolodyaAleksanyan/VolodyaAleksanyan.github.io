const image = document.querySelector('.header-image');
const audio = new Audio('song.mp3');

image.addEventListener('click', () => {
  audio.play();
});
