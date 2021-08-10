const Employee = require('./employee');

class Manager extends Employee{
    constructor(employeeName, employeeId, employeeEmail, employeeNumber){
        super(employeeName, employeeId, employeeEmail);
        this.employeeNumber = employeeNumber;
        this.employeeRole = "Manager";
    }

    getNumber (){
        return this.employeeLink
       };
       
    getRole (){
        
        return this.employeeRole;
    };
    
}

module.exports = Manager;