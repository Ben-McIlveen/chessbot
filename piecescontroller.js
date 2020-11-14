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

    board[i].addPiece(new Piece(pieces[firstRow[i]],"black"));
  }
  for (var j = 16; j < 48; j++) {

    board[j].addPiece(new Piece(pieces[center[j-16]],"empty"));
  }
  for (var k = 48; k < 64; k++) {

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
function indexToCood(index)
{
  if(index == 63)
  {
    return {"x":8,"y":8};
  }
  else {
    return {"x":((index+1) - (Math.floor((index+1)/ 8) * 8)) + 1 ,"y":Math.floor((index+1)/ 8) + 1 };
  }

}

function smaller(one,two)
{
  if(one > two)
  {
    return two;
  }
  else if(two > one)
  {
    return one;
  }
  else {
    return one;
  }
}

function raycast(tile)
{
  var indexOfPiece = board.indexOf(tile);
  var correction;


  var top = [];
  for (var i = 1; i <= tile.tilePos.y - 1; i++) {
    top.push(board[indexOfPiece-(i*8)]);
  }

  var bot = [];
  for (var i = 1; i <= 8 - tile.tilePos.y; i++) {
    bot.push(board[indexOfPiece+(i*8)]);
  }

  var left = [];
  for (var i = 1; i <= tile.tilePos.x - 1; i++) {
    left.push(board[indexOfPiece-i]);
  }

  var right = [];
  for (var i = 1; i <= 8 - tile.tilePos.x; i++) {
    right.push(board[indexOfPiece+i]);
  }

  var topleft = [];
  for (var i = 1; i <= smaller(tile.tilePos.x - 1, tile.tilePos.y - 1); i++) {
    topleft.push(board[indexOfPiece-(i*8)-i]);
  }

  var topright = [];
  for (var i = 1; i <= smaller(8 -tile.tilePos.x, tile.tilePos.y - 1); i++) {
    topright.push(board[indexOfPiece-(i*8)+i]);
  }

  var botleft = [];
  for (var i = 1; i <= smaller(tile.tilePos.x - 1, 8 - tile.tilePos.y); i++) {
    botleft.push(board[indexOfPiece-(i*8)-i]);
  }

  var botright = [];
  for (var i = 1; i <= smaller(8 -tile.tilePos.x, 8 - tile.tilePos.y); i++) {
    botright.push(board[indexOfPiece-(i*8)+i]);
  }



  return {"top":top,"bot":bot, "left":left, "right":right, "topleft":topleft, "topright":topright, "botleft":botleft, "botright":botright};
}

function possibleMoves(tile1)
{
  if(tile1.piece.header == "")
  {
    return false;
  }

  var possibles = [];
  var takes = [];
  console.log(translatex,translatey);
  if(tile1.piece.header == "Castle")
  {

  }
  else if (tile1.piece.header == "Knight")
  {

  }
  else if (tile1.piece.header == "Bishop")
  {

  }
  else if (tile1.piece.header == "Queen")
  {

  }
  else if (tile1.piece.header == "King")
  {

  }
  else if (tile1.piece.header == "Pawn")
  {

  }

  return {"possibles":possibles,"takes":takes};
}

function movepiece(pos1,pos2)
{

  if(canPieceMove(pos1,pos2))
  {
    if (pos1.piece.side != pos2.piece.side) {
      pos1.piece.moves += 1;
      var temppos1 = pos1.piece;
      pos1.addPiece(pos2.piece);
      pos2.addPiece(temppos1);
    }
  }

}
