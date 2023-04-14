// get references to the seconds and minutes input fields and the start and settings buttons
const secondsInput = document.querySelector('.seconds input');
const minutesInput = document.querySelector('.minutes input');
const startButton = document.querySelector('.start');
const settingsButton = document.querySelector('.settings');
let intervalId;

// function that increments the seconds and minutes values by one every second
function addSeconds() {
  let seconds = parseInt(secondsInput.value);
  let minutes = parseInt(minutesInput.value);

  if (seconds < 59) {
    seconds++;
  } else {
    seconds = 0;
    minutes++;
  }

  // pad the seconds and minutes values with a leading zero if necessary
  secondsInput.value = seconds.toString().padStart(2, '0');
  minutesInput.value = minutes.toString().padStart(2, '0');
}

// function that starts the timer and disables the start button
function startTimer() {
  intervalId = setInterval(addSeconds, 10);
  startButton.disabled = true;
}

// function that stops the timer and enables the start button
function stopTimer() {
  clearInterval(intervalId);
  startButton.disabled = false;
}

// function that resets the timer to its initial value
function resetTimer() {
  secondsInput.value = '00';
  minutesInput.value = '00';
}

// function that updates the timer settings by stopping the timer, resetting the timer, and starting the timer again
function updateTimer() {
  stopTimer();
  resetTimer();
}

// add an event listener to the start button that calls the startTimer function when clicked
startButton.addEventListener('click', startTimer);

// add an event listener to the settings button that calls the updateTimer function when clicked
settingsButton.addEventListener('click', updateTimer);
