document.addEventListener('DOMContentLoaded', function () {
    const phoneImage = document.getElementById('phoneImage');
    window.addEventListener('scroll', function() {
        let scroll = window.scrollY;
        let rotation = scroll / 5; // Adjust the divisor for faster or slower rotation
        phoneImage.style.transform = `rotate(${rotation}deg)`;
    });
});
