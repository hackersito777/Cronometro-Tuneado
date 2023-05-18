let timerId;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(updateTimer, 1000);
  document.querySelector(".timer").classList.add("active");
}

function stopTimer() {
  clearInterval(timerId);
  document.querySelector(".timer").classList.remove("active");
}

function resetTimer() {
  clearInterval(timerId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateTimer();
  document.querySelector(".timer").classList.remove("active");
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
