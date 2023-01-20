class Employee {

    // constructor that takes as parameters name, id, and email
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    // methods included in the Employee class
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };   
}


// exports Employee class
module.exports = Employee;






