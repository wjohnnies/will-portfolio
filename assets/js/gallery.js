const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.getElementById("lightbox-close");
const prevButton = document.getElementById("lightbox-prev");
const nextButton = document.getElementById("lightbox-next");

const galleryImages = document.querySelectorAll(".gallery-item img");

let currentIndex = 0;

// Open lightbox
galleryImages.forEach((image, index) => {

    image.addEventListener("click", () => {

        currentIndex = index;
        showImage();

        lightbox.classList.add("active");

    });

});

// Display current image
function showImage() {

    lightboxImage.style.opacity = "0";
    lightboxImage.style.transform = "scale(.98)";

    setTimeout(() => {

        lightboxImage.src = galleryImages[currentIndex].src;
        lightboxImage.alt = galleryImages[currentIndex].alt;

        requestAnimationFrame(() => {

            lightboxImage.style.opacity = "1";
            lightboxImage.style.transform = "scale(1)";

        });

    }, 100);

}

// Next image
function nextImage() {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {
        currentIndex = 0;
    }

    showImage();

}

// Previous image
function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = galleryImages.length - 1;
    }

    showImage();

}

// Close button
closeButton.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

// Click outside image
lightbox.addEventListener("click", (event) => {

    if (event.target === lightbox) {

        lightbox.classList.remove("active");

    }

});

// Arrow buttons
nextButton.addEventListener("click", (event) => {

    event.stopPropagation();
    nextImage();

});

prevButton.addEventListener("click", (event) => {

    event.stopPropagation();
    previousImage();

});

// Keyboard controls
document.addEventListener("keydown", (event) => {

    if (!lightbox.classList.contains("active"))
        return;

    if (event.key === "Escape") {

        lightbox.classList.remove("active");

    }

    if (event.key === "ArrowRight") {

        nextImage();

    }

    if (event.key === "ArrowLeft") {

        previousImage();

    }

});
