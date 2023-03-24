const timer = document.getElementById("timer");
const pauseBtn = document.querySelector('.pause');
const continueBtn = document.querySelector('.continue');
let sec = 90;
let interval;

continueBtn.addEventListener('click', displayCountdownStart);

pauseBtn.addEventListener('click', function(){
    continueBtn.disabled = false;
    pauseBtn.disabled = true;
    clearInterval(interval)
});

function displayCountdownStart() {
    pauseBtn.disabled = false;
    continueBtn.disabled = true;
    clearInterval(interval)
    interval = setInterval(() => {
        timer.innerHTML = sec--;
        if(sec === -1) {
            clearInterval(interval);
        }
    }, 1000);
}

export { displayCountdownStart }