document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.querySelector('#carouselExampleIndicators');

    if (!carouselElement || !window.bootstrap?.Carousel) {
        return;
    }

    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
        interval: 5000,
        ride: 'carousel',
        touch: true,
        pause: 'hover',
        wrap: true
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') carousel.prev();
        if (event.key === 'ArrowRight') carousel.next();
    });
});
