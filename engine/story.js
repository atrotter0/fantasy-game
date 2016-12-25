/**************************/
/*    Story Controller    */
/**************************/
console.log("story.js loaded!");

const NEXT_PAGE = 2;
const OPTION_PAGE = 1;
const DIFFICULTY_SCALER = 4;

var book1 = [];
var choicesHolder = [];
var winResponses = [];
var loseResponses = [];

var chapter0 = [
  "I remember the day that you died, but this is not that story. This is where I tell you about the day that we first met...",
  "continue",
  "You awake in a pool of your own blood. Soldiers clad in heavy armor -- your allies -- are screaming and dying around you. The battlefield surges with chaos. The fighting is brutal.",
  "continue",
  "You barely have a second to think before the blade of an axe arcs downward, aimed at your skull.",
  "continue",
  "A hulking barbarian holds the haft of the weapon, his face adorned in ghastly warpaint.<br><br>1. [ Might ] Bullrush your opponent to knock him off-balance.<br>2. [ Speed ] Roll out of the way of the incoming attack.<br>3. [ Power ] Cast a Light spell to momentarily blind your enemy.",
  "choices"
];

var choices0 = [
  "might",
  "speed",
  "power"
];

var winResponse0 = [{
  might: "Surging forward, you stagger your opponent with a crushing shoulder charge to the abdomen.",
  speed: "With lightning speed, you roll away from your opponent, narrowly avoiding the deadly blade of the axe as it crashes into the dirt next to you.",
  power: "With a cry of dismay, the barbarian staggers back, momentarily blinded from your arcane power."
}];

var loseResponse0 = [
  "Unable to distract your opponent, the weapon crashes into the mud, grazing your scalp. Warm blood trickles down the side of your face..."
];

function loadChapters(book) {
  book.push(chapter0);
}

function loadStory(player) {
  player.chapter = player.chapter;
  player.page = player.page;
}

function loadResponses(winResponse0, loseResponse0) {
  winResponses.push(winResponse0);
  loseResponses.push(loseResponse0);
}

function loadChoices(choices0) {
  choicesHolder.push(choices0);
}

function runStory(player, book) {
  chapter = player.chapter;
  page = player.page;
  option = book[chapter][page + OPTION_PAGE];
  console.log("Option: " + option);
  displayStory(book[chapter][page], option);
}

function nextStory(player, book) {
  player.page += NEXT_PAGE;
  console.log("Page: " + player.page);
  runStory(player, book);
}

function checkResponse(choice) {
  console.log("Response num: " + choice);
  responseRoll(choicesHolder, choice, player);
  console.log("Response Result: " + player.choiceResult);
  calculateResult(winResponses, loseResponses, player.choiceResult, player.choiceStat, player.chapter);
}

function responseRoll(choicesHolder, choice, player) {
  stat = choicesHolder[player.chapter][choice];
  console.log("Stat: " + stat);
  player.choiceStat = stat;
  console.log("Set Response Stat To: " + player.choiceStat);
  playerBonus = player.level + player[player.choiceStat];
  console.log("Player Bonus: " + playerBonus);
  difficultyRating = player.level * DIFFICULTY_SCALER;
  console.log("DR: " + difficultyRating);
  player.rollResult = (Math.floor((Math.random() * 8) + 1)) + playerBonus;
  console.log("Response Roll: " + player.rollResult); 
  if (player.rollResult >= difficultyRating) {
    player.choiceResult = true;
  } else {
    player.choiceResult = false;
  }
}

function calculateResult(win, lose, result, stat, chapter) {
  if (result == true) {
    finalResult = winResponses[player.chapter][player.chapter][stat];
    console.log("Final Result: " + finalResult);
    displayResult(finalResult);
    displayStoryRoll(player.rollResult, " Success!");
  } else {
    finalResult = lose[player.chapter][player.chapter];
    console.log("Fail Result: " + finalResult);
    displayResult(finalResult);
    displayStoryRoll(player.rollResult, " Failure!");
  }
}


