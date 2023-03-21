
let team1Players = [];

let team2Players = [];


function gettingTeam1Players() {
    team1Players.push(document.getElementById("team1-player1-data").value)
    team1Players.push(document.getElementById("team1-player2-data").value)
    team1Players.push(document.getElementById("team1-player3-data").value)
    team1Players.push(document.getElementById("team1-player4-data").value)
}
console.log(team1Players)

function gettingTeam2Players() {
    team2Players.push(document.getElementById("team1-player1-data").value)
    team2Players.push(document.getElementById("team1-player2-data").value)
    team2Players.push(document.getElementById("team1-player3-data").value)
    team2Players.push(document.getElementById("team1-player4-data").value)
}
console.log(team2Players)

function gettingAllTeamsName() {
    document.getElementById("pop-up-screen").style.display = "block";
    
    gettingTeam1Players();
    gettingTeam2Players();
    for (var i = 0; i < team1Players.length; i++) {
        let playerID = "team1-player"+ (i+1) +"-data"
        let playerInput = document.getElementById(playerID)
        let spanErrorId = "team1-validation-Error"+ (i+1)
        if(playerInput.value == ''){
            document.getElementById(spanErrorId).style.display = 'block'
            playerInput.style.border = '1px solid red'
        }else{
            document.getElementById(spanErrorId).style.display = 'none'
            playerInput.style.border = 'none'
        }
    }

    for (var i = 0; i < team2Players.length; i++) {
        let playerID = "team2-player"+ (i+1) +"-data"
        let playerInput = document.getElementById(playerID)
        let spanErrorId = "team2-validation-Error"+ (i+1)
        if(playerInput.value == ''){
            document.getElementById(spanErrorId).style.display = 'block'
            playerInput.style.border = '1px solid red'
        }else{
            document.getElementById(spanErrorId).style.display = 'none'
            playerInput.style.border = 'none'
        }
    }

    // document.getElementById(pop-up-screen).style.display = 'block'
    // popUpClose();

}

// function popUpActive(){
//     document.getElementById(pop-up-screen).style.display = 'block'
// }

function popUpClose(){
    document.getElementById("pop-up-screen").style.display = 'none'
    document.getElementById("main-section-data").style.display = 'none'
}

// function validateTeamsInputs() {
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }