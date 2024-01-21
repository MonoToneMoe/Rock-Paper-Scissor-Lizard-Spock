import { gameModeSet, gameIsTrue, isPlayCpuTrue, EndScreen } from "./app.js"

var playOptions = ["Paper", "Rock", "Lizard", "Spock", "Scissors"];

let playerOneHP;
let playerTwoHP;

let cycleInterval;
let isPaused = false;

let playerOneisWin = false;
let playerTwoisWin = false;

let playerOneChoice = "";
let playerTwoChoice = "";
let cpuChoice = "";

let PlayerOneChoiceMade = false;
let playerTwoChoiceMade = false;
let CpuChoiceMade = false;


function ImgCycle() {
    let i = 0;
    playerOneImg.src = './Assets/Imgs/questionMark.png';
    playerTwoImg.src = './Assets/Imgs/Rock.png'
    function cycle() {
        if (i < playOptions.length) {
            playerTwoImg.src = `./Assets/Imgs/${playOptions[i]}.png`;
            i++;
        } else {
            i = 0;
            playerTwoImg.src = `./Assets/Imgs/${playOptions[i]}.png`;
            i++;
        }
    }

    // Start the image cycling
    cycleInterval = setInterval(cycle, 500);

    return {
        // Pause the image cycling for a given time (in milliseconds)
        pause: function (time) {
            clearInterval(cycleInterval);
            return new Promise(resolve => {
                setTimeout(() => {
                    cycleInterval = setInterval(cycle, 500);
                    resolve();
                }, time);
            });
        },
        // Stop the image cycling
        stop: function () {
            clearInterval(cycleInterval);
        },
    };
}

// Function to start image cycling
function startImgCycle() {
    const imgCycle = ImgCycle();
    return imgCycle;
}


// Function to stop image cycling
function stopImgCycle() {
    if (cycleInterval) {
        clearInterval(cycleInterval);
    }
}




function gamer() {
    let heart1 = document.getElementById("heart1");
    let heart2 = document.getElementById("heart2");
    let heart3 = document.getElementById("heart3");
    let heart4 = document.getElementById("heart4");
    let heart5 = document.getElementById("heart5");
    let heart6 = document.getElementById("heart6");
    let heart7 = document.getElementById("heart7");
    let heart8 = document.getElementById("heart8");


    function handleClick(choice) {
        playerOneChoice = choice;
        CpuGameChoices(playerOneChoice, cpuChoice);
    }

    let playerTwo = document.getElementById("playerTwo");
    let playerOneImg = document.getElementById("playerOneImg");
    let playerTwoImg = document.getElementById("playerTwoImg");
    let rockButton = document.getElementById("rockButton");
    let paperButton = document.getElementById("paperButton");
    let scissorsButton = document.getElementById("scissorsButton");
    let lizardButton = document.getElementById("lizardButton");
    let spockButton = document.getElementById("spockButton");
    let bestOfNum = document.getElementById("bestOfNum")
    let turn = document.getElementById("turn");
    playerOneHP = gameModeSet;
    console.log(playerOneHP)
    playerTwoHP = playerOneHP;

    if(isPlayCpuTrue) {
        playerTwo.innerHTML="CPU";
        turn.innerHTML="";
    }
    bestOfNum.innerHTML = `First To ${gameModeSet}`


    rockButton.addEventListener('click', function () {
        if (!isPaused) {
            handleClick("Rock");
        }
    });

    paperButton.addEventListener('click', function () {
        if (!isPaused) {
            handleClick("Paper");
        }
    });

    scissorsButton.addEventListener('click', function () {
        if (!isPaused) {
            handleClick("Scissors");
        }
    });

    lizardButton.addEventListener('click', function () {
        if (!isPaused) {
            handleClick("Lizard");
        }
    });

    spockButton.addEventListener('click', function () {
        if (!isPaused) {
            handleClick("Spock");
        }
    });
    ImgCycle();
}


async function getData(){
    let response = await fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption");
    let data = await response.text();
    console.log(data);
    return data;
}

async function CpuGameChoices(playerOneChoice, cpuChoice) {
    isPaused = true;
    stopImgCycle();
    playerOneChoice = await playerOneChoice;
    playerTwoChoice = await getData();
    playerOneImg.src=`../Assets/Imgs/${playerOneChoice}.png`;
    playerTwoImg.src=`../Assets/Imgs/${playerTwoChoice}.png`;

    let index1 = playOptions.indexOf(playerOneChoice);
    let index2 = playOptions.indexOf(playerTwoChoice);
    let dif = index2 - index1;
    if(dif < 0) {
        dif += playOptions.length;
    }
    while(dif > 2) {
        dif -= 2;
    }
    if(dif == 1) {
        playerTwoHP--;
        console.log(playerOneHP, playerTwoHP)
    } else if(dif == 0) {
        console.log(playerOneHP, playerTwoHP)
    } else {
        playerOneHP--;
        console.log(playerOneHP, playerTwoHP)
    }
    HealthStates()
    
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    isPaused = false;
    if(playerOneisWin) {
        EndScreen();
    } else if(playerTwoisWin) {
        EndScreen();
    } else {
        startImgCycle();
    }
}

async function HealthStates() {
    switch(playerOneHP) {
        case 3:
            heart4.style="opacity: 0;"
            break;
        case 2:
            heart4.style="opacity: 0;"
            heart3.style="opacity: 0;"
            break;
        case 1:
            heart4.style="opacity: 0;"
            heart3.style="opacity: 0;"
            heart2.style="opacity: 0;"
            heart1.classList.add("pulse")
            break;
        case 0:
            heart4.style="opacity: 0;"
            heart3.style="opacity: 0;"
            heart2.style="opacity: 0;"
            heart1.classList.remove("pulse")
            heart1.style="opacity: 0;"
            playerTwoisWin = true;
            console.log(playerTwoisWin)
            break;
    }
    switch(playerTwoHP) {
        case 3:
            heart5.style="opacity: 0;"
            break;
        case 2:
            heart5.style="opacity: 0;"
            heart6.style="opacity: 0;"
            break;
        case 1:
            heart5.style="opacity: 0;"
            heart6.style="opacity: 0;"
            heart7.style="opacity: 0;"
            heart8.classList.add("pulse")
            break;
        case 0:
            heart5.style="opacity: 0;"
            heart6.style="opacity: 0;"
            heart7.style="opacity: 0;"
            heart8.classList.remove("pulse")
            heart8.style="opacity: 0;"
            playerOneisWin = true;
            console.log(playerOneisWin)
            break;
    }
}


export { playerOneHP, playerTwoHP, getData, CpuGameChoices, HealthStates, gameIsTrue, gamer, ImgCycle, playerOneisWin, playerTwoisWin };