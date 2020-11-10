var canvasSize = 600;
var squareSize = canvasSize / 8;
var colorDark = "#34495e";
var colorLight = "#ecf0f1";
var colorActive = "#2ecc71";
var board = [];
var actives = [];


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
    this.active = false;
  }

  addPiece(piece)
  {
    this.piece = piece;
  }

  removePiece()
  {
    this.piece = new Piece("");;
  }

  activate()
  {
    console.log("activated");
    this.active = true;
    if(!actives.includes(this))
    {
      actives.push(this);
    }

  }
  disable()
  {
    this.active = false;
  }

  show()
  {

    if(this.colorT == true)
    {
      if (this.active == true) {
        fill(colorActive);
      }
      else {
        fill(colorDark);
      }
      square(this.x, this.y, squareSize);
    }
    else if(this.colorT == false) {

      if (this.active == true) {
        fill(colorActive);
      }
      else {
        fill(colorLight);
      }
      square(this.x, this.y, squareSize);
    }

    textAlign(CENTER);
    textSize(15);
    fill(0);
    text(this.piece.header, this.x + (squareSize/2), this.y + (squareSize/2));
  }
}


function setup(){
  var canv = createCanvas(canvasSize,canvasSize);
  canv.parent('canvascontainer');

  // for (var i = 0; i < 64; i++) {
  //   pieces.push("");
  // }

  var startColor = false;
  var xTile = 0;
  var yTile = 0;

  for (var i = 0; i < 8; i++) {
    xTile = 0;
    for (var j = 0; j < 8; j++) {
      var xtemp = j.toString()
      var temppos = xtemp.concat(i.toString())
      tempTile = new gridTile(xTile,yTile,startColor, temppos);
      board.push(tempTile)
      startColor = swap(startColor);
      xTile = xTile + squareSize;
    }
    startColor = swap(startColor);
    yTile = yTile + squareSize;
  }
  console.log(board);

  populateBoard();
}
function draw(){

  for (var i = 0; i < board.length; i++) {
    board[i].show();
    if(actives.length > 1)
    {
      console.log("Swapped");
      movepiece(actives[0],actives[1]);
      actives[0].disable();
      actives[1].disable();
      actives = [];
    }
  }

}
