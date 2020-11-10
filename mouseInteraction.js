function mouseClicked() {
  console.log(mouseX,mouseY);
  tileX = Math.floor(mouseX / squareSize)
  tileY = Math.floor(mouseY / squareSize)

  tileClicked = 8 *(tileY) + tileX + 1;

  board[tileClicked-1].activate();

}
