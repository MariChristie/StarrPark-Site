const containerPlayer = document.querySelector(".container-player");
const playerVideo = containerPlayer.querySelector("video");
const playPauseBtn = containerPlayer.querySelector(".play-pause i");

playPauseBtn.addEventListener("click", () => {
   playerVideo.paused ? playerVideo.play() : playerVideo.pause();
});


