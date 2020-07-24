const Menu = () => {
    let playerOneInput = document.getElementById("player-1");
    let playerTwoInput = document.getElementById("player-2");
    let playButton = document.getElementById("play-button");
    let playerOne = "";
    let playerTwo = "";

    const init = () => {
        playButton.addEventListener("click", function() {
            if (playerOneInput.value == "" || playerTwoInput.value == ""){
                alert("You forgot to enter a name!");
            }
            else{
                playerOne = playerOneInput.value;
                localStorage.setItem("player1", playerOne);
                playerTwo = playerTwoInput.value;
                localStorage.setItem("player2", playerTwo);
                location.href= "game.html";
                
            }
        });
    }
    return { init };
}

const initialize = Menu();
initialize.init();

