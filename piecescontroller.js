// Pieces:
// 1 - Castle
// 2 - Knight
// 3 - Bishop
// 4 - Queen
// 5 - King
// 6 - Pawn

var defaultRow = [1,2,3,4,5,3,2,1]
var defaultPawnRow = [6,6,6,6,6,6,6,6]

var pieces = {
  1: "Castle",
  2: "Knight",
  3: "Bishop",
  4: "Queen",
  5: "King",
  6: "Pawn",
}


class Piece
{
  constructor(header)
  {
    this.header = header;
  }
}

function populateBoard()
{
  console.log("Populating Board");
  for (var i = 0; i < 8; i++) {
    board[i].addPiece(new Piece(pieces[defaultRow[i]]));
  }
  for (var i = 0; i < 8; i++) {
    board[i+8].addPiece(new Piece(pieces[defaultPawnRow[i]]));
  }
  for (var i = 0; i < 8; i++) {
    board[i+48].addPiece(new Piece(pieces[defaultPawnRow[i]]));
  }
  for (var i = 0; i < 8; i++) {
    board[i+56].addPiece(new Piece(pieces[defaultRow[i]]));
  }
}

function movepiece(pos1,pos2)
{
  pos2.piece.addPiece(pos1.piece);
  pos1.piece.removePiece():
}
