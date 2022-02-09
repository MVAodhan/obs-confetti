var myCanvas = document.createElement('canvas');
myCanvas.style.width = '100%';
document.querySelector('.app').appendChild(myCanvas);

(function playCannon() {
  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  const colors = ['#ff96bc', '#ffc477', '#fbe84a', '#c1f3a1', '#96fce4'];
  function confettiFun() {
    const optionsFunc = (angle, x, y) => {
      const options = {
        angle: angle,
        particleCount: 200,
        spread: 180,
        origin: {
          x: x,
          y: y,
        },
        colors: colors,
      };

      return options;
    };
    myConfetti(optionsFunc(295, 0.1, 0));
    myConfetti(optionsFunc(255, 0.9, 0));
    myConfetti(optionsFunc(75, 0.1, 1));
    myConfetti(optionsFunc(125, 0.9, 1));
  }
  confettiFun();

  let replay = setTimeout(confettiFun, 500);
  let again = setTimeout(confettiFun, 1000);
  let anotherOne = setTimeout(confettiFun, 1500);
})();
