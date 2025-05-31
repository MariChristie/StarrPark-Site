const containerPlayer = document.querySelector(".container-player");
const playerVideo = containerPlayer.querySelector("video");
const progressBar = containerPlayer.querySelector(".progress-bar");
const playPauseBtn = containerPlayer.querySelector(".play-pause i");

playerVideo.addEventListener("timeupdate", (e) => {
    let { currentTime, duration } = e.target;
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`;

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

