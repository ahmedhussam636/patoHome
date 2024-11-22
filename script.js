    // Video Modal
    const videoModal = document.getElementById('videoModal');
    const videoIframe = document.getElementById('videoIframe');

    videoModal.addEventListener('hidden.bs.modal', function () {

        videoIframe.src = videoIframe.src;
    });



    // Show or hide the Back to Top button

    const backToTopButton = document.querySelector('.backToTop'); 

    window.addEventListener('scroll', ( ) => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    



