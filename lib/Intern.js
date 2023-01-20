// inports parent class Employee
const Employee = require("./Employee");

// class Intern is an extension of parent class Employee
class Intern extends Employee {

    constructor (name,id,email,school) {

        // calls parent class's properties
        super (name,id,email);
        // adds new property to the Intern class
        this.school = school;

    };

    // new method only for the Intern class
    getSchool() {
        return this.school;
    };

    // overrides the parent class's getRole() method to return "Intern"
    getRole() {
        return "Intern";
    };
}


// exports Intern class
module.exports = Intern;