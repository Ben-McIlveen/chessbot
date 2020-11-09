var canvasSize = 600;
var squareSize = canvasSize / 8;
var colorDark = "#34495e";
var colorLight = "#ecf0f1";
var board = [];
var xaxis = ["a","b","c","d","e","f","g","h"];

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
  constructor(x,y,colorTile,tilePos)
  {
    this.x = x;
    this.y = y;
    this.colorT = colorTile;
    this.tilePos = tilePos;
    this.piece;
  }

  addPiece(piece)
  {
    this.piece = piece;
    textAlign(CENTER);
    textSize(15);
    fill(0);
    text(this.piece.header, this.x +(squareSize/2), this.y +(squareSize/2));

  }

  removePiece()
  {

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
      var xtemp = xaxis[j]
      var temppos = xtemp.concat((i+1).toString())
      tempTile = new gridTile(xTile,yTile,startColor, temppos);
      board.push(tempTile)
      startColor = swap(startColor);
      xTile = xTile + squareSize;
    }
    startColor = swap(startColor);
    yTile = yTile + squareSize;
  }
  console.log(board);
  for (var i = 0; i < board.length; i++) {
    board[i].show();
  }

  populateBoard();
}
function draw(){

}
