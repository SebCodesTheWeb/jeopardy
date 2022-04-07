
let numberOfTeams = 0;

// input for number of teams
document.querySelector("#numberOfTeams").addEventListener("click", function(e) {
    // e.preventDefault();
    numberOfTeams = document.querySelector("#teamCardanity").value;

    if(numberOfTeams > 1 && numberOfTeams < 9) {
        for(let i = 1; i <= numberOfTeams; i++) {
            generateTeam(i);
        }

        // Continuing to next step with cleanup
        document.querySelector("#numberOfTeams").remove();
        document.querySelector("#teamCardanity").remove();
        document.querySelector("#instructions").innerHTML = "Input Team Names";
        
        document.querySelector("#warning").remove();


    } else {
        document.querySelector("#selectTeams").innerHTML += "<p id='warning' style='margin-top: 1rem;'>(Reload and input number between 2 and 8)</p>"
    }
    

})


function generateTeam(teamNumber) {
    let teamHTML = `<div class="teamName"><h2>Team ${teamNumber}</h2><input type="text" name="teamName" id="teamName${teamNumber}" class="chooseTeamName"></div>`;

    document.querySelector("#teamNames").innerHTML += teamHTML;

    document.querySelector("#continueButton").style.visibility = "visible";

    return true;

}

document.querySelector("#continueButton").addEventListener("click", function() {
    
})