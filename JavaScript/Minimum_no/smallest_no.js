
// Finf the smallest no in Array

var number = [2,3,4,5,1];
var minimumNumber = number[0];
for (var i=1; i<=number.length-1; i++){
    if(number[i]<minimumNumber){
        minimumNumber=number[i];
    }
}
console.log(minimumNumber)
