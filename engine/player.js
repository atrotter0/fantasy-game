/************************/
/*    Player Details    */
/************************/
console.log("player.js loaded!");

const DEFAULT_LEVEL = 1;
const DEFAULT_HEALTH = 2;
const DEFAULT_AETHER = 2;
const DEFAULT_DEFENSE = 10;
const DEFAULT_STAT = 1;
const DEFAULT_EXP = 0;
const DEFAULT_CHAPTER = 0;
const DEFAULT_PAGE = 0;
const DEFAULT_CHOICE_RESULT = 0;
const DEFAULT_CHOICE_STAT = 0;
const DEFAULT_ROLL_RESULT = 0;
const DEFAULT_LOC_CODE = 0;
const POOL_SCALER = 10;
const CRIT_SCALER = .05;
const SPEED_SCALER = .10;

// load test player
function loadTestDefaults(player, job, level) {
  player.name = "Arandar Fellswing",
  player.job = job,
  player.level = level
};

var player = {
  name: "",
  job: "",
  level: DEFAULT_LEVEL,
  health: DEFAULT_HEALTH,
  aether: DEFAULT_AETHER,
  defense: DEFAULT_DEFENSE,
  might: DEFAULT_STAT,
  speed: DEFAULT_STAT,
  power: DEFAULT_STAT,
  luck: DEFAULT_STAT,
  aim: DEFAULT_STAT,
  resolve: DEFAULT_STAT,
  exp: DEFAULT_EXP,
  chapter: DEFAULT_CHAPTER,
  page: DEFAULT_PAGE,
  choiceStat: DEFAULT_CHOICE_STAT,
  choiceResult: DEFAULT_CHOICE_RESULT,
  rollResult: DEFAULT_ROLL_RESULT,
  locationCode: DEFAULT_LOC_CODE,
};

player.classStats = function(player) {
  if (player.job == "Warrior") {
    player.might = player.might + 1;
    player.health = player.health + 1;
    player.defense = player.defense + 1;
  }
  else if (player.job == "Rogue") {
    player.speed = player.speed + 1;
    player.aim = player.aim + 1;
    player.luck = player.luck + 1;
  }
  else {
    player.power = player.power + 1;
    player.aether = player.aether + 1;
    player.resolve = player.resolve + 1;
  }
};

var stats = {
  health: 0, 
  aether: 0,
  defense: 0,
  attack: 0,
  speed: 0,
  crit: 0
};

stats.generate = function(stats, player) {
  stats.health = player.health * POOL_SCALER;
  stats.aether = player.aether * POOL_SCALER;
  stats.defense = player.defense + player.speed;
  stats.attack = player.might;
  stats.speed = player.speed * SPEED_SCALER;
  stats.crit = player.aim * CRIT_SCALER;
};
