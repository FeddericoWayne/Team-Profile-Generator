const Engineer = require("../lib/Engineer");

describe ("Engineer",() => {

    describe ("getName()",() => {

        it("Should return the new engineer's name.",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const username = "FeddericoWayne"
            const person = new Engineer(name,id,email,username);
            
            expect(person.getName()).toEqual("Fred Wang");
        });

    });

    describe ("getId()",() => {

        it("Should return the new engineer's ID.",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const username = "FeddericoWayne"
            const person = new Engineer(name,id,email,username);
            
            expect(person.getId()).toEqual("1120");
        });

    });

    describe ("getEmail()",() => {

        it("Should return the new engineer's Email.",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const username = "FeddericoWayne"
            const person = new Engineer(name,id,email,username);
            
            expect(person.getEmail()).toEqual("jackiew1120@hotmail.com");
        });

    });

    describe ("getRole()",() => {

        it("Should return 'Engineer'",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const username = "FeddericoWayne"
            const person = new Engineer(name,id,email,username);
            
            expect(person.getRole()).toEqual("Engineer");
        });

    });

    describe ("getGithub()",() => {
        it("Should return the GitHub username of the new engineer", () => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com";
            const username = "FeddericoWayne";

            const person = new Engineer(name,id,email,username)

            expect(person.getGithub()).toEqual("FeddericoWayne");
        });

    });


})