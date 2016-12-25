/*************************/
/*    Initialize Game    */
/*************************/
console.log("init.js loaded!");

window.onload = function() {
  // Load player
  console.log(player);
  loadTestDefaults(player, "Warrior", 1);
  console.log("Test defaults loaded!");
  console.log(player);

  // generate stats
  player.classStats(player);

  // test stat scaler
  stats.generate(stats, player);
  console.log(stats);

  //game start
  loadChapters(book1);
  loadChoices(choices0);
  loadResponses(winResponse0, loseResponse0);
  console.log("Choices: " + choices0);
  console.log("Book: " + book1)
  loadStory(player);
  console.log("Chapter: " + player.chapter + " Page: " + player.page);
  runStory(player, book1);
}