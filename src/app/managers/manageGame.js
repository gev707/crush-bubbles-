import { showScore, colors, getShapesForSuperBuster, getShapesFour, getShapesTree } from "../constants";

let score = 0;

// match colors in row 3

function crushTreeRow(arr) {
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
        if (getShapesTree.includes(i)) continue;

        if (row.every(index => arr[index].style.backgroundColor === matchColors && !isEmpty)) {
            row.forEach(index => arr[index].style.backgroundColor = '');
            score += 3;
            showScore.innerHTML = score
        }
    }

}

// match colors in row 4

function crushFourRow(arr) {
    for (let i = 0; i < 60; i++) {
        let rowFour = [i, i + 1, i + 2, i + 3];
        let matchColors = arr[i].style.backgroundColor;
        let isEmpty = arr[i].style.backgroundColor === '';
        if (getShapesFour.includes(i)) continue;

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

function crushTreeCol(arr, width) {
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

function crushFourCol(arr, width) {
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
    const superBuster = arr.filter(item => item.style.backgroundColor === 'black');
    if (superBuster.length) {
        for (let i = 0; i < superBuster.length; i++) {
            if (getShapesForSuperBuster.includes(i)) continue;
            superBuster[i].addEventListener('click', () => {
                for (let i = 0; i < 48; i++) {
                    arr[i + 6].style.backgroundColor = '';
                }
                score += 5;
                showScore.innerHTML = score;
                superBuster[i].style.backgroundColor = ''
            })

        }
    }
}

export {
    crushTreeRow,
    crushTreeCol,
    crushFourCol,
    crushFourRow,
    slideDown,
    superTale
}