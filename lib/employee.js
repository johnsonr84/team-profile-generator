    class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
        // `name`
        this.employeeName = employeeName;
        // `id`
        this.employeeId = employeeId;
        // `email`
        this.employeeEmail = employeeEmail;
    }
    // `getName()`
    getName() {
        const newEmployeeloyeeName = response.employeeName;
        return newEmployeeloyeeName;
    }
    // `getId()`
    getId() {
        const newEmployeeloyeeId = response.employeeId;
        return newEmployeeloyeeId;
    }
    // `getEmail()`
    getEmail() {
        const newEmployeeloyeeEmail = response.employeeEmail;
        return newEmployeeloyeeEmail;
    }
    // `getRole()`&mdash;returns `'Employee'`
    getRole() {
        const employeeRole = "Employee";
        return employeeRole;
    }
}

module.exports = Employee;