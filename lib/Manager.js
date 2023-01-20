const Employee = require("/Users/fedderico/Desktop/Bootcamp/Team Profile Generator/lib/Employee.js");

class Manager extends Employee {

    constructor(name,id,email,number) {
        super(name,id,email);
        this.officeNumber = number;
    };

    getRole() {
        return "Manager";
    };
};

module.exports = Manager;

