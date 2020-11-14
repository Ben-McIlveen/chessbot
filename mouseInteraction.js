function mouseClicked() {

  if(mouseX >= 0 && mouseY >= 0 && mouseX <= canvasSize && mouseY <= canvasSize)
  {
    tileX = Math.floor(mouseX / squareSize)
    tileY = Math.floor(mouseY / squareSize)

    tileClicked = 8 *(tileY) + tileX + 1;

    board[tileClicked-1].activate();
  }

}
