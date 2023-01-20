const Employee = require("./Employee");

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