// Required variables
var seconds = "00";
var minutes = 25;

// Audio files
var click_sound = new Audio("sounds/click.mp3");
var bell = new Audio("sounds/bell.mp3");

// Starting template for the timer
function template() {
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function start_timer() {
  click_sound.play();

  // Change the minutes and seconds to starting time
  minutes = 24;
  seconds = 59;

  // Add the seconds and minutes to the page
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  // Function for minute counter
  function minutesTimer() {
    minutes = minutes - 1;
    document.getElementById("minutes").innerHTML = minutes;
  }

  // Function for second counter
  function secondsTimer() {
    seconds = seconds - 1;
    document.getElementById("seconds").innerHTML = seconds;

    if (seconds <= 0) {
      if (minutes <= 0) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
      }
      seconds = 60;

      document.getElementById("done").innerHTML =
        "Session Completed!! Take a Break";

      document.getElementById("done").classList.add("show-message");

      bell.play();
    }
  }
}
