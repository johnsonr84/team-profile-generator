const Intern = require("../lib/intern");

describe("intern", () => {
    it("should return new intern school", () =>{
        let employeeSchool = "University of Utah";
        let newSchool = new Intern("","","",employeeSchool);
        expect(newSchool.employeeSchool).toBe(employeeSchool);
    })
    
    describe("name", () => {

        it("should return new employee name", () => {
            let employeeName = "Conor McGregor";
            let newEmployee = new Intern(employeeName);
            expect(newEmployee.employeeName).toBe("Conor McGregor");
            console.log(newEmployee.employeeName);
        })
    })
    describe("id", () => {

        it("should return new employee id", () => {
            let employeeId = "a123";
            let newEmployee = new Intern("", employeeId);
            expect(newEmployee.employeeId).toBe("a123");
            console.log(newEmployee.employeeId);
        })
    })
    describe("email", () => {

        it("should return new employee email", () => {
            let employeeEmail = "cmcgregor@gmail.com";
            let newEmployee = new Intern("", "", employeeEmail);
            expect(newEmployee.employeeEmail).toBe("cmcgregor@gmail.com");
            console.log(newEmployee.employeeEmail);
        })
    })
    
    describe ("role", () => {
        it("should return new manager role", () => {
         let employeeRole = "Intern";
         let newEmployee = new Intern(employeeRole);
         expect(newEmployee.employeeRole).toBe("Intern"); 
        })
    })
})