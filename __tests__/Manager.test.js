const Manager = require("/Users/fedderico/Desktop/Bootcamp/Team Profile Generator/lib/Manager.js");

describe ("Manager",() => {

    describe ("getName()",() => {

        it("Should return the new manager's name",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const officeNumber = "631-8099";
            const person = new Manager(name,id,email,officeNumber);

            expect(person.getName()).toEqual("Fred Wang");
        });
    });

    describe ("getId()",() => {

        it("Should return the new manager's ID",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const officeNumber = "631-8099";
            const person = new Manager(name,id,email,officeNumber);

            expect(person.getId()).toEqual("1120");
        });
    });

    describe ("getEmail()",() => {

        it("Should return the new manager's Email",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const officeNumber = "631-8099";
            const person = new Manager(name,id,email,officeNumber);

            expect(person.getEmail()).toEqual("jackiew1120@hotmail.com");
        });
    });

    describe ("getRole()",() => {

        it("Should return 'Manager'",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const officeNumber = "631-8099";
            const person = new Manager(name,id,email,officeNumber);

            expect(person.getRole()).toEqual("Manager");
        });
    });
})