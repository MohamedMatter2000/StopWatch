let startbtn = document.querySelector(".start");
let resetbtn = document.querySelector(".reset");
let stopbtn = document.querySelector(".stop");
let startTimer;
let hr = "0" + 0;
let sec = "0" + 0;
let min = "0" + 0;
let milse = "0" + 0;
function putvalue() {
  document.querySelector(".millisecond").innerHTML = milse;
  document.querySelector(".second").innerHTML = sec;
  document.querySelector(".minute").innerHTML = min;
  document.querySelector(".hour").innerHTML = hr;
}
startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stop);
resetbtn.addEventListener("click", reset);
function start() {
  startbtn.disabled = true;
  stopbtn.disabled = false;
  resetbtn.disabled = false;
  startTimer = setInterval(() => {
    milse++;
    milse = milse < 10 ? "0" + milse : milse;

    if (milse == 100) {
      sec++;
      sec = sec < 10 ? "0" + sec : sec;
      milse = "0" + 0;
    }
    if (sec == 60) {
      min++;
      min = min < 10 ? "0" + min : min;
      sec = "0" + 0;
    }
    if (min == 60) {
      hr++;
      hr = hr < 10 ? "0" + hr : hr;
      min = "0" + 0;
    }
    putvalue();
  }, 10);
}
function stop() {
  startbtn.disabled = false;
  stopbtn.disabled = true;
  resetbtn.disabled = false;
  clearInterval(startTimer);
}
function reset() {
  clearInterval(startTimer);
  hr = min = sec = milse = "0" + 0;
  putvalue();
  startbtn.disabled = false;
  stopbtn.disabled = true;
  resetbtn.disabled = true;
}
stopbtn.disabled = true;
resetbtn.disabled = true;
