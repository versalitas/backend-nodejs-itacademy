// import all that is requiered 
const Game = require('./game');

//const prompt = require('prompt-sync')({sigint: true});

// declare instance of the game
let game = new Game();


// add participant
game.addPlayer("Ann");
game.addPlayer("Bo");
game.addPlayer("Kim");


//Let the game start...!!!
//const turns = prompt('How many turns do you want to play?')
//turns = Number(turns);

game.scoreBoard.addScore("Ann", 6);
game.scoreBoard.addScore("Bo", 5);
game.scoreBoard.addScore("Kim", 3);
game.scoreBoard.addScore("Ann", 4);
game.scoreBoard.removeScore("Bo", 2);
game.scoreBoard.addScore("Kim", 3);



game.scoreBoard.showScore();
game.scoreBoard.showWinner();



    


