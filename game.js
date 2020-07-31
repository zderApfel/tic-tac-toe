function Player(playerName, score, symbol) {
    this.playerName = playerName;
    this.symbol = symbol;
    this.score = score;
    this.choices = [];
    this.nameBoard = document.getElementById(`${this.symbol}-player`);
    this.scoreBoard = document.getElementById(`${this.symbol}-score`);
}

const TicTacToe = () => {
    const PLAYER_1 = new Player(localStorage.getItem("player1"), 0, "o");
    const PLAYER_2 = new Player(localStorage.getItem("player2"), 0, "x");
    const CELLS = document.getElementsByClassName("cell");
    let selected = [];
    let whoseTurn = PLAYER_1; //Player 1 (O) always goes first, like in chess where white goes first
    const initialize = () => {
        PLAYER_1.nameBoard.innerHTML = `${PLAYER_1.playerName} -- O`;
        PLAYER_2.nameBoard.innerHTML = `${PLAYER_2.playerName} -- X`;
        PLAYER_1.scoreBoard.innerHTML = PLAYER_1.score;
        PLAYER_2.scoreBoard.innerHTML = PLAYER_2.score;
        for (let i = 0; i <= 8; i++){
            CELLS[i].addEventListener("click", function(){game(whoseTurn, CELLS[i])});
        }
    }
    const changeScore = (player, amount) => {
        player.score = player.score + amount;
        player.scoreBoard.innerHTML = player.score;
    }
    const game = (turn, cell) => {
        if(selected.includes(cell) == false){
            cell.innerHTML = turn.symbol.toUpperCase();
            turn.choices.push(cell);
            selected.push(cell)
            console.log(turn.choices);
            
            
            if (turn == PLAYER_1){
                whoseTurn = PLAYER_2;
            }
            else {
                whoseTurn = PLAYER_1;
            }
        }
    }

    return { initialize }
}

const begin = TicTacToe();

begin.initialize();

