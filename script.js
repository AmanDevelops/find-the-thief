const inGame = document.getElementById("game");
const inMenu = document.getElementById("menu");
const end = document.getElementById("end");
const thief = document.getElementById("thief-image");
const startButton = document.getElementsByClassName("start-button")[0];
const restartButton = document.getElementsByClassName("restart-button")[0];

end.style.display = "none";
inGame.style.display = "none";

let footstepsSound = new Audio("assets/footsteps.mp3");
footstepsSound.loop = true;

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;
const diagonal = (winWidth ** 2 + winHeight ** 2) ** (1 / 2);
let width = Math.random() * (winWidth - 100);
let height = Math.random() * (winHeight - 100);

startButton.addEventListener("click", () => {
  footstepsSound.play();
  inMenu.style.display = "none";
  inGame.style.display = "flex";
  thief.style.left = width + "px";
  thief.style.top = height + "px";
  thief.style.opacity = 0;
});

restartButton.addEventListener("click", () => {
  width = Math.random() * (winWidth - 100);
  height = Math.random() * (winHeight - 100);
  footstepsSound.play();
  end.style.display = "none";
  inGame.style.display = "flex";
  thief.style.left = width + "px";
  thief.style.top = height + "px";
  thief.style.opacity = 0;
});

addEventListener("mousemove", (event) => {
  let distance =
    ((event.clientX - width) ** 2 + (event.clientY - height) ** 2) ** (1 / 2);
  footstepsSound.volume = Math.max(0, Math.min(1, 1.0 - distance / diagonal));
});

thief.addEventListener("click", () => {
  thief.style.opacity = 1;
  footstepsSound.pause();
  footstepsSound.currentTime = 0;
  inMenu.style.display = "none";
  end.style.display = "flex";
});
