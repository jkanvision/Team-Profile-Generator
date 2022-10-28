const Employee = require("./Employee");

class Manager extends Employee {
    constructor(empName, id, email, office) {
        super(empName, id, email);
        this.office = office; 
    }

    getRole() {
        return "Manager";
    }

    getOffice() {
        return this.office;
    }

}

module.exports = Manager;