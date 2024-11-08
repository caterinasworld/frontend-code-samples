const padding = 8;
const data = [
  400, 370, 410, 300, 300, 200, 400, 480, 320, 200, 150, 140, 400, 320, 360,
];

//
// Canvas 01 - Chart with Canvas
//

const canvas = document.getElementById('chart1');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'lightblue';
ctx.fillRect(0, 0, canvas.width, canvas.height);

data.forEach((item, index) => {
  ctx.fillStyle = 'teal';
  // void ctx.fillRect(x, y, width, height);
  ctx.fillRect(padding + index * 80, canvas.height - padding - item, 72, item);
});

//
// Canvas 02 - Chart with Shapes
//

const canvas2 = document.getElementById('chart2');
const ctx2 = canvas2.getContext('2d');

ctx2.fillStyle = 'lightblue';
ctx2.fillRect(0, 0, canvas.width, canvas.height);

const y = canvas.height - padding;
ctx2.fillStyle = 'teal';

data.forEach((item, index) => {
  ctx2.beginPath();
  ctx2.moveTo(4 + index * 80, y);
  ctx2.lineTo(42 + index * 80, y - item);
  ctx2.lineTo(80 + index * 80, y);
  ctx2.fill();
  // ctx2.stroke();
});

//
// Canvas 03 - Chart with Text
//

const canvas3 = document.getElementById('chart3');
const ctx3 = canvas3.getContext('2d');

ctx3.font = '36px sans-serif';
ctx3.fillText('Text in Canvas 1', 10, 100);

ctx3.font = 'italic 36px serif';
ctx3.textBaseline = 'top';
ctx3.fillText('Text in Canvas 2', 300, 220);

ctx3.font = 'bold 36px serif';
ctx3.textBaseline = 'middle';
ctx3.strokeText('Text in Canvas 3', 600, 120);

ctx3.font = 'small-caps 36px serif';
ctx3.textBaseline = 'bottom';
ctx3.fillText('Text in Canvas 4', 900, 420);
