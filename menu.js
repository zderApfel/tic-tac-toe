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
                location.href="game.html";
                playerOne = playerOneInput.value; // I am trying to get this:
                playerTwo = playerTwoInput.value; // and this to game.js, which is operating on the game.html file. But every method I've used does not work
            }
        });
    }
    return { init, playerOne, playerTwo };
}

const initialize = Menu();
initialize.init();

