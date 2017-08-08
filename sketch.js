var grid;
var canvas;

var nRows;
var nCols;
var w;

var frameRate;

// controls
var rowsInput;
var colsInput;
var speedInput;
var cellSizeInput;
var generateBtn;

function setup() {
  noStroke();
  frameRate(frameRate);
  noLoop();
  background(0);

  rowsInput     = select('#size-x');
  colsInput     = select('#size-y');
  cellSizeInput = select('#cell-size');
  speedInput    = select('#speed');
  generateBtn   = select('#generate');

  initVariables();

  canvas = createCanvas(nCols * w, nRows * w);
  canvas.parent('canvas-container');

  grid = new Grid(nCols, nRows);

  generateBtn.mousePressed(function() {
    initVariables();
    loop();

    canvas = resizeCanvas(nCols * w, nRows * w);

    return false;
  });
}

function draw() {
  grid.show().update();
}

function initVariables() {
  nCols     = parseInt(colsInput.value());
  nRows     = parseInt(rowsInput.value());
  w         = parseInt(cellSizeInput.value());
  frameRate = parseInt(speedInput.value());
}