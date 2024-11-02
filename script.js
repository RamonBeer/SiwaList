window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 20) {
        document.body.style.background = 'linear-gradient(to right, black, #8b0000)';
    } else if (scrollPosition <40) {
        document.body.style.background = 'linear-gradient(to right, #8b0000, #4b0082';
    } else if (scrollPosition < 60) {
        document.body.style.background = 'linear-gradient(to right, #4b0082, #00008b';
    } else {
        document.body.style.background = 'linear-gradient(to right, #00008b, #ffd700)';
    }
});