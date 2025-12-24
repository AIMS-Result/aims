document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const images = document.querySelectorAll('.slider img');
    let currentIndex = 0;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateSlider();
    });

    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    });

    // Optional: Auto-slide every 3 seconds
    setInterval(function() {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateSlider();
    }, 3000);
});
