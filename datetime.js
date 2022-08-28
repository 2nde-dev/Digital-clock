function showTime() {
  var date = new Date();
  var hrs = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();

  if (hrs > 12) {
    day.innerHTML = "PM";
  } else {
    day.innerHTML = "AM";
  }

  if (hrs > 12) {
    hrs = hrs - 12;
  }

  hours.innerHTML = hrs;
  minutes.innerHTML = min;
  seconds.innerHTML = sec;
}
setInterval(showTime, 10);
