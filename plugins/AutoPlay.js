function AutoPlay(){
    AutoPlay.prototype.run = function(player){
        player.mute()
        player.play()// solo funciona si el video está sileciado, no se puede iniciar autoplay si es lo contrario
    }
}

export default AutoPlay