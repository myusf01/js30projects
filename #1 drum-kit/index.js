window.addEventListener("keydown",function(e) {
    const audio = this.document.querySelector(`audio[data-key="${e.key}"]`)
    const key = this.document.querySelector(`.key[data-key="${e.key}"]`)
    if (!audio) return; //stop function if undefined key pressed.
    console.log(key);
    audio.currentTime = 0;
    audio.play()
})