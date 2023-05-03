import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  mark: string = "";
  message: string = "";
  games:any[] = [];
  moves: any = [];
  gameOver: boolean = false;
  isMoveFinish: boolean = false;
  currentPlayer:string = "Oyuncu 1";

  constructor(){
    this.newGame();
  }

  newGame(){
    
  this.mark = "X";
  this.currentPlayer = "Player 1";
  this.message = "Siradaki: "+this.currentPlayer;
  this.games = [
   {mark: "", winner:false},
   {mark: "", winner:false},
   {mark: "", winner:false},
   {mark: "", winner:false},
   {mark: "", winner:false},
   {mark: "", winner:false},
   {mark: "", winner:false},
   {mark: "", winner:false},
   {mark: "", winner:false},
  ];
  this.gameOver = false;
  this.moves = [];
  this.isMoveFinish = false;
  }

  setmark(index:number){
    if(this.games[index].mark == "" && this.gameOver == false) {
    this.games[index].mark = this.mark;
    this.moves.push([...this.games]);
    this.isGameOver();    
    this.checkGameMoveIsOver();
    if(this.gameOver){
      this.currentPlayer = this.mark == "X" ? "Player 1" : "Player 2";
      this.message = "Oyun bitti. Kazanan:" + this.currentPlayer;
    }else if (this.isMoveFinish) {
      this.message = "Oyun Berabere. Kazanan yok!";
    }
    else {
      if(this.mark == "X") this.mark = "O"
      else this.mark = "X"
      this.currentPlayer = this.mark == "X" ? "Player 1" : "Player 2";
      this.message = "Siradaki: " + this.currentPlayer; // `Siradaki: $(this.mark)` da yazabiliriz
    }
  }
}

checkGameMoveIsOver(){
  this.isMoveFinish = true;
  for (let i = 0; i < this.games.length; i++) {
    if (this.games[i].mark == "") {
      this.isMoveFinish = false;
      break;
    }  
  }
 
}

isGameOver(){
  if(
    this.games[0].mark != "" &&
    this.games[0].mark == this.games[1].mark &&
    this.games[1].mark == this.games[2].mark
  ) {
    this.gameOver = true;
    this.games[0].winner = true;
    this.games[1].winner = true;
    this.games[2].winner = true;
  }
  if(
    this.games[3].mark != "" &&
    this.games[3].mark == this.games[4].mark &&
    this.games[4].mark == this.games[5].mark
  ) {
    this.gameOver = true;
    this.games[3].winner = true;
    this.games[4].winner = true;
    this.games[5].winner = true;
  }
  if(
    this.games[6].mark != "" &&
    this.games[6].mark == this.games[7].mark &&
    this.games[7].mark == this.games[8].mark
  ) {
    this.gameOver = true;
    this.games[6].winner = true;
    this.games[7].winner = true;
    this.games[8].winner = true;
  }
  if(
    this.games[0].mark != "" &&
    this.games[0].mark == this.games[3].mark &&
    this.games[3].mark == this.games[6].mark
  ) {
    this.gameOver = true;
    this.games[0].winner = true;
    this.games[3].winner = true;
    this.games[6].winner = true;
  }
  if(
    this.games[1].mark != "" &&
    this.games[1].mark == this.games[4].mark &&
    this.games[4].mark == this.games[7].mark
  ) {
    this.gameOver = true;
    this.games[1].winner = true;
    this.games[4].winner = true;
    this.games[7].winner = true;
  }
  if(
    this.games[2].mark != "" &&
    this.games[2].mark == this.games[5].mark &&
    this.games[5].mark == this.games[8].mark
  ) {
    this.gameOver = true;
    this.games[2].winner = true;
    this.games[5].winner = true;
    this.games[8].winner = true;
  }
  if(
    this.games[0].mark != "" &&
    this.games[0].mark == this.games[4].mark &&
    this.games[4].mark == this.games[8].mark
  ) {
    this.gameOver = true;
    this.games[0].winner = true;
    this.games[4].winner = true;
    this.games[8].winner = true;
  }
  if(
    this.games[2].mark != "" &&
    this.games[2].mark == this.games[4].mark &&
    this.games[4].mark == this.games[6].mark
  ) {
    this.gameOver = true;
    this.games[2].winner = true;
    this.games[4].winner = true;
    this.games[6].winner = true;
  }
}

changeWinnerButtonClass(winner:boolean){
  if(winner)
    return "btn-success"
  else
  return "btn-warning"
}

  returnSelectMore(index: number){
    this.games = this.moves[index];
  }
}
