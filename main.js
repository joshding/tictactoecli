
var prompt = require('prompt-sync')();
//
// get input from the user.
//


var board = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "]
];

var startingBoard = function() {
  console.log("          1   2   3  ");
  console.log("        -------------");
  console.log("      1 | " + board[0][0] + " | " + board[0][1] + " | " + board[0][2] + " |");
  console.log("        -------------");
  console.log("      2 | " + board[1][0] + " | " + board[1][1] + " | " + board[1][2] + " |");
  console.log("        -------------");
  console.log("      3 | " + board[2][0] + " | " + board[2][1] + " | " + board[2][2] + " |");
  console.log("        -------------");
  console.log("                                         ");
  console.log("- - - - - - - - - - - - - - - - - - - - - - -");
  console.log("                                         ");
};
startingBoard();

var n = prompt('Player 1: ');
