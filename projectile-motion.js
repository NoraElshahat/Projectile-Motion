const g = 9.81;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const speed = document.getElementById("speed");
const angle = document.getElementById("angle");

let Angle,
  timer,
  speedd,
  x = 20,
  y = 450,
  radius = 5;

let count = 0;
let velocityX = speedd * Math.cos((Angle * Math.PI) / 180);
let velocityY = speedd * Math.sin((Angle * Math.PI) / 180);
let startPointX = x;
let startPointY = y;

const drawRocket = () => {
  image = new Image(20, 20);
  image.src = "startup.png";
  image.onload = function () {
    ctx.drawImage(image, 20, 450);
  };
};
drawRocket();

const intial = () => {
  speedd = speed.value;
  Angle = angle.value;
  count = 0;
  velocityX = speedd * Math.cos((Angle * Math.PI) / 180);
  velocityY = speedd * Math.cos((Angle * Math.PI) / 180);
};

const draw = () => {
  ctx.save();
  ctx.restore();
  //ama arw7
  // if (y < canvasHeight - radius + 1 && x < canvasWidth - radius + 1) {
  //   y = startPointY - (velocityY * count - (1 / 2) * g * Math.pow(count, 2));
  //   x = startPointX + velocityX * count;
  // } else {
  //   clearInterval(timer);
  // }
  ctx.save();
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.arc(x, y, radius, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
  count += 0.1;
};

const chackValues = () => {
  if (isNaN(speed.value) || speed.value === "") {
    alert("velocity: " + speed.value + "not a number");
    return 0;
  }
  if (isNaN(angle.value) || angle.value === "") {
    alert("Angle: " + angle.value + "not a number");
    return 0;
  }
  return 1;
};

const reset = () => {
  clearInterval(timer);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawRocket();
  x = 10;
  y = 100;
  startPointX = x;
  startPointY = y;
};

const start = () => {
  intial();
  if (chackValues()) timer = setInterval(draw, 10);
};
