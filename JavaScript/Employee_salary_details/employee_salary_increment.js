
var Employee = [
    {
        "name": "Prathaemsh",
        "designation": "Full Stack Developer",
        "salary": "5000",
        "rating": "10"
    }
];

function calculateIncrementOfEmployee(Employee) {
    for (var E of Employee){
        var currrent_inrement = E.rating/2;
        var Incremented_salary = E.salary * currrent_inrement / 100;
        console.log(E.name + " has increased by " + currrent_inrement + "% into his" + Incremented_salary)
    }
}

calculateIncrementOfEmployee(Employee)