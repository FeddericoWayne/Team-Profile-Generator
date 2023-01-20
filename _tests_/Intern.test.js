// imports the class to be tested
const Intern = require("../lib/Intern");


describe ("Intern", () => {

    // tests the getName() method inherited from parent class Employee
    describe ("getName()",() => {

        // describes what this method should do
        it("Should return the new intern's name",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";

            // instantiate a new Intern
            const person = new Intern(name,id,email,school);

            // if the person.getName() returns the person's name correctly, the test will pass
            expect(person.getName()).toEqual("Fred Wang");
        });
    });

    // tests the getId() method inherited from parent class Employee
    describe ("getId()",() => {

        // describes what this method should do
        it("Should return the new intern's ID",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";
            // instantiates a new Intern
            const person = new Intern(name,id,email,school);

            // if person.getId() returns the persons's id correctly, the test will pass
            expect(person.getId()).toEqual("1120");
        });
    });

    // tests the getEmail() method inherited from parent class Employee
    describe ("getEmail()",() => {

        // describes what this method should do
        it("Should return the new intern's Email",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";

            // instantiates a new Intern
            const person = new Intern(name,id,email,school);

            // if person.getEmail() returns the person's email correctly, the test will pass
            expect(person.getEmail()).toEqual("jackiew1120@hotmail.com");
        });
    });

    // tests the getSchool() method that's only for the class Intern
    describe ("getSchool()",() => {

        // describes what the method should do
        it("Should return the new intern's school name",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";
            
            // instantiates a new Intern
            const person = new Intern(name,id,email,school);

            // if person.getSchool() returns the person's school name correcly, the test will pass
            expect(person.getSchool()).toEqual("bootcamp");
        });
    });

    // tests the getRole() method that's overridden by the Intern class
    describe ("getRole()",() => {

        // describes what the method should do
        it("Should return 'Intern'",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";
            // instantiate a new Intern
            const person = new Intern(name,id,email,school);

            // if person.getRole() returns "Intern" instead of "Employee", the test will pass
            expect(person.getRole()).toEqual("Intern");
            expect(person.getRole()).not.toEqual("Employee");
        });
    });
})