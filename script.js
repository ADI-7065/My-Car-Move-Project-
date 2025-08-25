const car = document.getElementById("car");
const tree = document.getElementById("tree");
let a = new Audio("src/All Black.mp3");
let x = 0;
let i;

function f1() {
  clearInterval(i); // stop previous move
  i = setInterval(() => {
    const scene = document.querySelector(".scene");
    const maxRight = scene.clientWidth - car.clientWidth; // limit to frame
    if (x >= maxRight) {
      // right boundary
      clearInterval(i);
      return;
    }
    if (x > window.innerWidth - 680) {
      // crash point
      clearInterval(i);
      tree.style.transform = "rotate(45deg) translate(50px, -50px)";
      car.src = "src/car2.png";
      let crash = new Audio("src/Car Accident.mp3");
      crash.play();
    }
    x += 5; // move forward
    if (x > maxRight) x = maxRight; // restrict movement
    car.style.left = x + "px";
  }, 30);
}

function f2() {
  clearInterval(i); // stop previous move
  tree.style.transform = "rotate(0deg) translate(0px, 0px)";
  car.src = "src/car.png";
  i = setInterval(() => {
    if (x <= 0) {
      // left boundary
      clearInterval(i);
      return;
    }
    x -= 5; // move backward
    if (x < 0) x = 0; // restrict movement
    car.style.left = x + "px";
  }, 30);
}

function f3() {
  clearInterval(i); // stop movement
}

function f4() {
  clearInterval(i); // reset everything
  tree.style.transform = "rotate(0deg) translate(0px, 0px)";
  car.src = "src/car.png";
  x = 0;
  car.style.left = x + "px";
  a.pause();
}

function f5() {
  a.play(); // play music
}

function f6() {
  a.pause(); // pause music
}
