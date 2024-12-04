// Video Modal
const videoModal = document.getElementById('videoModal');
const videoIframe = document.getElementById('videoIframe');

videoModal.addEventListener('hidden.bs.modal', function () {

    videoIframe.src = videoIframe.src;
});



// Show or hide the Back to Top button

const backToTopButton = document.querySelector('.backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



const btns = document.querySelectorAll(".galleryBtn");
for (let b = 0; b < btns.length; b++) {
    btns[b].addEventListener("click", (e) => {
        // button activation
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("btnActive");
        }
        e.target.classList.add("btnActive");
        
        // hide/show photos
        const activeBtnCategory = e.target.getAttribute("data-category");
        const photos = document.querySelectorAll(".photos");
        if (activeBtnCategory === "allCats") {
            for (let photo = 0; photo < photos.length; photo++) {
                photos[photo].style.display = "block";
            }
        } else {
            for (let photo = 0; photo < photos.length; photo++) {
                if (photos[photo].classList.contains(activeBtnCategory)) {
                    photos[photo].style.display = "block";
                } else {
                    photos[photo].style.display = "none";
                }
            }
        }
    });
}
