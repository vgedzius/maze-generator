var grid;

var nRows = 10;
var nCols = 10;
var w = 20;

function setup() {
  noStroke();
  frameRate(100);
  var canvas = createCanvas(nCols * w, nRows * w);
  canvas.parent('canvas-container');

  background(0);

  grid = new Grid(nCols, nRows);
}

function draw() {
  grid.show().update();
}