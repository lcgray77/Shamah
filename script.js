function navigateTo(page) {
    window.location.href = page;
}

document.querySelectorAll('.clickable-gif').forEach(gif => {
    gif.addEventListener('mouseover', () => {
        alert('Surf’s up, dude!');
    });
});
