const overlay = document.querySelector('.overlay');
const modalCloseButton = document.querySelector('.modal-close');

const handleCloseModal = () => {
    overlay.classList.remove('active');
    modalCloseButton.removeEventListener('click', handleCloseModal);
}

document.body.addEventListener('click', (event) => {
    if (!event.target.closest('.goods-item-button')) {
        return;
    }

    if (overlay.classList.contains('active')) {
        return;
    }

    overlay.classList.add('active');
    modalCloseButton.addEventListener('click', handleCloseModal);
});