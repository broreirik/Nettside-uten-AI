const img = document.getElementById('bilde');
const lyd = new Audio('revolver.mp3');
const yehaw = new Audio('yehaw.mp3');

let rotation = 0;
let positionX = 0;

img.addEventListener('click', function() {
  rotation += 360;
  positionX += 100;

  if (positionX > 600) {
    positionX = 0;
    yehaw.currentTime = 0;
    yehaw.play();
  } else {
    lyd.currentTime = 0;
    lyd.play();
  }

  img.style.transform = `translateY(60px) translateX(${positionX}px) rotate(${rotation}deg)`;
});
