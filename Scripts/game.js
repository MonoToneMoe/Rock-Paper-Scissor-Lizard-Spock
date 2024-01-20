import { gameModeSet, gameIsTrue } from "./app.js"

var playOptions = ["Paper", "Rock", "Lizard", "Spock", "Scissors"];

let playerOneHP;
let playerTwoHP;

let playerOneChoice = "";
let playerTwoChoice = "";
let cpuChoice = "";

let PlayerOneChoiceMade = false;
let playerTwoChoiceMade = false;
let CpuChoiceMade = false;

function gamer() {
    let heart1 = document.getElementById("heart1");
    let heart2 = document.getElementById("heart2");
    let heart3 = document.getElementById("heart3");
    let heart4 = document.getElementById("heart4");
    let heart5 = document.getElementById("heart5");
    let heart6 = document.getElementById("heart6");
    let heart7 = document.getElementById("heart7");
    let heart8 = document.getElementById("heart8");

    let playerOneImg = document.getElementById("playerOneImg");
    let playerTwoImg = document.getElementById("playerTwoImg");
    let rockButton = document.getElementById("rockButton");
    let paperButton = document.getElementById("paperButton");
    let scissorsButton = document.getElementById("scissorsButton");
    let lizardButton = document.getElementById("lizardButton");
    let spockButton = document.getElementById("spockButton");
    playerOneHP = gameModeSet;
    console.log(playerOneHP)
    playerTwoHP = playerOneHP;
    rockButton.addEventListener('click', function(){
        playerOneChoice = "Rock";
        CpuGameChoices(playerOneChoice, cpuChoice);
    });
    paperButton.addEventListener('click', function(){
        playerOneChoice = "Paper";
        CpuGameChoices(playerOneChoice, cpuChoice);
    });
    scissorsButton.addEventListener('click', function(){
        playerOneChoice = "Scissors";
        CpuGameChoices(playerOneChoice, cpuChoice);
    });
    lizardButton.addEventListener('click', function(){
        playerOneChoice = "Lizard";
        CpuGameChoices(playerOneChoice, cpuChoice);
    });
    spockButton.addEventListener('click', function(){
        playerOneChoice = "Spock";
        CpuGameChoices(playerOneChoice, cpuChoice);
    });
}


async function getData(){
    let response = await fetch("https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption");
    let data = await response.text();
    console.log(data);
    return data;
}

async function CpuGameChoices(playerOneChoice, cpuChoice) {
    playerOneChoice = await playerOneChoice;
    playerTwoChoice = await getData();
    playerOneImg.src=`../Assets/Imgs/${playerOneChoice}.png`;
    playerTwoImg.src=`../Assets/Imgs/${playerTwoChoice}.png`;

    let playerOne

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
            break;
    }
}


export { playerOneHP, playerTwoHP, getData, CpuGameChoices, HealthStates, gameIsTrue, gamer };