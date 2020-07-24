const Menu = () => {
    let playerOne = document.getElementById("player-1");
    let playerTwo = document.getElementById("player-2");
    let playButton = document.getElementById("play-button");

    const init = () => {
        playButton.addEventListener("click", function() {
            if (playerOne.value == "" || playerTwo.value == ""){
                alert("You forgot to enter a name!");
            }
            else{
                window.location="game.html";
            }
        })
    }
    return { init };
}

const initialize = Menu();

initialize.init();