//image array
const imagesArray = [
    './images/arm-removebg-preview.png',
    './images/brain-removebg-preview.png',
    './images/eye-removebg-preview.png',
];

const phoneItems = document.getElementById('phoneItems');
let currentIndex = 0;

phoneItems.addEventListener('mousedown', function () {
    const currentImage = imagesArray[currentIndex];
    phoneItems.style.backgroundImage = `url('${currentImage}')`;

    currentIndex = (currentIndex + 1) % imagesArray.length; // Move to the next image index

    const removeImage = () => {
        phoneItems.style.backgroundImage = 'none';
        document.removeEventListener('mouseup', removeImage);
    };

    document.addEventListener('mouseup', removeImage);
});





//call function



