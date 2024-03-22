"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: William Renard
      Date: 3/21/2024

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

function Timer(min, sec) { // function constructor for timer
  this.minutes = min; // sets the minutes
  this.seconds = sec; // seconds
  this.timeID = null; // and id for the timer for setInterval
};

Timer.prototype.runPause = function(timer, minBox, secBox) { // add the function to the prototype
  if(timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    timer.timeID = window.setInterval(countdown, 1000);
  }
  function countdown() { // from what the textbook said, this is supposed to be inside of the runPause function, if you
    // take it outside of the runPause function the timer just simply does not work.
    if(timer.seconds > 0) { // check if seconds are greater than 0 before subtracting
      timer.seconds--;
    } else if(timer.minutes > 0) { // if seconds are 0 we want to see if there is a minute and if there is we subtract one
      timer.minutes--;
      timer.seconds = 59; // set seconds back to 59
    } else {
      window.clearInterval(timer.timeID); // else we hit 0 on both we want to clear the interval
      timer.timeID = null; // set interval ID to null
    }
    minBox.value = timer.minutes; // set the values of the boxes to reflect the timer
    secBox.value = timer.seconds;
  }
};




/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");

const myTimer = new Timer(minBox.value, secBox.value); // construct a new timer from the constructor.

minBox.onchange = function() { // on change function for the minBox
  myTimer.minutes = minBox.value; // basically if you mouse over the boxes on the web page they can be adjusted/manipulated
  // if they are manipulated like in the case of making sure that at 0 minutes 0 seconds the timer stops, then that makes it
  // a lot easier.
};

secBox.onchange = function() { // ^
  myTimer.seconds = secBox.value;
};

runPauseTimer.onclick = function() { // onclick anonymous function to run the timer.
  myTimer.runPause(myTimer, minBox, secBox);
};