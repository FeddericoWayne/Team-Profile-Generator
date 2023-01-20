const Employee = require("/Users/fedderico/Desktop/Bootcamp/Team Profile Generator/lib/Employee.js");

class Engineer extends Employee {

    constructor(name,id,email,username) {
        super(name,id,email);
        this.github = username;
    };
   
    getGithub() {
        return this.github;
    };

    getRole() {
        return "Engineer";
    };
};



module.exports = Engineer;