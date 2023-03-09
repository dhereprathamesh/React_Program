
// Find the Name and id of students who have passed with 50 percentage

var score_details = [
    {
        "name": "Prathamesh",
        "id": "1",
        "score": "75"
    },
    {
        "name": "Prashant",
        "id": "2",
        "score": "45"
    },
    {
        "name": "Farhan",
        "id": "3",
        "score": "50"
    },
    {
        "name": "Pathan",
        "id": "4",
        "score": "65"
    },
    {
        "name": "sohel",
        "id": "5",
        "score": "95"
    }
   ]

var totalscore = 100;
var passing_percentage = 50;

for(var i = 0; i < score_details.length; i++ ){
    if(score_details[i].score> passing_percentage){
        console.log("Congralutation " + score_details[i].name + " You have passed successfully with " + score_details[i].score  +  " Percentage and your ID is " +  score_details[i].id )
    }
    else if(score_details[i].score == passing_percentage){
        console.log("ohh ho ho " + score_details[i].name + " You have just Passed and your ID is " + score_details[i].id )
    }
    else{
        console.log("Sorry " + score_details[i].name + " Be Prepared for next time and your ID is " + score_details[i].id )
    }
}

