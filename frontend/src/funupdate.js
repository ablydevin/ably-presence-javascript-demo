let container = null;
let fireworks = null;
let isMuted = false;

function funUpdate(state) {

    if (container==null) { container = document.querySelector(".fireworks"); }
    console.log(container)
    if (fireworks==null) { fireworks = new Fireworks.default(container); }
    console.log(fireworks)

    fireworks?.launch(10);

    let beat = new Audio(`sounds/${state}.mp3`);
    beat.play();

}

function toggleMute() {
  isMuted = (isMuted) ? false : true;
  document.querySelector(".muteButton").textContent = isMuted
    ? "Unmute"
    : "Mute";
}

