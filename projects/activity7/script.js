var swapMedia = document.getElementById("swapMedia");
function showVideo() {
    if (!document.getElementById("trailer")) {
        swapMedia.innerHTML = `<div style="position: relative; width: 100%; height: auto;">
                <video id="trailer" style="object-fit: cover; width: 100%; height: auto;" loop autoplay muted>
                    <source src="media/bg-s1.mp4" type="video/mp4">
                </video>
                <button class="btn rounded-5" id="unmuteButton" style="position: absolute; top: 20px; left: 20px; z-index: 10; background: #6096BA; padding: 5px; cursor: pointer;">
                    Unmute
                </button>
            </div>`;

        document.getElementById("unmuteButton").addEventListener("click", function () {
            var video = document.getElementById("trailer");
            if (video) {
                video.muted = false;
                this.style.display = 'none';
            }
        });
    }
}

function showImage() {
    if (document.getElementById("trailer")) {
        swapMedia.innerHTML = `<img src="media/bg.jpg" alt="Background Image" style="width: 100%; height: auto;">`;
    }
}

swapMedia.addEventListener("mouseover", showVideo);
swapMedia.addEventListener("mouseleave", showImage);