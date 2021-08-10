const Employee = require("../lib/employee");

describe("employee", () => {

    describe("name", () => {

        it("should return new employee name", () => {
            let employeeName = "Conor McGregor";
            let newEmployee = new Employee(employeeName);
            expect(newEmployee.employeeName).toBe("Conor McGregor");
            console.log(newEmployee.employeeName);
        })
    })
    describe("id", () => {

        it("should return new employee id", () => {
            let employeeId = "a123";
            let newEmployee = new Employee("", employeeId);
            expect(newEmployee.employeeId).toBe("a123");
            console.log(newEmployee.employeeId);
        })
    })
    describe("email", () => {

        it("should return new employee email", () => {
            let employeeEmail = "cmcgregor@gmail.com";
            let newEmployee = new Employee("", "", employeeEmail);
            expect(newEmployee.employeeEmail).toBe("cmcgregor@gmail.com");
            console.log(newEmployee.employeeEmail);
        })
    })
})