var myVideo = document.getElementById('myVideo');

// Listen for mouse enter on the video
myVideo.addEventListener('mouseenter', () => {
    myVideo.muted = false; // Unmute the video
    myVideo.play(); // Play the video if not already playing
});

// Optional: Mute the video again when mouse leaves the video area
myVideo.addEventListener('mouseleave', () => {
    myVideo.pause(); // Pause the video
    myVideo.muted = true; // Mute the video
});
