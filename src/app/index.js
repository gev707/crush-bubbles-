import {
    Board,
    displayCountdownStart,
    showNotification
} from "../helpers"
import { colors } from "./constant"
const board = new Board(colors);
const width = board.width;
const newCircules = board.circules;
let score = 0;
let count = 20;
let showScore = document.querySelector('.score');
let moves = document.querySelector('.moves');


function startGame() {
    // showNotification('start');
    // displayCountdownStart();
    board.createBoard();

    newCircules.forEach((items) => items.addEventListener('dragstart', dragStart))
    newCircules.forEach((items) => items.addEventListener('dragover', dragOver))
    newCircules.forEach((items) => items.addEventListener('dragenter', dragEnter))
    newCircules.forEach((items) => items.addEventListener('dragleave', dragLeave))
    newCircules.forEach((items) => items.addEventListener('dragend', dragEnd))
    newCircules.forEach((items) => items.addEventListener('drop', dragDrop));
}

// create drag & drop functional

let colorDragged;
let colorReplaced;
let colorIdDragged;
let colorIdReplaced;

function dragEnter(e) { e.preventDefault() }
function dragLeave(e) { e.preventDefault() }
function dragOver(e) { e.preventDefault() }

function dragStart() {
    colorDragged = this.style.backgroundColor;
    colorIdDragged = parseInt(this.id);
}
function dragDrop() {
    colorReplaced = this.style.backgroundColor;
    colorIdReplaced = parseInt(this.id);
    this.style.backgroundColor = colorDragged;
    newCircules[colorIdDragged].style.backgroundColor = colorReplaced
}

function dragEnd() {
    const availibleMoves = [
        colorIdDragged - 1,
        colorIdDragged + 1,
        colorIdDragged - width,
        colorIdDragged + width
    ]
    let availible = availibleMoves.includes(colorIdReplaced);

    if (colorIdReplaced && availible) {
        colorIdReplaced = null;
    }
    else if (colorIdReplaced && !availible) {
        newCircules[colorIdReplaced].style.backgroundColor = colorReplaced;
        newCircules[colorIdDragged].style.backgroundColor = colorDragged;
    }
    else {
        newCircules[colorIdDragged].style.backgroundColor = colorDragged
    }
    count -= 1;
    moves.innerHTML = count;
}

function forRowTree() {
    for (let i = 0; i < 61; i++) {
        let row = [i, i + 1, i + 2];
        let matchColors = newCircules[i].style.backgroundColor;
        let blank = newCircules[i].style.backgroundColor === '';

        let getShapes = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
        if (getShapes.includes(i)) continue;

        if (row.every(index => newCircules[index].style.backgroundColor === matchColors && !blank)) {
            row.forEach(index => newCircules[index].style.backgroundColor = '');
            score += 3;
            showScore.innerHTML = score
        }
    }

}
function forColumnTree() {
    for (let i = 0; i < 47; i++) {
        let column = [i, i + width, i + width * 2];
        let matchColors = newCircules[i].style.backgroundColor;
        let blank = newCircules[i].style.backgroundColor === '';
        if (column.every(index => newCircules[index].style.backgroundColor === matchColors && !blank)) {
            column.forEach(index => newCircules[index].style.backgroundColor = '');
            score += 3;
            showScore.innerHTML = score
        }
    }

}

function forRowFour() {
    for (let i = 0; i < 60; i++) {
        let row = [i, i + 1, i + 2, i + 3];
        let matchColors = newCircules[i].style.backgroundColor;
        let blank = newCircules[i].style.backgroundColor === '';

        let getShapes = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55];
        if (getShapes.includes(i)) continue;

        if (row.every(index => newCircules[index].style.backgroundColor === matchColors && !blank)) {
            row.forEach(index => newCircules[index].style.backgroundColor = '');
            score += 4;
            showScore.innerHTML = score
        }
    }

}
function forColumnFour() {
    for (let i = 0; i < 47; i++) {
        let column = [i, i + width, i + width * 2, i + width * 3, i + width * 5];
        let matchColors = newCircules[i].style.backgroundColor;
        let blank = newCircules[i].style.backgroundColor === '';
        if (column.every(index => newCircules[index].style.backgroundColor === matchColors && !blank)) {
            column.forEach(index => newCircules[index].style.backgroundColor = '');
            score += 4;
            showScore.innerHTML = score
        }
    }

}

function slideDown() {
    for (let i = 0; i < 55; i++) {
        if (newCircules[i + width].style.backgroundColor === '') {
            newCircules[i + width].style.backgroundColor = newCircules[i].style.backgroundColor;
            newCircules[i].style.backgroundColor = '';
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow = firstRow.includes(i);
            if (isFirstRow && newCircules[i].style.backgroundColor === '') {
                let randomColor = Math.floor(Math.random() * colors.length);
                newCircules[i].style.backgroundColor = colors[randomColor]
            }
        }

    }
}

window.setInterval(() => {
    slideDown()
    forRowTree();
    forColumnTree();
    forRowFour();
    forColumnFour()
}, 50)

export { startGame }