class MediaPlayer {
  media: HTMLMediaElement
  plugins: Array<any>

  constructor(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this.initPlugins()
  }


  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this)
    })
  }

  //#region play
  play() {
    this.media.play()
  }

  pause() {
    this.media.pause()
  }

  togglePlay() {
    this.media.paused ? this.play() : this.pause()
  }
  //#endregion play
  //#region mute
  mute() {
    this.media.muted = true
  }

  unMute() {
    this.media.muted = false
  }
  
  toggleMute() {
    this.media.muted ? this.unMute() : this.mute()
  }
}
//#endregion mute

export default MediaPlayer