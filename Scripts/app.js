import { gamer, HealthStates, playerOneHP, playerOneisWin, playerTwoHP, playerTwoisWin } from "./game.js";

let mainMenuIsTrue = true;
let gameModeMenuIsTrue = false;
let gameIsTrue = false;
let endScreenIsTrue = false;

let isPlayCpuTrue = false;
let isPlayPersonTrue = false;

let gameModeLives = [1, 3, 4];
let gameModeSet = 0;

let body = document.getElementById("body");

async function SiteLoad() {
    mainMenuIsTrue = true;
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
    MainMenuFunction()
}
SiteLoad();


function GameModes() {
    mainMenuIsTrue = false;
    gameModeMenuIsTrue = true;
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
    gameModeMenuIsTrue = false;
    gameIsTrue = true;
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
                <h2 id=playerTwo>...</h2>
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
                <p id="bestOfNum">BEST OF</p>
                <p id="turn">Turn</p>
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

function EndScreen() {

    gameIsTrue = false;
    endScreenIsTrue = true;
    if(isPlayCpuTrue) {
        if(playerTwoisWin) {
            body.innerHTML = `
            <div class="container-fluid endScreenTitle">
            <div class="myRow">
                <h1 class="endScreenTitleText">YOU LOSE</h1>
            </div>
        </div>
    
        <div class="container-fluid LoseToCpu">
            <div class="floater">
                <img class="emojiHand" id="endScreenMiddleHand" src="./Assets/Imgs/point.png" alt="">
                <img class="emojiHead" id="endScreenMiddleHead" src="./Assets/Imgs/joy.png" alt="">
            </div>
        </div>
    
        <div class="container-fluid" style="margin: auto;">
            <div class="endScreenButtons">
                <button id="playAgain" class="pushable">
                    <span class="front">
                        Play Again
                    </span>
                    </button>
                    <button id="menuButton" class="pushable">
                    <span class="front">
                        Main Menu
                    </span>
                </button>
            </div>
        </div>
            `
        } else if(playerOneisWin) {
            body.innerHTML = `
            <div class="container-fluid endScreenTitle">
            <div class="myRow">
                <h1 class="endScreenTitleText">YOU LOSE</h1>
            </div>
        </div>
    
        <div class="container-fluid LoseToCpu">
            <div>
                <img class="emojiHead" id="endScreenMiddleHead" src="./Assets/Imgs/moai.png" alt="">
            </div>
        </div>
    
        <div class="container-fluid" style="margin: auto;">
            <div class="endScreenButtons">
                <button id="playAgain" class="pushable">
                    <span class="front">
                        Play Again
                    </span>
                    </button>
                    <button id="menuButton" class="pushable">
                    <span class="front">
                        Main Menu
                    </span>
                </button>
            </div>
        </div>
            `
        }
    } else if(isPlayPersonTrue) {
        if(playerOneisWin) {
            body.innerHTML = `
            <div class="container-fluid endScreenTitle">
        <div class="myRow">
            <h1 class="endScreenTitleText">YOU LOSE</h1>
        </div>
    </div>

    <div class="container-fluid LoseToPerson">
        <div class="floater">
            <img class="emojiHead" id="endScreenMiddleHead" src="./Assets/Imgs/joy.png" alt="">
            <img class="emojiHand" src="./Assets/Imgs/rightPoint.png" alt="">
        </div>
        <div>
            <img class="emojiHead" src="./Assets/Imgs/clown.png" alt="">
        </div>
    </div>

    <div class="container-fluid" style="margin: auto;">
        <div class="endScreenButtons">
            <button id="playAgain" class="pushable">
                <span class="front">
                    Play Again
                </span>
                </button>
                <button id="menuButton" class="pushable">
                <span class="front">
                    Main Menu
                </span>
            </button>
        </div>
    </div>
            `
        } else if(playerTwoisWin) {
            body.innerHTML = `
            <div class="container-fluid endScreenTitle">
        <div class="myRow">
            <h1 class="endScreenTitleText">YOU LOSE</h1>
        </div>
    </div>

    <div class="container-fluid LoseToPerson">
        <div>
            <img class="emojiHead" src="./Assets/Imgs/clown.png" alt="">
        </div>
        <div class="floater">
            <img class="emojiHand" src="./Assets/Imgs/leftPoint.png" alt="">
            <img class="emojiHead" id="endScreenMiddleHead" src="./Assets/Imgs/joy.png" alt="">
        </div>
    </div>

    <div class="container-fluid" style="margin: auto;">
        <div class="endScreenButtons">
            <button id="playAgain" class="pushable">
                <span class="front">
                    Play Again
                </span>
                </button>
                <button id="menuButton" class="pushable">
                <span class="front">
                    Main Menu
                </span>
            </button>
        </div>
    </div>
            `
        }

    }
    EndScreenFunctions();
    
}

function MainMenuFunction() {
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
        gameModeMenuIsTrue = false;
        gameIsTrue = true;
        console.log(gameModeSet);
        HealthStates();
    });
    threeLives.addEventListener('click', function(){
        gameModeSet = gameModeLives[1];
        Game();
        gamer();
        gameModeMenuIsTrue = false;
        gameIsTrue = true;
        console.log(gameModeSet);
        HealthStates();
    });
    fourLives.addEventListener('click', function(){
        gameModeSet = gameModeLives[2];
        Game();
        gamer();
        gameModeMenuIsTrue = false;
        gameIsTrue = true;
        console.log(gameModeSet);
        HealthStates();
    });
}




if(gameModeMenuIsTrue) {
    oneLife.addEventListener('click', function(){
        gameModeSet = gameModeLives[0];
        HealthStates();
        console.log(gameModeSet)
    });
    threeLives.addEventListener('click', function(){
        gameModeSet = gameModelives[2];
        HealthStates();
        console.log(gameModeSet);
    });
    fourLives.addEventListener('click', function(){
        gameModeSet = gameModeLives[3];
        HealthStates();
        console.log(gameModeSet);
    });
}

function EndScreenFunctions() {
    console.log(endScreenIsTrue);
    let menuButton = document.getElementById("menuButton");
    let playAgainButton = document.getElementById("playAgain");

    menuButton.addEventListener('click', function(){
        SiteLoad();
        gameModeSet = 0;
        isPlayCpuTrue = false;
        isPlayPersonTrue = false;
        endScreenIsTrue = false;
        mainMenuIsTrue = true;
    });
    playAgainButton.addEventListener('click', function(){
        Game();
        gamer();
        HealthStates();
        gameIsTrue = true;
        endScreenIsTrue = false;
    });
}


export { gameModeSet, gameModeLives, gameIsTrue, isPlayCpuTrue, EndScreen };