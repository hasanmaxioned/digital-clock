setInterval(showTime, 1000);
function showTime() {
  let time = new Date();
  let hour = time.getHours();
  let mint = time.getMinutes();
  let sec = time.getSeconds();
  let am_pm = "AM";

  if(hour > 12) {
    hour = hour - 12;
    am_pm = "PM";
  }
  if(hour == 12) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  mint = mint < 10 ? "0" + mint : mint;
  sec = sec < 10 ? "0" + sec : sec;
  
  let currentTimeIs = hour + " : " + mint + " : " + sec + "  " + am_pm;

  document.querySelector("#digital-clock").innerHTML = currentTimeIs;
}
showTime();