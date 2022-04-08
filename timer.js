import { numberOfTeams } from './main.js'

let startTime = 0;
let outputedTeamTimes = 1; //Time pressing order
let outputedTeamNumbers = [];

document.querySelector("#startQuestion").addEventListener("click", function() {
    cleanTimers();
    resetTimer();
    startTimer();
    outputedTeamNumbers = [];
    outputedTeamTimes = 1;

    startTime = Date.now();
    document.querySelector("#timerTeamQue").innerText = "Team Pressing Order: "

    window.addEventListener("keydown", function (event) {
        if (event.defaultPrevented) {
          return; 
        }
      
        switch (event.key) {
          case "ArrowDown":
            outputTeamTime(1);
            break;
            
          case "ArrowUp":
            outputTeamTime(2);
            break;
    
          case "ArrowLeft":
            outputTeamTime(3);
            break;
    
          case "ArrowRight":
            outputTeamTime(4);
            break;
    
          case "s": 
            outputTeamTime(5);
            break;
    
          case "w": 
            outputTeamTime(6);
            break;
    
          case "a": 
            outputTeamTime(7);
            break;
    
          case "d": 
            outputTeamTime(8);
            break;
    
          default:
            return; // Quit if nothing else.
        }
      
        event.preventDefault();
      }, true);
})

function outputTeamTime(teamNumber) {
    //Checking if team name has aldready been outputed
    for(let i=0; i <= outputedTeamNumbers.length; i++) {
        if(outputedTeamNumbers[i] === teamNumber) {
            return;
        } else if(i === outputedTeamNumbers.length) {
            outputedTeamNumbers.push(teamNumber);
            break;
        }
    }

    //Outputting the time it took for team to press button
    let timeTaken = Date.now() - startTime;
    document.querySelector(`#teamTimer${teamNumber}`).innerText = `${timeTaken} ms`
    if(outputedTeamTimes < parseInt(numberOfTeams)) {
        document.querySelector("#timerTeamQue").innerHTML += `Team ${teamNumber}, `;
        outputedTeamTimes++;
    } else {
        document.querySelector("#timerTeamQue").innerHTML += `Team ${teamNumber}, `;
        stopTimer();
    }
}

function cleanTimers() {
    for(let i = 1; i <= numberOfTeams; i++) {
        document.querySelector(`#teamTimer${i}`).innerText = `${0} ms`
    }
}

//Setting up the stopwatch: =============================================
const timer = document.getElementById('stopwatch');

let tenthSec = 0;
let stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function timerCycle() {
    if (stoptime == false) {
    tenthSec = parseInt(tenthSec);

    tenthSec +=1;
    timer.innerHTML = tenthSec + "0ms";

    setTimeout(timerCycle, 10);
  }
}

function resetTimer() {
    timer.innerHTML = "0000ms";
    stoptime = true;
    tenthSec = 0;
}