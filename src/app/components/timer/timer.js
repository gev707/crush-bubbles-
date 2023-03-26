import { showNotification } from "../notification/notification";
import { pauseBtn,continueBtn,timer, board } from "../../constants";
let interval;
let sec = 90

continueBtn.addEventListener('click',displayCountdownStart);

pauseBtn.addEventListener('click', function(){
    continueBtn.disabled = false;
    pauseBtn.disabled = true;
    board.style.width = 0;
    clearInterval(interval)
});

function displayCountdownStart() {
    pauseBtn.disabled = false;
    continueBtn.disabled = true;
    board.style.width = 455 + 'px';
    clearInterval(interval)
    interval = setInterval(() => {
        timer.innerHTML = sec--;
        if(sec === -1) clearInterval(interval);
        if(sec === 0) showNotification('timeEnd');
    }, 1000);
}

export { displayCountdownStart }