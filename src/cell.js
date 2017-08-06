function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.visited = false;
  this.active  = false;

  this.topWall    = true;
  this.rightWall  = true;
  this.bottomWall = true;
  this.leftWall   = true;

  this.show = function() {
    var x = this.x * w;
    var y = this.y * w;
    var qw = w/4;

    if (this.visited) {
      fill(255);
    } else {
      fill(0);
    }
    rect(x, y, w, w);

    fill(0);

    // corners
    rect(x, y, qw, qw);
    rect(x + w - qw, y, qw, qw);
    rect(x, y + w - qw, qw, qw);
    rect(x + w - qw, y + w -qw, qw, qw);

    if (this.topWall) {
      rect(x, y, w, qw);
    }
    if (this.rightWall) {
      rect(x + w - qw, y, qw, w);
    }
    if (this.bottomWall) {
      rect(x, y + w - qw, w, qw);
    }
    if (this.leftWall) {
      rect(x, y, qw, w);
    }
  }

  this.update = function() {
      var next = this.next();
      if (next) {
        this.visited = true;
      }
  }

  this.highlight = function() {
    fill(255, 0, 0);
  }

  this.next = function() {
    var v = [];

    var top     = grid.cell(this.x, this.y - 1);
    var right   = grid.cell(this.x + 1, this.y);
    var bottom  = grid.cell(this.x, this.y + 1);
    var left    = grid.cell(this.x - 1, this.y);

    if (top && !top.visited) {
      v.push(top);
    }
    if (right && !right.visited) {
      v.push(right);
    }
    if (bottom && !bottom.visited) {
      v.push(bottom);
    }
    if (left && !left.visited) {
      v.push(left);
    }

    return random(v);
  }

  this.removeWalls = function (other) {
    var x = this.x - other.x;
    switch (x) {
      case 1:
        this.leftWall = false;
        other.rightWall = false;
        break;
      case -1:
        this.rightWall = false;
        other.leftWall = false;
        break;
    }

    var y = this.y - other.y;
    switch (y) {
      case 1:
        this.topWall = false;
        other.bottomWall = false;
        break;
      case -1:
        this.bottomWall = false;
        other.topWall = false;
        break;
    }
  }

  this.highlight = function () {
    fill(255, 0, 0);
    var qw = w / 4;
    var hw = w / 2;
    rect(this.x * w + qw, this.y * w + qw, hw, hw );
  }
}