const containerPlayer = document.querySelector(".container-player");
const playerVideo = containerPlayer.querySelector("video");
const progressBar = containerPlayer.querySelector(".progress-bar");
const volumeBtn = containerPlayer.querySelector(".volume i");
const skipBacward = containerPlayer.querySelector(".skip-backward i");
const skipForward = containerPlayer.querySelector(".skip-forward i");
const playPauseBtn = containerPlayer.querySelector(".play-pause i");

playerVideo.addEventListener("timeupdate", (e) => {
    let { currentTime, duration } = e.target;
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`;
});

volumeBtn.addEventListener("click", () => {
    if(!volumeBtn.classList.contains("fa-volume-high")) {
        playerVideo.volume = 0.5;
        volumeBtn.classList.replace("fa-volume-xmark", "fa-volume-high");
    } else {
        playerVideo.volume = 0.0;
        volumeBtn.classList.replace("fa-volume-high", "fa-volume-xmark");
    }
});

skipBacward.addEventListener("click", () => {
    playerVideo.currentTime -= 5;
})

skipForward.addEventListener("click", () => {
    playerVideo.currentTime += 5;
})


playPauseBtn.addEventListener("click", () => {
   playerVideo.paused ? playerVideo.play() : playerVideo.pause();
});

playerVideo.addEventListener("play", () => {
    playPauseBtn.classList.replace("fa-play", "fa-pause");
});

playerVideo.addEventListener("pause", () => {
    playPauseBtn.classList.replace("fa-pause", "fa-play");
});

