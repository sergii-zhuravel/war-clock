const updateTimerUI = (textDay, textHour, textMinute, textSecond) => {
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
};

const pad = (n) => {
  const str = n.toString();
  return `${str.length === 1 ? "0" : ""}${n}`;
};

const tick = () => {
  const warStartTime = new Date("Feb 24, 2022 05:00:00").getTime();
  const now = new Date().getTime();
  const remainingTime = now - warStartTime;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(remainingTime / day);
  const textHour = pad(Math.floor((remainingTime % day) / hour));
  const textMinute = pad(Math.floor((remainingTime % hour) / minute));
  const textSecond = pad(Math.floor((remainingTime % minute) / second));
  updateTimerUI(textDay, textHour, textMinute, textSecond);
};

// should use 500 as setInterval won't always run on time.
setInterval(tick, 500);
