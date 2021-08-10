const Manager = require("../lib/manager");

describe("manager", () => {
    describe ("number", () => {
        it("should return new manager office number", () => {
         let employeeNumber = "69";
         let newEmployee = new Manager("","","",employeeNumber);
         expect(newEmployee.employeeNumber).toBe("69"); 
        })
    })
    describe ("role", () => {
        it("should return new manager role", () => {
         let employeeRole = "Manager";
         let newEmployee = new Manager(employeeRole);
         expect(newEmployee.employeeRole).toBe("Manager"); 
        })
    })
    
    describe("name", () => {

        it("should return new employee name", () => {
            let employeeName = "Conor McGregor";
            let newEmployee = new Manager(employeeName);
            expect(newEmployee.employeeName).toBe("Conor McGregor");
            console.log(newEmployee.employeeName);
        })
    })
    describe("id", () => {

        it("should return new employee id", () => {
            let employeeId = "a123";
            let newEmployee = new Manager("", employeeId);
            expect(newEmployee.employeeId).toBe("a123");
            console.log(newEmployee.employeeId);
        })
    })
    describe("email", () => {

        it("should return new employee email", () => {
            let employeeEmail = "cmcgregor@gmail.com";
            let newEmployee = new Manager("", "", employeeEmail);
            expect(newEmployee.employeeEmail).toBe("cmcgregor@gmail.com");
            console.log(newEmployee.employeeEmail);
        })
    })
})