var canvasSize = 600;
var squareSize = canvasSize / 8;
var colorDark = "#34495e";
var colorLight = "#ecf0f1";
var board = [];

function swap(x){
  if(x == true)
  {
    return false;
  }
  else if(x == false) {
    return true;
  }

}


class gridTile{
  constructor(x,y,colorTile)
  {
    this.x = x;
    this.y = y;
    this.colorT = colorTile;
  }
  show()
  {
    if(this.colorT == true)
    {
      fill(colorDark);
      square(this.x, this.y, squareSize);
    }
    else if(this.colorT == false) {
      fill(colorLight);
      square(this.x, this.y, squareSize);
    }
  }
}


function setup(){
  var canv = createCanvas(canvasSize,canvasSize);
  canv.parent('canvascontainer');

  var startColor = false;
  var xTile = 0;
  var yTile = 0;

  for (var i = 0; i < 8; i++) {
    xTile = 0;
    for (var j = 0; j < 8; j++) {
      tempTile = new gridTile(xTile,yTile,startColor);
      board.push(tempTile)
      startColor = swap(startColor);
      xTile = xTile + squareSize;
    }
    startColor = swap(startColor);
    yTile = yTile + squareSize;
  }
  console.log(board);
}
function draw(){

  for (var i = 0; i < board.length; i++) {
    board[i].show();
  }

}
