
export let numberOfTeams = 0;

// Choose number of teams
document.querySelector("#numberOfTeams").addEventListener("click", function(e) {
    numberOfTeams = document.querySelector("#teamCardanity").value;

    if(numberOfTeams > 1 && numberOfTeams < 9) {
        for(let i = 1; i <= numberOfTeams; i++) {
            generateTeam(i);
        }
        
        // Continuing to choosing team name
        delObjects(["numberOfTeams", "teamCardanity", "warning"]);
        document.querySelector("#instructions").innerHTML = "Input Team Names";
        
        document.querySelector("#continueButton").style.visibility = "visible";



    } else {
        //Please input number between 2 and 8
        document.querySelector("#warning").style.transform = "scale(1.2)";
        document.querySelector("#warning").style.color = "#FF5E2A";
        return;
    }


})


function generateTeam(teamNumber) {
    let teamHTML = `<div class="teamName" id="TeamNumber${teamNumber}"><h2 id="teamNameLabel">Team ${teamNumber}</h2><p class="teamNameText"id="teamName${teamNumber}"></p><p class="teamTimeText" id="teamTimer${teamNumber}"></p><input type="text" name="teamName" id="chooseName${teamNumber}" class="chooseTeamName"></div>`;

    document.querySelector("#teamNames").innerHTML += teamHTML;

    return true;

}

function hasChosenTeamNames() {
    for(let i = 1; i <= numberOfTeams; i++) { 
        if(document.querySelector(`#chooseName${i}`).value === "") {
            document.querySelector("#instructions").style.transform = "scale(1.2)";
            document.querySelector("#instructions").style.color = "#FF5E2A";

            return false;
        }
    }
    return true;
}

function delObjects(objects) {
    for(let i = 0; i < objects.length; i++) {
        document.querySelector(`#${objects[i]}`).remove();
    }
}

document.querySelector("#continueButton").addEventListener("click", function() {
    //If all teams have been given names, print out those names
    if(hasChosenTeamNames()) {
        for(let i = 1; i <= numberOfTeams; i++) {
            let currentName = document.querySelector(`#chooseName${i}`);
    
            document.querySelector(`#teamName${i}`).innerText = `${currentName.value}`;
            currentName.remove();
        }

        //Delete old stuff
        delObjects(["continueButton", "instructions"]);

        //Make new stuff
        document.querySelector("#teamNames").style.maxWidth = "1400px";
        document.querySelector("#teamNames").style.gap = "6em";

        document.querySelector("#startQuestion").style.visibility = "visible";
        document.querySelector("#startQuestion").innerHTML = "Start New Round";

        document.querySelector("#timerTeamQue").innerText += "Team Pressing Order:";
        document.querySelector("#timerTeamQue").style.visibility = "visible";

    }
})
