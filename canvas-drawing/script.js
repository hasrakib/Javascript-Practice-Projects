const lineWidthSlider = document.querySelector("#line-width-slider");
const lineColorSlider = document.querySelector("#line-color-slider");
const canvas = document.querySelector("#draw");
const clearButton = document.querySelector("#clear");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 50;
ctx.lineJoin = "round";
ctx.lineCap = "round";

isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineWidth = 10;
let lineColor = "#ff0000";

function draw(e) {
  if (!isDrawing) return;
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  lastX = e.offsetX;
  lastY = e.offsetY;

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  lastX = e.offsetX;
  lastY = e.offsetY;
  isDrawing = true;
});
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

lineWidthSlider.addEventListener(
  "input",
  () => (lineWidth = lineWidthSlider.value)
);

lineColorSlider.addEventListener(
  "input",
  () => (lineColor = lineColorSlider.value)
);

clearButton.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);
