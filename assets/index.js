import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "../plugins/AutoPlay.js";

const video = document.querySelector("video");
const button_play = document.getElementById("btnPlay");
const button_mute = document.getElementById("btnMute");

const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay()
    ]
});
button_play.onclick = () => player.togglePlay();
button_mute.onclick = () => player.toggleMute();
