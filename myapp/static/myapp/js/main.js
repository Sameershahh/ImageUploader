// Open image in fullscreen
function open_fullscreen(imageUrl) {
    const fullscreenDiv = document.getElementById('dv_fullscreen');
    const fullscreenImg = document.getElementById('image_fullscreen');
    fullscreenImg.src = imageUrl;
    fullscreenDiv.style.display = 'flex';
}

// Close fullscreen viewer
function close_fullscreen() {
    const fullscreenDiv = document.getElementById('dv_fullscreen');
    fullscreenDiv.style.display = 'none';
}

// Add image preview
function addPic(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imgBasket = document.querySelector('.img-basket');
            const img = document.createElement('img');
            img.src = e.target.result;
            img.onclick = () => open_fullscreen(e.target.result);
            imgBasket.appendChild(img);
        };
        reader.readAsDataURL(input.files[0]);
    }
}