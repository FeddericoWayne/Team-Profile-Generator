// imports the class to be tested
const Manager = require("../lib/Manager");

describe ("Manager",() => {

    // tests the getName() method inherited from parent class Employee
    describe ("getName()",() => {

        // describes what this method should do
        it("Should return the new manager's name",() => {
            // arranges variables 
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const officeNumber = "212-631-8099";

            // instantiate a new Manager 
            const person = new Manager(name,id,email,officeNumber);

            // if person.getName() returns "Fred Wang", the test will pass
            expect(person.getName()).toEqual("Fred Wang");
        });
    });

    // tests the getId() method inherited from parent class Employee
    describe ("getId()",() => {

        // describes what this method should do
        it("Should return the new manager's ID",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const officeNumber = "212-631-8099";

            // instantiates a new Manager
            const person = new Manager(name,id,email,officeNumber);

            // if person.getId() returns the person's id correctly, the test will pass
            expect(person.getId()).toEqual("1120");
        });
    });

    // tests the getEmail() method inherited from parent class Employee
    describe ("getEmail()",() => {

        // describes what this method should do
        it("Should return the new manager's Email",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const officeNumber = "212-631-8099";

            // instantiates new Manager
            const person = new Manager(name,id,email,officeNumber);

            // if person.getEmail() returns the persons's email correctly, the test will pass
            expect(person.getEmail()).toEqual("jackiew1120@hotmail.com");
        });
    });

    // tests the getRole() method overridden by class Manager
    describe ("getRole()",() => {

        // describes what this method should do
        it("Should return 'Manager'",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const officeNumber = "212-631-8099";

            // instantiates new Manager
            const person = new Manager(name,id,email,officeNumber);

            // if person.getRole() returns "Manager" instead of "Employee", the test will pass
            expect(person.getRole()).toEqual("Manager");
            expect(person.getRole()).not.toEqual("Employee");
        });
    });
})