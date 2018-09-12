/* elements */
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");
const timeLeft = display.querySelector("h1");
const endTime = display.querySelector("p");
const form = document.querySelector("#custom");

/* listeners */
buttons.forEach(button => {
  button.addEventListener("click", handleClick);
});

/* state */
let intervalID = null;
let time = null;

/* behavior */
function handleClick() {
  /* clear existing setInterval call */
  if (intervalID) clearInterval(intervalID);

  /* check if user has input a custom break time */
  time = form.minutes.value ? form.minutes.value * 60 : this.dataset.time;

  /* clear the input field */
  form.minutes.value = "";

  /* set display time */
  const displayMinutes = Math.floor(time / 60);
  const displaySeconds = time % 60;

  /* display time left */
  timeLeft.innerHTML = `${displayMinutes}:${
    String(displaySeconds).length - 1 ? displaySeconds : "0" + displaySeconds
  }`;

  /* display time the user will be back */
  const returnTime = new Date();
  const returnHours =
    (returnTime.getHours() +
      Math.floor((returnTime.getMinutes() + displayMinutes) / 60)) %
    12;
  const returnMinutes = (returnTime.getMinutes() + displayMinutes) % 60;
  endTime.innerHTML = `Back at ${returnHours}:${
    String(returnMinutes).length - 1 ? returnMinutes : "0" + returnMinutes
  }`;

  /* begin countdown */
  intervalID = setInterval(setCountdown, 1000);
}

function setCountdown() {
  time -= 1;
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time) % 60;
  timeLeft.innerHTML = `${minutes}:${
    String(seconds).length - 1 ? seconds : "0" + seconds
  }`;
}
