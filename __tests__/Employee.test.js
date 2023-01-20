const Employee = require("/Users/fedderico/Desktop/Bootcamp/Team Profile Generator/lib/Employee.js");

describe ("Employee",() => {

    describe ("getName()",() => {

        it("Should return the new employee's name.",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const person = new Employee(name,id,email);
            
            expect(person.getName()).toEqual("Fred Wang");
        })


    });

    describe ("getId()",() => {

        it("Should return the new employee's ID.",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const person = new Employee(name,id,email);
            
            expect(person.getId()).toEqual("1120");
        })

    });

    describe ("getEmail()",() => {

        it("Should return the new employee's Email.",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const person = new Employee(name,id,email);
            
            expect(person.getEmail()).toEqual("jackiew1120@hotmail.com");
        })

    });

    describe ("getRole()",() => {

        it("Should return 'Employee'",() => {
            const name = "Fred Wang";
            const id = "1120";
            const email = "jackiew1120@hotmail.com"
            const person = new Employee(name,id,email);
            
            expect(person.getRole()).toEqual("Employee");
        })

    });
  

})