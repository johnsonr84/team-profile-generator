const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeLink){
        super(employeeName, employeeId, employeeEmail);
        this.employeeLink = `https://github.com/${employeeLink}`;
        this.employeeRole = "Engineer";
    }
    getGithub (){
     return this.employeeLink
    };

    getRole (){
        return this.employeeRole;
    };
}

module.exports = Engineer;