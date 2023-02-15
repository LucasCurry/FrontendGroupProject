const pianoMap = new Map();
const keyBindsMap = new Map();
const buttons = document.querySelectorAll("button");

pianoMap.set("wk1", new Audio("sounds/note1.mp3"));
pianoMap.set("bk1", new Audio("sounds/note2.mp3"));
pianoMap.set("wk2", new Audio("sounds/note3.mp3"));
pianoMap.set("bk2", new Audio("sounds/note4.mp3"));
pianoMap.set("wk3", new Audio("sounds/note5.mp3"));
pianoMap.set("wk4", new Audio("sounds/note6.mp3"));
pianoMap.set("bk3", new Audio("sounds/note7.mp3"));
pianoMap.set("wk5", new Audio("sounds/note8.mp3"));
pianoMap.set("bk4", new Audio("sounds/note9.mp3"));
pianoMap.set("wk6", new Audio("sounds/note10.mp3"));
pianoMap.set("bk5", new Audio("sounds/note11.mp3"));
pianoMap.set("wk7", new Audio("sounds/note12.mp3"));

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    pianoMap.get(button.name).play();
    console.log(button.name);
  });
});

document.onkeyup = keyPress;
function keyPress(event) {
  console.log(event.code);
  if (event.code == "KeyA") {
    new Audio("sounds/note1.mp3").play();
  }
  if (event.code == "KeyW") {
    new Audio("sounds/note2.mp3").play();
  }
  if (event.code == "KeyS") {
    new Audio("sounds/note3.mp3").play();
  }
  if (event.code == "KeyE") {
    new Audio("sounds/note4.mp3").play();
  }
  if (event.code == "KeyD") {
    new Audio("sounds/note5.mp3").play();
  }
  if (event.code == "KeyF") {
    new Audio("sounds/note6.mp3").play();
  }
  if (event.code == "KeyT") {
    new Audio("sounds/note7.mp3").play();
  }
  if (event.code == "KeyG") {
    new Audio("sounds/note8.mp3").play();
  }
  if (event.code == "KeyY") {
    new Audio("sounds/note9.mp3").play();
  }
  if (event.code == "KeyH") {
    new Audio("sounds/note10.mp3").play();
  }
  if (event.code == "KeyU") {
    new Audio("sounds/note11.mp3").play();
  }
  if (event.code == "KeyJ") {
    new Audio("sounds/note12.mp3").play();
  }
}
