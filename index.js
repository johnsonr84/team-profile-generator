// runs the application
const inquirer = require("inquirer");
const fs = require('fs');
const teamHTML = require('./src/teamHTML');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
var validator = require("email-validator");

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
                message: 'Please enter the manager Id with the format a###:',
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

function employee() {
    inquirer
        .prompt([ //What kind of employee to enter
            {
                type: 'list',
                name: 'employeeType',
                message: 'What kind of employee are you entering?',
                choices: ["Engineer", "Intern", "Finished"],
            },
        ]).then((response) => {

            if (response.employeeType === "Finished") {
                console.log("Thank you! Your information has been updated.");
            }
            //Engineer questions
            else if (response.employeeType === "Engineer") {
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'employeeName',
                            message: 'What is the employee name?',
                        },
                        {
                            type: 'input',
                            name: 'employeeId',
                            message: 'Please assign a new employee number with the format b###',
                        },
                        {
                            type: 'input',
                            name: 'employeeEmail',
                            message: 'What is the employee email address?',
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
                            name: 'employeeLink',
                            message: 'What is the GitHub user name for this employee?',
                        },
                    ]).then((response) => {
                        //run response through class Engineer
                        let newEmployee = new Engineer(response.employeeName, response.employeeId, response.employeeEmail, response.employeeLink);

                        //push new info to team file using the id as a unique variable name
                        const generateCard = teamHTML(newEmployee);
                        fs.appendFileSync("./src/team.js", `\n${generateCard}`);

                        employee();
                    });
            }
            else { //Intern questions
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'employeeName',
                            message: 'What is the employee name?',
                        },
                        {
                            type: 'input',
                            name: 'employeeId',
                            message: 'Please assign a new employee number with the format c###',
                        },
                        {
                            type: 'input',
                            name: 'employeeEmail',
                            message: 'What is the employee email address?',
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
                            name: 'employeeSchool',
                            message: 'What school did this intern attend?',
                        },
                    ]).then((response) => {
                        //run response through class Intern

                        let newEmployee = new Intern(response.employeeName, response.employeeId, response.employeeEmail, response.employeeSchool);
                        //appends to team.js
                        const generateCard = teamHTML(newEmployee);
                        fs.appendFileSync("./src/team.js", `\n${generateCard}`);
                        //restart employee loop
                        employee();
                    });
            };
        });
    };