const imgContent = document.querySelectorAll('0);

function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
        imgContent[i].style.left = e.pageX + 'px';
        imgContent[i].style.top = e.pageY + 'px';
    }
};

document.addEventListener('mousemove', showImgContent);