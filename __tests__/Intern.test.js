const Intern = require("/Users/fedderico/Desktop/Bootcamp/Team Profile Generator/lib/Intern.js");

describe ("Intern", () => {

    describe ("getName()",() => {
        it("Should return the new intern's name",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";
            const person = new Intern(name,id,email,school);

            expect(person.getName()).toEqual("Fred Wang");
        });
    });

    describe ("getId()",() => {
        it("Should return the new intern's ID",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";
            const person = new Intern(name,id,email,school);

            expect(person.getId()).toEqual("1120");
        });
    });

    describe ("getEmail()",() => {
        it("Should return the new intern's Email",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";
            const person = new Intern(name,id,email,school);

            expect(person.getEmail()).toEqual("jackiew1120@hotmail.com");
        });
    });

    describe ("getSchool()",() => {
        it("Should return the new intern's school name",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";
            const person = new Intern(name,id,email,school);

            expect(person.getSchool()).toEqual("bootcamp");
        });
    });

    describe ("getRole()",() => {
        it("Should return 'Intern'",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const school = "bootcamp";
            const person = new Intern(name,id,email,school);

            expect(person.getRole()).toEqual("Intern");
        });
    });
})