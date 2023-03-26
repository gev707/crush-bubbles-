import { notification,btn,title } from "../../constants";

const showNotification = (variant) => {
    notification.style.display = 'block';
    switch (variant) {
        case 'timeEnd': {
            title.innerHTML = 'Time Over:You lose!'
            btn.innerHTML = `Start Now`;
            break;
        }
        case 'over': {
            title.innerHTML = 'Moves Over:You lose!'
            btn.innerHTML = `Start Now`;
            break;
        }
        case 'win': {
            title.innerHTML = 'You Win!'
            btn.innerHTML = `Start Now`;
            break;
        }
        default:
            break;
    }
    btn.addEventListener('click', () => {
        window.location.reload();
        notification.style.display = 'none';
    })
}

export { showNotification };