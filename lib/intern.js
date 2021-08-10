const Employee = require('./employee');

class Intern extends Employee{
    constructor(employeeName, employeeId, employeeEmail, employeeSchool){
        super(employeeName, employeeId, employeeEmail);
        this.employeeSchool = employeeSchool;
        this.employeeRole = "Intern";
    };
    getSchool (){
        return this.employeeSchool;
    };
    getRole (){
        
        return this.newRole;
    };
  
}


module.exports = Intern;