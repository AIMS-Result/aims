document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementsByClassName('close')[0];
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const numPhotos = 30;
    let currentIndex = 0;
    const images = [];

    for (let i = 0; i < numPhotos; i++) {
        const img = document.createElement('img');
        img.src = `gallery/img${i}.jpeg`;
        img.alt = `Photo ${i + 1}`;
        img.className = 'photo';
        img.style.animationDelay = `${i * 0.1}s`;
        img.addEventListener('click', function() {
            currentIndex = i;
            showModal();
        });
        gallery.appendChild(img);
        images.push(img);
    }

    function showModal() {
        modal.style.display = 'block';
        modalImg.src = images[currentIndex].src;
        updateButtons();
    }

    function updateButtons() {
        prevBtn.style.display = currentIndex === 0 ? 'none' : 'block';
        nextBtn.style.display = currentIndex === numPhotos - 1 ? 'none' : 'block';
    }

    // Close modal when clicking on close button
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Close modal when clicking outside the image
    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }

    // Previous button
    prevBtn.onclick = function() {
        if (currentIndex > 0) {
            currentIndex--;
            showModal();
        }
    }

    // Next button
    nextBtn.onclick = function() {
        if (currentIndex < numPhotos - 1) {
            currentIndex++;
            showModal();
        }
    }
});
