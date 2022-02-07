var myCanvas = document.createElement('canvas');
myCanvas.style.width = '100%';
document.querySelector('.app').appendChild(myCanvas);

(function playCannon() {
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }
  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  function confettiFun() {
    const max = Math.floor(Math.random() * (7 - 5) + 5);
    let min = 5;
    console.log(max);
    while (min <= max) {
      let particles = Math.floor(Math.random() * (150 - 300) + 300);
      myConfetti({
        angle: randomInRange(55, 125),
        particleCount: particles,
        spread: 160,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: 0.8,
        },
      });

      min++;
    }
    min = 5;
  }
  confettiFun();

  let replay = setTimeout(confettiFun, 500);
  let again = setTimeout(confettiFun, 1000);
  let anotherOne = setTimeout(confettiFun, 1500);
})();
