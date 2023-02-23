
/* first sketch class Game {players[], scoreBoard (tipo Score), addPlayer(), playGame()},
class Score {scoreCount[], updateScore(), showWinner(), showScore()}.
classPlayer {name}*/

const Player = require("./player");
const Score = require("./score");

class Game {
    constructor(){
        
        
        this.scoreBoard = new Score();
        
    }

    addPlayer(playerName){
        if (this.scoreBoard.scoreCount.some(element => element.name === playerName)) {
            console.log(`Username ${Player.name} already exists.`)
        } else {
        let player = new Player(playerName);
        this.scoreBoard.scoreCount.push(player)
            return console.log(`${playerName} has joined the game.`);
        }
    }


/* reducing 
  playGame(turns){
    if(turns > 0) {
    let isTongo = false;
    let scoreArray = this.scoreBoard.scoreCount; 
        for(let i = 0; i < turns; i++){
            //realmente estoy pescando el objeto del array del scoreboard?
            for(let j = 0; j < scoreArray.length; j++){
                let score = Math.floor(Math.random() * 5 + 1);
                //console.log(`${scoreArray[j].name} has scored ${score}`);
                isTongo = ((Math.random() * 10) === 1); 
                isTongo? this.scoreBoard.removeScore(scoreArray[j].name, score):this.scoreBoard.addScore(scoreArray[j].name, score);
                //console.log(scoreArray);
            }
        } 
    } else {
            console.log('Bye, bye');
       }   
  }
  */
}
module.exports = Game;
//remembering https://www.javascripttutorial.net/array/javascript-sort-an-array-of-objects/

