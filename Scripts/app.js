import { playerOneHP, playerTwoHP, getData, CpuGameChoices, gamer, HealthStates } from "./game.js";

let mainMenuIsTrue = true;
let gameModeMenuIsTrue = false;
let gameIsTrue = false;

let isPlayCpuTrue = false;
let isPlayPersonTrue = false;

let gameModeLives = [1, 3, 4];
let gameModeSet = 0;

let body = document.getElementById("body");

async function SiteLoad() {
    body.innerHTML = `
        <div class="container-fluid menuBox">
            <div class="row">
                <h1>Rock Paper Scissors</h1>
                <h1>Lizard Spock</h1>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col menuBtns">
                    <button id="playCpuButton" class="pushable">
                        <span class="front">
                            1 v CPU
                        </span>
                    </button>
                    <button id="playPersonButton" class="pushable">
                        <span class="front">
                            1 v 1
                        </span>
                    </button>
                </div>
            </div>
        </div>
    `;
}
SiteLoad();


function GameModes() {
    body.innerHTML = `
        <div class="container-fluid menuBox">
            <div class="row">
                <h1>Game Modes</h1>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col menuBtns">
                    <button id="oneLife" class="pushable">
                        <span class="front">
                            1 life
                        </span>
                    </button>
                    <button id="threeLives" class="pushable">
                        <span class="front">
                            3 lives
                        </span>
                    </button>
                    <button id="fourLives" class="pushable">
                        <span class="front">
                            4 lives
                        </span>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function Game() {
    body.innerHTML = `
    <div class="container-fluid">
        <div class="myRow">
            <div class="col topLeftRow">
                <div id="boxBg" class="health">
                    <img id="heart1" class="heart" src="./Assets/Imgs/heart.png" alt="">
                    <img id="heart2" class="heart" src="./Assets/Imgs/heart.png" alt="">
                    <img id="heart3" class="heart" src="./Assets/Imgs/heart.png" alt="">
                    <img id="heart4" class="heart" src="./Assets/Imgs/heart.png" alt="">
                </div>
                <h2>Player 1</h2>
            </div>
            <div class="col topRightRow">
                <h2>...</h2>
                <div id="boxBg" class="health">
                    <img id="heart5" class="heart" src="./Assets/Imgs/heart.png" alt="">
                    <img id="heart6" class="heart" src="./Assets/Imgs/heart.png" alt="">
                    <img id="heart7" class="heart" src="./Assets/Imgs/heart.png" alt="">
                    <img id="heart8" class="heart" src="./Assets/Imgs/heart.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <!-- choice images -->
    <div class="container-fluid">
        <div class="myRow">
            <div id="boxBg" class="col"><img id="playerOneImg" src="./Assets/Imgs/questionMark.png" alt=""></div>
            <div class="col infoCol">
                <p>BEST OF</p>
                <p>Turn</p>
            </div>
            <div id="boxBg" class="col"><img id="playerTwoImg" src="./Assets/Imgs/questionMark.png" alt=""></div>
        </div>
    </div>


    <!-- buttons -->
    <div class="container-fluid">
        <div class="myRow">
            <div class="col gameBtnsTop">
                <button id="rockButton" class="pushable">
                    <span class="front">
                        Rock
                    </span>
                  </button>
                  <button id="paperButton" class="pushable">
                    <span class="front">
                        Paper
                    </span>
                  </button>
                  <button id="scissorsButton" class="pushable">
                    <span class="front">
                        Scissors
                    </span>
                  </button>
            </div>
        </div>
        <div class="myRow">
            <div class="col gameBtnsBottom">
                <button id="lizardButton" class="pushable">
                    <span class="front">
                        Lizard
                    </span>
                  </button>
                  <button id="spockButton" class="pushable">
                    <span class="front">
                        Spock
                    </span>
                  </button>
              </div>
        </div>
    </div>
    `
}

if(mainMenuIsTrue) {
    let playCpuButton = document.getElementById("playCpuButton");
    let playPersonButton = document.getElementById("playPersonButton");

    playCpuButton.addEventListener('click', function(){
        GameModes();
        isPlayCpuTrue = true;
        gameModeMenuIsTrue = true;
        asdfsdf();
        mainMenuIsTrue = false;
        console.log(isPlayCpuTrue);
        console.log(gameModeMenuIsTrue)
    });
    playPersonButton.addEventListener('click', function(){
        GameModes();
        isPlayPersonTrue = true;
        gameModeMenuIsTrue = true;
        asdfsdf();
        mainMenuIsTrue = false;
        console.log(isPlayPersonTrue);
    });
}



function asdfsdf() {
    let oneLife = document.getElementById("oneLife");
let threeLives = document.getElementById("threeLives");
let fourLives = document.getElementById("fourLives");

    oneLife.addEventListener('click', function(){
        gameModeSet = gameModeLives[0];
        Game();
        gamer();
        HealthStates();
        gameModeMenuIsTrue = false;
        gameIsTrue = true;
        console.log(gameModeSet)
    });
    threeLives.addEventListener('click', function(){
        gameModeSet = gameModeLives[1];
        Game();
        gamer();
        HealthStates();
        gameModeMenuIsTrue = false;
        gameIsTrue = true;
        console.log(gameModeSet);
    });
    fourLives.addEventListener('click', function(){
        gameModeSet = gameModeLives[2];
        Game();
        gamer();
        HealthStates();
        gameModeMenuIsTrue = false;
        gameIsTrue = true;
        console.log(gameModeSet);
    });
}




if(gameModeMenuIsTrue) {
    oneLife.addEventListener('click', function(){
        gameModeSet = gameModeLives[0];
        console.log("working");
        console.log(gameModeSet)
    });
    threeLives.addEventListener('click', function(){
        gameModeSet = gameModelives[2];
        console.log(gameModeSet);
    });
    fourLives.addEventListener('click', function(){
        gameModeSet = gameModeLives[3];
        console.log(gameModeSet);
    });
}


export { gameModeSet, gameModeLives, gameIsTrue };