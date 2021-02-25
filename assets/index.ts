import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from './plugins/Ads'

const video :HTMLMediaElement = document.querySelector("video");
const button_play :HTMLElement = document.getElementById("btnPlay");
const button_mute :HTMLElement = document.getElementById("btnMute");

const player = new MediaPlayer({ 
    el: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause(),
        new Ads()
    ]
});
button_play.onclick = () => player.togglePlay();
button_mute.onclick = () => player.toggleMute();


/*  if('serviceWorker' in navigator){ //es un tipo de cache offline
    navigator.serviceWorker.register('../sw.js')
        .catch(err => console.log(err.message))
}  */
 // no sirve con parcel, no se por que