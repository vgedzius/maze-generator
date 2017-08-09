function Grid(rows, cols) {
  this.cells = [];
  this.rows = rows;
  this.cols = cols;
  this.stack = [];

  for (var i=0; i<this.rows; i++) {
    for (var j=0; j<this.cols; j++) {
      this.cells.push(new Cell(i, j));
    }
  }

  this.current          = this.cells[0];
  this.current.visited  = true;

  this.cell = function(x, y) {
    if (x < 0 || y < 0 || x > this.rows-1 || y > this.cols-1) {
      return;
    }
    return this.cells[x * this.cols + y];
  }

  this.show = function() {
    this.cells.forEach((cell) => cell.show());
    return this;
  }

  this.update = function() {
    this.current.highlight();
    var next = this.current.next();
    if(next) {
      this.stack.push(this.current);
      this.current.removeWalls(next);
      this.current = next;
      this.current.visited = true;
    } else if (this.stack.length > 0) {
       this.current = this.stack.pop();
    }

    return this;
  }
}