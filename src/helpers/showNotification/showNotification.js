const notification = document.querySelector('.notification');
const btn = document.querySelector('.btn');
const title = document.querySelector('.notification-title')

const showNotification = (variant) => {
    notification.style.display = 'block';

    if (variant === 'start') {
        title.innerHTML = 'Start new game!'
        btn.innerHTML = `Start`
    }
    btn.addEventListener('click', () => {
        notification.style.display = 'none';
    })
}

export { showNotification };