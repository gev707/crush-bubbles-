import { startGame } from "../../app";

const notification = document.querySelector('.notification');
const btn = document.querySelector('.btn');
const title = document.querySelector('.notification-title')

const showNotification = (variant) => {
    notification.style.display = 'block';

    if (variant === 'start') {
        title.innerHTML = 'Start new game!'
        btn.innerHTML = `Start`
    }

    if(variant === 'timeEnd') {
        title.innerHTML = 'Time is end'
        btn.innerHTML = `Start Now`
    }

    if(variant === 'pause') {
        title.innerHTML = 'Time is stoped'
        btn.innerHTML = `Continue`
    }
    

    btn.addEventListener('click', () => {
        notification.style.display = 'none';
    })
}

export { showNotification };