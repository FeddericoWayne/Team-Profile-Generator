// imports parent class Employee
const Employee = require("./Employee");

// class Engineer is an extension of class Employee
class Engineer extends Employee {

    constructor(name,id,email,username) {

        // calls the parent class's properties
        super(name,id,email);
        // adds a new property to the Engineer class
        this.github = username;
    };
   
    // adds new method to class
    getGithub() {
        return this.github;
    };

    // overrides parent class's getRole() method so it returns "Engineer" instead of "Employee"
    getRole() {
        return "Engineer";
    };
};


// exports Engineer class
module.exports = Engineer;