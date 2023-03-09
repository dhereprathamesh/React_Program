
// which is the best option for travel ? OR Find the smallest duration

var travel_options = [
    {
        "option": "car",
        "duration": "30",
        "type": "mins"

    },
    {
        "option": "bus",
        "duration": "40",
        "type": "mins"

    },
    {
        "option": "bike",
        "duration": "20",
        "type": "mins"

    },
]

for(var i = 0; i < travel_options.length; i++){
    if(travel_options[i].duration < travel_options[i+1].duration ){
        travel_options[i].duration++;
    }  else {
        console.log(travel_options[i].option + " is the best option ")
    }
}