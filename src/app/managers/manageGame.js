import { showScore, colors } from "../constants";

let score = 0;

// match colors in row 3

function forRowTree(arr) {
    for (let i = 0; i < 61; i++) {
        let row = [i, i + 1, i + 2];
        let matchColors = arr[i].style.backgroundColor;
        let isEmpty = arr[i].style.backgroundColor === '';
        if (isEmpty) {
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow = firstRow.includes(i);
            if (isFirstRow && isEmpty) {
                let randomColor = Math.floor(Math.random() * colors.length);
                arr[i].style.backgroundColor = colors[randomColor]
            }
        }
        let getShapes = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
        if (getShapes.includes(i)) continue;

        if (row.every(index => arr[index].style.backgroundColor === matchColors && !isEmpty)) {
            row.forEach(index => arr[index].style.backgroundColor = '');
            score += 3;
            showScore.innerHTML = score
        }
    }

}

// match colors in row 4

function forRowFour(arr) {
    for (let i = 0; i < 60; i++) {
        let rowFour = [i, i + 1, i + 2, i + 3];
        let matchColors = arr[i].style.backgroundColor;
        let isEmpty = arr[i].style.backgroundColor === '';
        let getShapes = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55];
        if (getShapes.includes(i)) continue;

        if (rowFour.every(index => arr[index].style.backgroundColor === matchColors && !isEmpty)) {
            rowFour.forEach(index => {
                arr[index].style.backgroundColor = 'black';
            });
            score += 4;
            showScore.innerHTML = score
        }
    }

}

// // match colors in column 3

function forColumnTree(arr, width) {
    for (let i = 0; i < 47; i++) {
        let column = [i, i + width, i + width * 2];
        let matchColors = arr[i].style.backgroundColor;
        let isEmpty = arr[i].style.backgroundColor === '';
        if (column.every(index => arr[index].style.backgroundColor === matchColors && !isEmpty)) {
            column.forEach(index => arr[index].style.backgroundColor = '');
            score += 3;
            showScore.innerHTML = score
        }
    }
}

// // match colors in column 4

function forColumnFour(arr, width) {
    for (let i = 0; i < 39; i++) {
        let columnFour = [i, i + width, i + width * 2, i + width * 3];
        let matchColors = arr[i].style.backgroundColor;
        let isEmpty = arr[i].style.backgroundColor === '';
        if (columnFour.every(index => arr[index].style.backgroundColor === matchColors && !isEmpty)) {
            columnFour.forEach(index => {
                arr[index].style.backgroundColor = 'black';
            });
            score += 4;
            showScore.innerHTML = score
        }
    }

}

function slideDown(arr, width) {
    for (let i = 0; i < 55; i++) {
        if (arr[i + width].style.backgroundColor === '') {
            arr[i + width].style.backgroundColor = arr[i].style.backgroundColor;
            arr[i].style.backgroundColor = '';
            let isEmpty = arr[i].style.backgroundColor === '';
            const firstRow = [0, 1, 2, 3, 4, 5, 6, 7];
            const isFirstRow = firstRow.includes(i);
            if (isFirstRow && isEmpty) {
                let randomColor = Math.floor(Math.random() * colors.length);
                arr[i].style.backgroundColor = colors[randomColor]
            }
        }
    }
}

function superTale(arr) {
    for (let i = 0; i < 60; i++) {
        let superBuster = arr[i].style.backgroundColor === 'black';
        let isEmpty = arr[i].style.backgroundColor === '';
        let getShapes = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55];
        if (getShapes.includes(i)) continue;

        if (superBuster && !isEmpty) {
                arr[i - 3].style.backgroundColor = '';
                arr[i - 2].style.backgroundColor = '';
                arr[i - 1].style.backgroundColor = '';
                arr[i].style.backgroundColor = '';
                arr[i + 1].style.backgroundColor = '';
                arr[i + 2].style.backgroundColor = '';
                arr[i + 3].style.backgroundColor = ''
            score += 7;
            showScore.innerHTML = score
        }
    }
}
export {
    forRowTree,
    forColumnTree,
    forColumnFour,
    forRowFour,
    slideDown,
    superTale
}