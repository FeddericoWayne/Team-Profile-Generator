// imports the Employee class for testing
const Employee = require("../lib/Employee");

describe ("Employee",() => {

    // tests the getName() method
    describe ("getName()",() => {

        // describes what this method should do
        it("Should return the new employee's name.",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"

            // instantiates a new Employee
            const person = new Employee(name,id,email);
            
            // if person.getName() returns the person's name correctly, the test will pass
            expect(person.getName()).toEqual("Fred Wang");
        })


    });

    // tests the getId() method
    describe ("getId()",() => {

        // describes what this method should do
        it("Should return the new employee's ID.",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"

            // instantiates a new Employee
            const person = new Employee(name,id,email);
            
            // if person.getId() returns the person's ID correctly, the test will pass
            expect(person.getId()).toEqual("1120");
        })

    });

    // tests the getEmail() method
    describe ("getEmail()",() => {

        // describes what the method should do
        it("Should return the new employee's Email.",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"

            // instantiates a new Employee
            const person = new Employee(name,id,email);
            
            // if person.getEmail() returns the person's email correctly, the test will pass
            expect(person.getEmail()).toEqual("jackiew1120@hotmail.com");
        })

    });

    // tests the getRole() method
    describe ("getRole()",() => {

        // describes what the method should do
        it("Should return 'Employee'",() => {

            // arranges variables
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"

            // instantiates a new Employee
            const person = new Employee(name,id,email);
            
            // if person.getRole() returns "Employee", the test will pass
            expect(person.getRole()).toEqual("Employee");
        })

    });
  

})