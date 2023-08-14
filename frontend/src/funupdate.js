let container = null;
let fireworks = null;

function funUpdate(state) {

    if (container==null) { container = document.querySelector(".fireworks"); }
    console.log(container)
    if (fireworks==null) { fireworks = new Fireworks.default(container); }
    console.log(fireworks)

    fireworks?.launch(10);

    let beat = new Audio(`sounds/${state}.mp3`);
    beat.play();

}