function Player(playerName, score, symbol) {
    this.playerName = playerName;
    this.score = score;
    this.nameBoard = document.getElementById(`${symbol}-player`);
    this.scoreBoard = document.getElementById(`${symbol}-score`);
}

const TicTacToe = () => {
    const PLAYER_1 = new Player(localStorage.getItem("player1"), 0, "o");
    const PLAYER_2 = new Player(localStorage.getItem("player2"), 0, "x");
    const CELLS = document.getElementsByClassName("cell");
    const initialize = () => {
        PLAYER_1.nameBoard.innerHTML = `${PLAYER_1.playerName} -- O`;
        PLAYER_2.nameBoard.innerHTML = `${PLAYER_2.playerName} -- X`;
        PLAYER_1.scoreBoard.innerHTML = PLAYER_1.score;
        PLAYER_2.scoreBoard.innerHTML = PLAYER_2.score;
        for (let i = 0; i <= 8; i++){
            CELLS[i].addEventListener("click", function(){console.log(CELLS[i].id)});
        }
    }

    const changeScore = (player, amount) => {
        player.score = player.score + amount;
        player.scoreBoard.innerHTML = player.score;
    }

    return { initialize }
}

const begin = TicTacToe();

begin.initialize();

