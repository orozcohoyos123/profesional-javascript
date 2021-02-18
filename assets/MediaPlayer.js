function MediaPlayer(config){
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function(){
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted(){
      return this.media.muted
    },
    set muted(value){
      this.media.muted = value
    }
  }
  this.plugins.forEach(plugin => {
    plugin.run(player)
  });
}

//#region play
MediaPlayer.prototype.play = function(){
    this.media.play()
}

MediaPlayer.prototype.pause = function(){
    this.media.pause()
}

MediaPlayer.prototype.togglePlay = function(){
  this.media.paused ? this.play() : this.pause()
}
//#endregion play

//#region mute
MediaPlayer.prototype.mute = function(){
  this.media.muted = true
}

MediaPlayer.prototype.unMute = function(){
  this.media.muted = false
}

MediaPlayer.prototype.toggleMute = function(){
  this.media.muted ? this.unMute() : this.mute()
}
//#endregion mute

export default MediaPlayer