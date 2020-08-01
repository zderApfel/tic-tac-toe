function Cell(id){
    this.id = id; //Ids of each cell are a number from 1-9
    this.element = document.getElementById(id);
    this.activeBy = null;
}

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
    const ALERT = document.getElementById("alert");
    const CELLS = [];
    let whoseTurn = PLAYER_1; //Player 1 (O) always goes first, like in chess where white goes first
    
    const initialize = () => {
        PLAYER_1.nameBoard.innerHTML = `${PLAYER_1.playerName} -- O`;
        PLAYER_2.nameBoard.innerHTML = `${PLAYER_2.playerName} -- X`;
        PLAYER_1.scoreBoard.innerHTML = PLAYER_1.score;
        PLAYER_2.scoreBoard.innerHTML = PLAYER_2.score;
        for (let i = 1; i <= 9; i++){
            CELLS.push(new Cell(i));
            CELLS[i-1].element.addEventListener("click", function(){game(whoseTurn, i-1)});
        }
        ALERT.innerHTML = `${whoseTurn.playerName}, it is your turn`;
    }

    const newGame = (winner) => {
        for (let x in CELLS){
            CELLS[x].activeBy = null;
            CELLS[x].element.innerHTML = "";
        }
        changeScore(winner, 1);
    }
    
    const game = (turn, cellID) => {
        let cell = CELLS[cellID];
        if (cell.activeBy == null){
            cell.element.innerHTML = turn.symbol.toUpperCase();
            cell.activeBy = turn;  
        }
        let result = checkBoard();
        console.log(result);
        if (result != null && result != "tie"){
            ALERT.innerHTML = `${result.playerName} wins!`;
            const BUTTON_CONTAINER = document.getElementById("button-container");
            const REPLAY_BUTTON = document.createElement("button");
            REPLAY_BUTTON.id = "replay-button";
            REPLAY_BUTTON.innerHTML = "Play Again";
            BUTTON_CONTAINER.appendChild(REPLAY_BUTTON);
            REPLAY_BUTTON.addEventListener("click", function() {
                newGame(result);
                REPLAY_BUTTON.remove();
            });
        }
        else if (result == null){
            if (turn == PLAYER_1){
                whoseTurn = PLAYER_2;
            }
            else {
                whoseTurn = PLAYER_1;
            }
            ALERT.innerHTML = `${whoseTurn.playerName}, it is your turn`;
        }
        else if (result == "tie"){
            ALERT.innerHTML = `Nobody wins!`;
            const BUTTON_CONTAINER = document.getElementById("button-container");
            const REPLAY_BUTTON = document.createElement("button");
            REPLAY_BUTTON.id = "replay-button";
            REPLAY_BUTTON.innerHTML = "Play Again";
            BUTTON_CONTAINER.appendChild(REPLAY_BUTTON);
            REPLAY_BUTTON.addEventListener("click", function() {
                const newGame = TicTacToe();
                newGame.initialize;
            });
        }
        
    }

    const checkBoard = () => {
        const VICTORY_CONDITIONS = [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]
        ];
        let testArray = [];
        makeTestArray();
        for (let x in VICTORY_CONDITIONS){
            let array = VICTORY_CONDITIONS[x];
            if (testArray[array[0]-1] == "o" && testArray[array[1]-1] == "o" && testArray[array[2]-1] == "o"){
                return PLAYER_1;
            }
            else if (testArray[array[0]-1] == "x" && testArray[array[1]-1] == "x" && testArray[array[2]-1] == "x"){
                return PLAYER_2;
            }
        }
        

        function makeTestArray(){    
            for (let x in CELLS){
                switch (CELLS[x].activeBy){
                    case PLAYER_1:
                        testArray.push(PLAYER_1.symbol);
                        break;
                    case PLAYER_2:
                        testArray.push(PLAYER_2.symbol);
                        break;
                    case null:
                        testArray[x] = null;
                        break;
                }
            }
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