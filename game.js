function Player(playerName, score, symbol) {
    this.playerName = playerName;
    this.score = score;
    this.nameBoard = document.getElementById(`${symbol}-player`).innerHTML = this.playerName;
    this.scoreBoard = document.getElementById(`${symbol}-score`)
    this.scoreBoard.innerHTML = this.score;
    const changeScore = (amount) => {
        this.score = this.score + 1;
        this.scoreBoard.innerHTML = this.score;
    }
}

const ActivateBoard = () => {
    const PLAYER_1 = new Player(localStorage.getItem("player1"), 0, "o");
    const PLAYER_2 = new Player(localStorage.getItem("player2"), 0, "x");
}

const begin = ActivateBoard();
