// imports the Engineer class to be tested
const Engineer = require("../lib/Engineer");


describe ("Engineer",() => {

    // tests the getName() method inherited from parent class Employee
    describe ("getName()",() => {

        // describes what this method should do
        it("Should return the new engineer's name.",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const username = "FeddericoWayne"

            // instantiates new Engineer
            const person = new Engineer(name,id,email,username);
            
            // if person.getName() returns the person's name correctly, the test will pass
            expect(person.getName()).toEqual("Fred Wang");
        });

    });

    // tests the getId() method inherited from parent class Employee
    describe ("getId()",() => {

        // describes what this method should do
        it("Should return the new engineer's ID.",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const username = "FeddericoWayne"

            // instantiates a new Engineer
            const person = new Engineer(name,id,email,username);
            
            // if person.getId() method returns the person's ID correctly, the test will pass
            expect(person.getId()).toEqual("1120");
        });

    });

    // tests the getEmail() method inherited from parent class Employee
    describe ("getEmail()",() => {

        // describes what this method should do
        it("Should return the new engineer's Email.",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const username = "FeddericoWayne"

            // instantiates a new Engineer
            const person = new Engineer(name,id,email,username);
            
            // if person.getEmail() returns the person's email correctly, the test will pass
            expect(person.getEmail()).toEqual("jackiew1120@hotmail.com");
        });

    });

    // tests the getRole() method overridden by the Engineer class
    describe ("getRole()",() => {

        // describes what the method should do
        it("Should return 'Engineer'",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const username = "FeddericoWayne"

            // instantiates a new Engineer
            const person = new Engineer(name,id,email,username);
            
            // if person.getRole() returns "Engineer" instead of "Employee", the test will pass
            expect(person.getRole()).toEqual("Engineer");
            expect(person.getRole()).not.toEqual("Employee");
        });

    });

    // tests the getGithub() method that's specific to the class Engineer
    describe ("getGithub()",() => {

        // describes what this method should do
        it("Should return the GitHub username of the new engineer", () => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const username = "FeddericoWayne";

            // instantiates a new Engineer
            const person = new Engineer(name,id,email,username)

            // if person.getGithub() returns the person's GitHub username correctly, the test will pass
            expect(person.getGithub()).toEqual("FeddericoWayne");
        });

    });


})