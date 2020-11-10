// Pieces:
// 1 - Castle
// 2 - Knight
// 3 - Bishop
// 4 - Queen
// 5 - King
// 6 - Pawn

var firstRow = [1,2,3,4,5,3,2,1,6,6,6,6,6,6,6,6];
var center = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var bottomRow = [6,6,6,6,6,6,6,6,1,2,3,4,5,3,2,1];

var pieces = {
  0: "",
  1: "Castle",
  2: "Knight",
  3: "Bishop",
  4: "Queen",
  5: "King",
  6: "Pawn",
}



class Piece
{
  constructor(header,side)
  {
    this.header = header;
    this.side = side;
    this.moves = 0;
  }
}

function populateBoard()
{

  // board[i].addPiece(new Piece(pieces[defaultRow[i]]));
  console.log("Populating Board");
  for (var i = 0; i < 16; i++) {
    console.log(board[i]);
    board[i].addPiece(new Piece(pieces[firstRow[i]],"black"));
  }
  for (var j = 16; j < 48; j++) {
    console.log(board[j-16]);
    board[j].addPiece(new Piece(pieces[center[j-16]],"empty"));
  }
  for (var k = 48; k < 64; k++) {
    console.log(board[k-48]);
    board[k].addPiece(new Piece(pieces[bottomRow[k-48]],"white"));
  }
}


function canPieceMove(tile1, tile2)
{
  if(tile1.piece.header == "")
  {
    return false;
  }

  var tile1x = tile1.tilePos[0];
  var tile1y = tile1.tilePos[1];

  var tile2x = tile2.tilePos[0];
  var tile2y = tile2.tilePos[1];

  var translatex = tile1x - tile2x;
  var translatey = tile1y - tile2y;

  console.log(translatex,translatey);
  if(tile1.piece.header == "Castle")
  {
    if (translatex == 0 || translatey == 0) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (tile1.piece.header == "Knight")
  {
    if (Math.abs(translatex) == 2 && Math.abs(translatey) == 1 || Math.abs(translatex) == 1 && Math.abs(translatey) == 2 ){
      return true;
    }
    else {
      return false;
    }
  }
  else if (tile1.piece.header == "Bishop")
  {
    if (Math.abs(translatex) == Math.abs(translatey)){
      return true;
    }
    else {
      return false;
    }
  }
  else if (tile1.piece.header == "Queen")
  {
    if (translatex == 0 || translatey == 0 || Math.abs(translatex) == Math.abs(translatey)) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (tile1.piece.header == "King")
  {
    if (Math.abs(translatex) == 1 && Math.abs(translatey) == 0 || Math.abs(translatex) == 0 && Math.abs(translatey) == 1 || (Math.abs(translatex) == 1 && Math.abs(translatey) == 1)) {
      return true;
    }
    else {
      return false;
    }
  }
  else if (tile1.piece.header == "Pawn")
  {
    if(tile1.piece.moves > 1)
    {
      if (Math.abs(translatex) <= 1) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      if (Math.abs(translatex) <= 2) {
        return true;
      }
      else {
        return false;
      }
    }
  }
}

function movepiece(pos1,pos2)
{

  if(canPieceMove(pos1,pos2))
  {
    pos1.piece.moves += 1;
    var temppos1 = pos1.piece;
    pos1.addPiece(pos2.piece);
    pos2.addPiece(temppos1);
  }

}
