"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-01

      Project to create a drag and drop jigsaw puzzle
      Author: William Renard
      Date: 4/14/2024

      Filename: project10-01.js
*/

// Reference to the puzzle board
let puzzleBoard = document.getElementById("puzzleBoard");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
// Array of integers from 1 to 48
let intList = new Array(48);
// pointerX and pointerY will contain the initial coordinates of the pointerX
// pieceX and pieceY will contain the initial coordinates of a puzzle piece
let pointerX, pointerY, pieceX, pieceY;

// Sort the integers from 1 to 48 in random order
for (let i = 0; i < 48 ; i++) {
   intList[i] = i+1;
}
intList.sort(function() {
   return 0.5 - Math.random();
});

// generate randomly-sorted puzzle pieces
for (let i = 0; i < 48; i++) {
   let piece = document.createElement("img");
   piece.src = "piece" + intList[i] + ".png";
   let rowNum = Math.ceil((i+1)/8);
   let colNum = (i + 1) - (rowNum - 1)*8;
   piece.style.top = (rowNum - 1)*98 + 7 + "px";
   piece.style.left = (colNum - 1)*98 + 7 + "px";
   piece.draggable = false; // override the default draggability of images
   puzzleBoard.appendChild(piece);
}

// Node list representing the puzzle pieces
let pieces = document.querySelectorAll("div#puzzleBoard img");

for(let i = 0; i < 48; i++) { // add event listener for each piece.
  pieces[i].addEventListener("pointerdown", grabPiece);
}

function grabPiece(object) {
  pointerX = object.clientX; // this is where we set the pointerX and Y to that of the event objects clientX and clientY
  pointerY = object.clientY;
  object.target.style.touchAction = "none"; // set the touchAction style to none
  zCounter++; // increase the zCounter
  object.target.style.zIndex = zCounter; // set the zIndex to that of the zCounter variable.
  pieceX = object.target.offsetLeft;
  pieceY = object.target.offsetTop;
  object.target.addEventListener("pointermove", movePiece); // add event listener for moving
}

function movePiece(object) { // each time the pointer moves, this function will be ran so these calculations happen constantly
  object.target.addEventListener("pointerup", dropPiece); // add event listener for dropping
  let diffX = object.clientX - pointerX; // setup the difference between the objects position and the mouse position
  let diffY = object.clientY - pointerY;
  object.target.style.left = pieceX + diffX + "px"; // update the positions by manipulating the event objects style.
  object.target.style.top = pieceY + diffY + "px";
}

function dropPiece(object) { // this is where we remove the event listeners for the pieces when it gets dropped.
  object.target.removeEventListener("pointerdown", grabPiece);
  object.target.removeEventListener("pointermove", movePiece);
}
