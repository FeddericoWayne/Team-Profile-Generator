// imports parents class Employee
const Employee = require("./Employee");

// the Manager class is an extension of the Employee class
class Manager extends Employee {

    // takes as parameters: name, id, email, and office phone number
    constructor(name,id,email,number) {

        // calls parent class's properties
        super(name,id,email);
        // adds the new property to Manager
        this.officeNumber = number;
    };

    // overrides the getRole() method from Employee
    getRole() {
        return "Manager";
    };
};

// exports Manager class
module.exports = Manager;

