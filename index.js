// runs the application
const mysql = require("mysql");
const inquirer = require("inquirer");
const Manager = require('./lib/manager');

function manager() {
    //Manager info
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'employeeName',
                message: 'What is the Team Manager name?',
            },
            {
                type: 'input',
                name: 'employeeId',
                message: 'Please enter the manager Id with the format m###:',
            },
            {
                type: 'input',
                name: 'employeeEmail',
                message: 'What is the manager email address?',
                validate: function (input) {
                    let test = validator.validate(input)
                    if (test === false) {
                        console.log("Please enter a valid email.")
                    }
                    return test
                }
            },
            {
                type: 'input',
                name: 'employeeNumber',
                message: 'What is the manager office number?',

            },
        ]).then((response) => {
            
            let newEmployee = new Manager(response.employeeName, response.employeeId, response.employeeEmail, response.employeeNumber);

            const generateCard = teamHTML(newEmployee);
            fs.writeFileSync("./src/team.js", `\n${generateCard}`);
           
            employee();
        })
};

manager();