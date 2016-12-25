/*******************************/
/*    Displays For End-User    */
/*******************************/
console.log("ui.js loaded!");

function hideStoryOptions() {
  $("#game-rolls").hide();
  $("#story-continue").hide();
  $("#story-choice-1").hide();
  $("#story-choice-2").hide();
  $("#story-choice-3").hide();
  $("#story-log").hide();
}

function displayStory(page, option) {
  hideStoryOptions();
  $("#story-log").html(page);
  $("#story-log").fadeIn(2000);

  if (option == "choices") {
    $("#story-choice-1").fadeIn(2000);
    $("#story-choice-2").fadeIn(2000);
    $("#story-choice-3").fadeIn(2000);
  } else if (option == "continue") {
    $("#story-continue").fadeIn(2000);
  } else {
    fadeStory();
  }
}

function fadeStory() {
  $("#story-log").fadeOut(4000);
  hideStoryOptions();
}

function displayResult(result) {
  hideStoryOptions();
  $("#story-log").html(result);
  $("#story-log").fadeIn(2000);
  $("#combat-option").fadeIn(2000)
}

function displayStoryRoll(roll, result) {
  $("#game-rolls").delay(1000).html("You roll " + roll + ".");
  $("#game-rolls").append(result);
  $("#game-rolls").fadeIn(4000);
  $("#game-rolls").fadeOut(3000);
}
