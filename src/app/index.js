import { colors, showMoves, showScore } from './constants';
import { Board, displayCountdownStart, showNotification } from "./components";
import {
    forColumnFour,
    forColumnTree,
    forRowFour,
    forRowTree,
    slideDown,
    superTale
} from './managers';

const board = new Board(colors);
const width = board.width;
const taleBoard = board.circules;


let moves = 20;
let winnerScore = 100;

function startGame() {
    board.createBoard();
    displayCountdownStart();

    taleBoard.forEach((items) => items.addEventListener('dragstart', dragStart))
    taleBoard.forEach((items) => items.addEventListener('dragover', dragOver))
    taleBoard.forEach((items) => items.addEventListener('dragenter', dragEnter))
    taleBoard.forEach((items) => items.addEventListener('dragleave', dragLeave))
    taleBoard.forEach((items) => items.addEventListener('dragend', dragEnd))
    taleBoard.forEach((items) => items.addEventListener('drop', dragDrop));
}

// create drag & drop functional

let currentTale;
let otherTale;
let currentTaleID;
let otherTaleID;

function dragEnter(e) { e.preventDefault() }
function dragLeave(e) { e.preventDefault() }
function dragOver(e) { e.preventDefault() }

function dragStart() {
    currentTale = this.style.backgroundColor;
    currentTaleID = parseInt(this.id);
}
function dragDrop() {
    otherTale = this.style.backgroundColor;
    otherTaleID = parseInt(this.id);
    this.style.backgroundColor = currentTale;
    taleBoard[currentTaleID].style.backgroundColor = otherTale;
}

function dragEnd() {
    const availibleMoves = [
        currentTaleID - 1,
        currentTaleID + 1,
        currentTaleID - width,
        currentTaleID + width
    ]
    let availible = availibleMoves.includes(otherTaleID);

    if (otherTaleID && availible) {
        otherTaleID = null;
    }
    else if (otherTaleID && !availible) {
        taleBoard[otherTaleID].style.backgroundColor = otherTale;
        taleBoard[currentTaleID].style.backgroundColor = currentTale;
    }
    else {
        taleBoard[currentTaleID].style.backgroundColor = currentTale;
    }
    moves -= 1;
    showMoves.innerHTML = moves;
    if (moves === 0) showNotification('over');
}

function win() {
    const show = Number(showScore.innerHTML)
    if (show > winnerScore) showNotification('win');
}

window.setInterval(() => {
    forRowFour(taleBoard);
    forColumnFour(taleBoard, width)
    forRowTree(taleBoard);
    forColumnTree(taleBoard, width)
    slideDown(taleBoard, width)
    superTale(taleBoard)
    win();
}, 100)


export { startGame }