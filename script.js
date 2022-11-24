const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const color = document.getElementById('color');

const decrease = document.getElementById('decrease');
const increase = document.getElementById('increase');

const s = document.getElementById('size');
const clear = document.getElementById('clear');

let size = 5;
let isPressed = false
let x;
let y;

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

decrease.addEventListener('click', () => {
  if (size > 1) {
    size -= 1
    s.innerHTML = size;
  }
});

increase.addEventListener('click', () => {
  if (size <= 20) {
    size += 1;
    s.innerHTML = size;
    return;
  }
});

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;

  x = e.offsetX;
  y = e.offsetY;

  console.log(x, y);
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;

  x = undefined;
  y = undefined;

  console.log(x, y);
});

canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    console.log(x2, y2);

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color.value;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color.value;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}


