const updateTimerUI = (textDay, textHour, textMinute, textSecond) => {
  document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
  document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
  document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
  document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};
const countdown = () => {
  // Specify the date and time we are counting down to.
  const warStartTime = new Date("Feb 24, 2022 05:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = now - warStartTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = Math.floor((remainingTime % day) / hour);
  const textMinute = Math.floor((remainingTime % hour) / minute);
  const textSecond = Math.floor((remainingTime % minute) / second);
  updateTimerUI(textDay, textHour, textMinute, textSecond);
};

// should use 500 as setInterval won't always run on time.
setInterval(countdown, 500);
