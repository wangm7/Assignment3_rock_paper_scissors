// Elements
const welcomeScreen = document.getElementById(`welcome-screen`);
const gameScreen = document.getElementById('game-screen');
const startGameButton = document.getElementById('start-game-button') ;
const userName = document.getElementById('username');
const userSelection = document.getElementById('user-selection');
const goButton = document.getElementById('go-button');
const scoreParagraph = document.getElementById('score');
const gameHistoryParagraph = document.getElementById('game-history');

// instantiate the game object from the `RockPaperScissors` class.
let game = new RockPaperScissors();

// hide gamescreen
//gameScreen.classList.add(`d-none`);

// updateScoreTallyUI
function updateScoreTallyUI(){
  let userScore = game.score.user;
  let cpuScore = game.score.cpu;
  scoreParagraph.innerHTML = userName + ': ' + userScore + ' v CPU: ' + cpuScore;
}
// updateGameHistoryUI
function updateGameHistoryUI(){
  gameHistoryParagraph.innerHTML = game.gameHistoryLog;
}

// start-game-button EventListener
startGameButton.addEventListener(`click`, function () {
  const username = userName.value;
  if(username.length == 0){
    alert("You have to input your name!")
  }else{
    game = new RockPaperScissors(username);
    gameScreen.classList.add("d-block")
  }
  // Complete
});

// go-button EventListener
goButton.addEventListener(`click`, function () {
  game.play(userSelection.value.toLocaleLowerCase());
  updateScoreTallyUI();
  updateGameHistoryUI();
});
