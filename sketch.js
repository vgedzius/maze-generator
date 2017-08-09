var grid;
var canvas;

var nRows;
var nCols;
var w;

var speed;

// controls
var rowsInput;
var colsInput;
var speedInput;
var cellSizeInput;
var generateBtn;

function setup() {
  noStroke();
  noLoop();
  background(0);

  rowsInput     = select('#size-x');
  colsInput     = select('#size-y');
  cellSizeInput = select('#cell-size');
  speedInput    = select('#speed');
  generateBtn   = select('#generate');

  initVariables();

  canvas = createCanvas(nRows * w, nCols * w);
  canvas.parent('canvas-container');

  generateBtn.mousePressed(function() {
    initVariables();
    canvas = resizeCanvas(nRows * w, nCols * w);
    grid = new Grid(nRows, nCols);
    loop();
  });
}

function draw() {
  if (grid) {
    grid.show().update();
  }
}

function initVariables() {
  nCols     = parseInt(colsInput.value());
  nRows     = parseInt(rowsInput.value());
  w         = parseInt(cellSizeInput.value());
  speed     = parseInt(speedInput.value());

  frameRate(speed);
}