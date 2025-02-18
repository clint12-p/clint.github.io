// Set the target date for the birthday
const targetDate = new Date("2025-02-18T23:05:00").getTime();

// Select DOM elements
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const birthdayMessage = document.getElementById("birthday-message");
const birthdayMusic = document.getElementById("birthday-music");

// Update countdown every second
const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  if (timeLeft > 0) {
    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the countdown
    daysEl.textContent = days < 10 ? `0${days}` : days;
    hoursEl.textContent = hours < 10 ? `0${hours}` : hours;
    minutesEl.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsEl.textContent = seconds < 10 ? `0${seconds}` : seconds;
  } else {
    // Stop the countdown and display the birthday message
    clearInterval(countdownInterval);
    document.getElementById("countdown").classList.add("hidden");
    birthdayMessage.classList.remove("hidden");
    birthdayMusic.play();
  }
}, 1000);
