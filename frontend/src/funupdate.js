function funUpdate(state) {
    const container = document.querySelector(".fireworks");
    const fireworks = new Fireworks.default(container);
console.log(container)
console.log(fireworks)
    fireworks.launch(10);

    let beat = new Audio(`sounds/${state}.mp3`);
    beat.play();

}