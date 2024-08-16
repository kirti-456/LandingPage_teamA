function openVideo() {
    document.getElementById('videoOverlay').style.display = 'flex';
    document.getElementById('youtubeVideo').src = 'https://www.youtube.com/embed/6NC_ODHu5jg?autoplay=1&controls=0'; // Replace with your YouTube video ID
}

function closeVideo() {
    document.getElementById('videoOverlay').style.display = 'none';
    document.getElementById('youtubeVideo').src = ''; // Stop the video
}
window.onscroll = function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
