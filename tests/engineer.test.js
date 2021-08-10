const Engineer = require("../lib/engineer");

describe("engineer", () => {
    describe("github", () => {
        it("should return new engineer github link", () =>{
            let employeeLink = "Rob Johnson";
            let newLink = new Engineer("","","",employeeLink);
            expect(newLink.employeeLink).toBe(`https://github.com/johnsonr84`);
        })
    })
    describe("name", () => {

        it("should return new employee name", () => {
            let employeeName = "Conor McGregor";
            let newEmployee = new Engineer(employeeName);
            expect(newEmployee.employeeName).toBe("Conor McGregor");
            console.log(newEmployee.employeeName);
        })
    })
    describe("id", () => {

        it("should return new employee id", () => {
            let employeeId = "a123";
            let newEmployee = new Engineer("", employeeId);
            expect(newEmployee.employeeId).toBe("a123");
            console.log(newEmployee.employeeId);
        })
    })
    describe("email", () => {

        it("should return new employee email", () => {
            let employeeEmail = "cmcgregor@gmail.com";
            let newEmployee = new Engineer("", "", employeeEmail);
            expect(newEmployee.employeeEmail).toBe("cmcgregor@gmail.com");
            console.log(newEmployee.employeeEmail);
        })
    })
    describe ("role", () => {
        it("should return new engineer role", () => {
         let employeeRole = "Engineer";
         let newEmployee = new Engineer(employeeRole);
         expect(newEmployee.employeeRole).toBe("Engineer"); 
        })
    })

})