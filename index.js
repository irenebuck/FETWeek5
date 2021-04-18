// p1 and p2 are players 1 and 2 respectively, users decide who goes first

var p1 = 'X';
var p2 = 'O';

let startBtn = $('#startBtn');
let xbtn = $('#xbtn');
let obtn = $('#obtn');
let choice = '';
let cells = []

//currentBoard collects data for the cell that has something in it's empty <p> element
//boardWin holds all possible ways to win
let currentBoard = [''];
let boardWin = [''];  //need to put all winning scenarios here


//Start a new game

startBtn.addEventListener('click', () => {
    currentBoard.empty();
    boardWin.empty();
})


//player makes selection

xBtn.addEventListener('click', () => {
    xBtn.prepend('<p> X </p>');
})

oBtn.addEventListener('click', () => {
    oBtn.prepend('<p> O </p>');
})

    
//run checkForWinner after each board click

function checkForWinner() {
    for (i=0; i<currentBoard.length; i++) {

    }
}


//announce winner

<h2></h2>