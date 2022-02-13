var myCanvas = document.createElement('canvas');
myCanvas.style.width = '100vw';
myCanvas.style.height = '100vh';
document.querySelector('.app').appendChild(myCanvas);

const client = new tmi.Client({
  channels: ['usenameaodhan'],
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  console.log(message);

  if (!message.startsWith('!')) return;

  const args = message.slice(1).split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'bang') {
    playCannon();
    console.log('bang fired');
  }
});

function playCannon() {
  var myConfetti = confetti.create(myCanvas, {
    resize: true,
    useWorker: true,
  });

  var sound = new Howl({
    src: ['./fireworks.wav'],
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
      // sound.play();
      return options;
    };
    myConfetti(optionsFunc(295, 0.1, 0));
    myConfetti(optionsFunc(255, 0.9, 0));
    myConfetti(optionsFunc(75, 0.1, 1));
    myConfetti(optionsFunc(125, 0.9, 1));
    sound.play();
  }
  confettiFun();

  let replay = setTimeout(confettiFun, 500);
  let again = setTimeout(confettiFun, 1000);
  let anotherOne = setTimeout(confettiFun, 1500);
  let andAgain = setTimeout(confettiFun, 2000);
}
