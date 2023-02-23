//https://stackoverflow.com/questions/
//1479319/simplest-cleanest-way-to-implement-a-singleton-in-javascript
// https://medium.com/swlh/node-js-and-singleton-pattern-7b08d11c726a

class Score {
  constructor(){
    
    if(!this.instance){
      this.instance = this; 
      this.scoreCount = [];
     
  }
   return this.instance;
  }
  
 addScore(playerName, score){
  const scoreIndex = this.scoreCount.findIndex(obj => obj.name === playerName);
  (scoreIndex > -1)? this.scoreCount[scoreIndex].score += score : console.log(`Username ${playerName} invalid`);
 }

 removeScore(playerName, score){
   const scoreIndex = this.scoreCount.findIndex(element => element.name === playerName);
   (scoreIndex > -1)? this.scoreCount[scoreIndex].score -= score : console.log(`Username ${playerName} invalid`);
 }

 //finds index of maxScore
 findMaxScoreIndex(){
    const sortedScore = this.scoreCount.sort((a,b) => {return b.score - a.score})
    const maxScore = sortedScore[0];
    return this.scoreCount.findIndex(obj => obj.score === maxScore);
}


//show score
showScore(){
  const sortedScore = this.scoreCount.sort((a,b) => {return b.score - a.score})
  console.log(sortedScore);
  let extractedScore = [];
  for(let i = 0; i < sortedScore.length; i++){
     extractedScore.push([`\n${sortedScore[i].name}:${sortedScore[i].score}`]);
 }
   console.log(` Complete scoreboard is ${extractedScore}`);  
}


//showWinner
showWinner(){
  const sortedScore = this.scoreCount.sort((a,b) => {return b.score - a.score});
  console.log(`The winner is ${sortedScore[0].name} with a whopping score of ${sortedScore[0].score}`);
}

}

module.exports = Score;