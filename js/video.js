const containerPlayer = document.querySelector(".container-player");
const playerVideo = containerPlayer.querySelector("video");
const progressBar = containerPlayer.querySelector(".progress-bar");
const videoTimeline = containerPlayer.querySelector(".video-timeline");
const volumeBtn = containerPlayer.querySelector(".volume i");
const volumeSlider = containerPlayer.querySelector(".volume-slider");
const skipBacward = containerPlayer.querySelector(".skip-backward i");
const skipForward = containerPlayer.querySelector(".skip-forward i");
const playPauseBtn = containerPlayer.querySelector(".play-pause i");
const speedBtn = containerPlayer.querySelector(".playback-speed span");
const speedOptions = containerPlayer.querySelector(".speed-options");
const picInPicBtn = containerPlayer.querySelector(".pic-in-pic");
const fullscreenBtn = containerPlayer.querySelector(".fullscreen i");

playerVideo.addEventListener("timeupdate", (e) => {
    let { currentTime, duration } = e.target;
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`;
});

videoTimeline.addEventListener("click", e => {
    let timelineWidth = e.target.clientWidth;
    playerVideo.currentTime = (e.offsetX / timelineWidth) * playerVideo.duration;
});

volumeBtn.addEventListener("click", () => {
    if(!volumeBtn.classList.contains("fa-volume-high")) {
        playerVideo.volume = 0.5;
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    } else {
        playerVideo.volume = 0.0;
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
    volumeSlider.value = playerVideo.volume;
});

volumeSlider.addEventListener("input", e => {
    playerVideo.volume = e.target.value;
    if(e.target.value === 0) {
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    } else {
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    }
});

speedBtn.addEventListener("click", () => {
    speedOptions.classList.toggle("show");
});

speedOptions.querySelectorAll("li").forEach(options => {
    options.addEventListener("click", () => {
        playerVideo.playbackRate = options.dataset.speed;
        speedOptions.querySelector(".active").classList.remove("active");
        options.classList.add("active");
    });
});

document.addEventListener("click", e => {
    if(e.target.tagName !== "SPAN" || e.target.className !== "material-symbols-rounded") {
        speedOptions.classList.remove("show");
    }
});

picInPicBtn.addEventListener("click", () => {
    playerVideo.requestPictureInPicture();
});

fullscreenBtn.addEventListener("click", () => {
    containerPlayer.classList.toggle("fullscreen");
    if(document.fullscreenElement) {
        fullscreenBtn.classList.replace("fa-compress", "fa-expand");
        return document.exitFullscreen();
    }
    fullscreenBtn.classList.replace("fa-expand", "fa-compress");
    containerPlayer.requestFullscreen();
});

skipBacward.addEventListener("click", () => {
    playerVideo.currentTime -= 5;
});

skipForward.addEventListener("click", () => {
    playerVideo.currentTime += 5;
});

playPauseBtn.addEventListener("click", () => {
   playerVideo.paused ? playerVideo.play() : playerVideo.pause();
});

playerVideo.addEventListener("play", () => {
    playPauseBtn.classList.replace("fa-play", "fa-pause");
});

playerVideo.addEventListener("pause", () => {
    playPauseBtn.classList.replace("fa-pause", "fa-play");
});

