const secondHand = document.querySelector(".sec-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const hands = document.querySelectorAll(".hand");

const getDegrees = (timing) => (timing / 60) * 360 + 90;

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegree = getDegrees(seconds);
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const mins = now.getMinutes();
  const minsDegree = getDegrees(mins);
  minsHand.style.transform = `rotate(${minsDegree}deg)`;

  const hours = now.getHours();
  const hourDegree = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  if (seconds > 59 || mins > 59 || hours > 12) {
    hands.style.transition = `none`;
  }
}

setInterval(setDate, 1000);
