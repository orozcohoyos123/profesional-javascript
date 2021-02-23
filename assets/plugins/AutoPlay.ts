import MediaPlayer from "../MediaPlayer"

class AutoPlay{

    constructor() {}

    run = function(player: MediaPlayer){
        if (!player.media.muted) {
            player.media.muted = true         
        }
        player.play()// solo funciona si el video está sileciado, no se puede iniciar autoplay si es lo contrario
    }
}

export default AutoPlay