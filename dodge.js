
document.addEventListener('DOMContentLoaded', () => {
    const buyButtons = document.querySelectorAll('.value');

    buyButtons.forEach((button,index) => {
        button.addEventListener('click', () => {
            alert(`Button ${index + 1} clicked!`);
        });
    });
});