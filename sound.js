let osc, playing, freq, amp;

function setup() 
{
  let cnv = createCanvas(windowWidth/4, windowHeight/4);
  cnv.mousePressed(playOscillator);
  osc = new p5.Oscillator('sine');
}

function draw() 
{
  background(255)
  freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
  amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

  text('Click and Drag to Play', 15, 15);

  if (playing) 
  {
    // smooth the transitions by 0.1 seconds
    osc.freq(freq, 0.1);
    osc.amp(amp, 0.1);
    fill(0);
  text('Click and Drag to Play', 15, 20);
  text('Freq: ' + freq, 15, 40);
  text('Amp: ' + amp, 15, 60);
  }
    ellipse(mouseX, mouseY, 80, 80);
}

function playOscillator() 
{
  // starting an oscillator on a user gesture will enable audio
  // in browsers that have a strict autoplay policy.
  // See also: userStartAudio();
  osc.start();
  playing = true;
}

function mouseReleased() 
{
  // ramp amplitude to 0 over 0.5 seconds
  osc.amp(0, 0.5);
  playing = false;
  fill(255);
}
