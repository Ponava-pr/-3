let offset = 0;

const sliderRow = document.querySelector(".slider-row");
const sliderNext = document.querySelector(".slider-next");
const sliderPrev = document.querySelector(".slider-prev");

const imageWidth = 250;
const imageCount = 5;

sliderNext.addEventListener("click", function () {
    offset += imageWidth;

    if (offset > imageWidth * (imageCount - 1)) {
        offset = 0;
    }

    sliderRow.style.left = -offset + "px";
});

sliderPrev.addEventListener("click", function () {
    offset -= imageWidth;

    if (offset < 0) {
        offset = imageWidth * (imageCount - 1);
    }

    sliderRow.style.left = -offset + "px";
});

setInterval(function () {
    offset += imageWidth;

    if (offset > imageWidth * (imageCount - 1)) {
        offset = 0;
    }

    sliderRow.style.left = -offset + "px";

}, 3000);
