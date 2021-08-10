const index = require("../index")

function teamHTML(newEmployee) {
    console.log(newEmployee)

    if (newEmployee.employeeRole === "Manager") {
        //generate code to go in index.html
        return (`
    const ${newEmployee.employeeId} = \`
    <div class='card' style='width: 18rem;'>
    <div class='card-header'>
    <h2>${newEmployee.employeeName}</h2>
    <h3>${newEmployee.employeeRole}</h3>
    </div>  
    <div class='card-body'>    
    <p class='card-text'>Employee ID: ${newEmployee.employeeId}</p>
    <p class='card-text'>Email: <a href='mailto:${newEmployee.employeeEmail}'>${newEmployee.employeeEmail}</a></p>
    <p class='card-text'>Office Number: ${newEmployee.employeeNumber}</p>
    </div>
    </div>\`
    $(".card-deck").empty();
    $(".card-deck").append(${newEmployee.employeeId})`
        );
    }
}
module.exports = teamHTML;