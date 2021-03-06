function checkStatus() {
  const sounds = document.querySelectorAll("audio");

  sounds.forEach((sound) => {
    if (!sound.paused) {
      sound.pause();
      sound.currentTime = 0;
    }
  });
}

function playOnClick(e) {
  const getAudio = e.path[0].outerText.toLowerCase();

  const audio = document.querySelector(`audio[data-key="${getAudio}"]`);
  const key = document.querySelector(`.key[data-key="${getAudio}"]`);
  if (!audio) return; //stop function if undefined key pressed.
  // Set current audio time to 0, to play sound continuously.
  audio.currentTime = 0;
  // Play sound
  audio.play();
  // Add playing class to class list
  // By this we are adding transition to our div
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.animationName != "pulse") return;
  // Remove playing class from class list
  // By this we backwarding our transition
  // And the div is turnin to its normal state.
  this.classList.remove("playing");
}
function playSound(e) {
  // Select audio tag from page
  const audio = this.document.querySelector(`audio[data-key="${e.key}"]`);

  // Select div that has key in it
  const key = this.document.querySelector(`.key[data-key="${e.key}"]`);

  if (!audio) return; //stop function if undefined key pressed.
  // Set current audio time to 0, to play sound continuously.
  checkStatus();
  audio.currentTime = 0;
  // Play sound
  audio.play();
  // Add playing class to class list
  // By this we are adding transition to our div
  key.classList.add("playing");
}

// Select tags that have key class
const keys = document.querySelectorAll(".key");

// Selecct each tag addEventListener that has transitioned by 'transitionend'
// Then remove the tag to revert the transition.

keys.forEach((key) => key.addEventListener("animationend", removeTransition));
keys.forEach((key) => key.addEventListener("mousedown", playOnClick));

// Add event listener to listen when key pressed then
//  start playSound function to play sound.
window.addEventListener("keydown", playSound);
