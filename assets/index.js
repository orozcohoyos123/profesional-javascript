import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const button_play = document.getElementById("btnPlay");
const button_mute = document.getElementById("btnMute");

const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause()
    ]
});
button_play.onclick = () => player.togglePlay();
button_mute.onclick = () => player.toggleMute();


/*  if('serviceWorker' in navigator){ //es un tipo de cache offline
    navigator.serviceWorker.register('../sw.js')
        .catch(err => console.log(err.message))
}  */
 // no sirve con parcel, no se por que