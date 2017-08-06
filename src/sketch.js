var grid;

var nRows = 25;
var nCols = 25;
var w = 20;

function setup() {
  noStroke();
  frameRate(100);
  var canvas = createCanvas(nCols * w, nRows * w);
  canvas.parent('canvas-container');

  background(0);

  grid = new Grid(nRows, nCols);
}

function draw() {
  grid.show().update();
}