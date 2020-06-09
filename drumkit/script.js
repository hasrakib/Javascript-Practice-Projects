//function to play the sound.
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //if no audio stop the function all togather.
  audio.currentTime = 0; //rewind the audio to start.
  audio.play(); //play the audio.
  key.classList.add("playing"); //add the transition class to the key.
}

//function to remove the transitions from the key.
function removeTransition(e) {
  if (e.propertyName !== "transform") return; //skip everything except the transform
  this.classList.remove("playing"); //remove the transition class from the key.
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
