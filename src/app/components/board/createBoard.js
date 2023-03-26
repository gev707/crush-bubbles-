class Board {
    constructor(colors) {
        this.colors = colors
        this.width = 8;
        this.circules = [];
    }

    createBoard() {
        for (let i = 0; i < this.width * this.width; i++) {
            const circule = document.createElement('div');
            circule.setAttribute('draggable', true);
            circule.setAttribute('id', i);
            circule.style.transition = '0.4s';
            let randomColor = Math.floor(Math.random() * this.colors.length);
            circule.style.backgroundColor = this.colors[randomColor]
            document.getElementById('board').appendChild(circule)
            this.circules.push(circule)
        }
    }
}

export { Board }