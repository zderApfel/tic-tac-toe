function Cell(id){
    this.id = id; //Ids of each cell are a number from 1-9
    this.element = document.getElementById(id);
    this.activeBy = null;
}

function Player(playerName, score, symbol) {
    this.playerName = playerName;
    this.symbol = symbol;
    this.score = score;
    this.nameBoard = document.getElementById(`${this.symbol}-player`);
    this.scoreBoard = document.getElementById(`${this.symbol}-score`);
}

const TicTacToe = () => {
    const PLAYER_1 = new Player(localStorage.getItem("player1"), 0, "o");
    const PLAYER_2 = new Player(localStorage.getItem("player2"), 0, "x");
    const CELLS = [];
    const ALERT = document.getElementById("alert");
    let whoseTurn = PLAYER_1; //Player 1 (O) always goes first, like in chess where white goes first
    
    const initialize = () => {
        PLAYER_1.nameBoard.innerHTML = `${PLAYER_1.playerName} -- O`;
        PLAYER_2.nameBoard.innerHTML = `${PLAYER_2.playerName} -- X`;
        PLAYER_1.scoreBoard.innerHTML = PLAYER_1.score;
        PLAYER_2.scoreBoard.innerHTML = PLAYER_2.score;
        for (let i = 1; i <= 9; i++){
            CELLS.push(new Cell(i));
            CELLS[i-1].element.addEventListener("click", function(){game(whoseTurn, CELLS[i-1].element)});
        }
        ALERT.innerHTML = `${whoseTurn.playerName}, it is your turn`;
    }
    
    const changeScore = (player, amount) => {
        player.score = player.score + amount;
        player.scoreBoard.innerHTML = player.score;
    }
    
    const game = (turn, cell) => {
        if(cell.activeBy == null){
            cell.innerHTML = turn.symbol.toUpperCase();
            cell.activeBy = turn;            

            if (turn == PLAYER_1){
                whoseTurn = PLAYER_2;
            }
            else {
                whoseTurn = PLAYER_1;
            }
            ALERT.innerHTML = `${whoseTurn.playerName}, it is your turn`;
        }
    }

    return { initialize }
}

const begin = TicTacToe();

begin.initialize();

