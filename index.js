const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./src/template-helper");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// inquirer prompt questions
const managerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Please enter the team manager's name:",
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the team manager's employee ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the team manager's email address:"
    },
    {
        type: "input",
        name: "number",
        message: "Please enter the team manager's office number:"
    }
]; 

const nextQuestion = [
    {
        type: "checkbox",
        name: "continue",
        message: "What would you like to do next?",
        choices: ["Add a new Enginieer","Add a new Intern","Finish building the team and generate team roster"]
    }
];

const engineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Please enter the name of the new engineer:"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the engineer's employee ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the team manager's email address:"
    },
    {
        type: "input",
        name: "username",
        message: "Please enter the engineer's GitHub username:"
    },
];

const internQuestion = [
    {
        type: "input",
        name: "name",
        message: "Please enter the name of the new intern:"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the intern's ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the email address of the new intern:"
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the school name of the new intern:"
    },
];



// function to get data from inquirer prompts and to use template helper to appendFile with fs 
function askQuestion() {

    console.log("Let's build your team!");

    fs.appendFile("./dist/html/index.html",template.initialTemplate(),() => {
    });

    inquirer
    .prompt(managerQuestion)
    .then((data)=> {

        // add validation here and add test to test.js

        let manager = new Manager(data.name,data.id,data.email,data.number);

            fs.appendFile("./dist/html/index.html",template.managerTemplate(manager),() => {
                next();
            });

    })

};

function next() {

    inquirer
    .prompt(nextQuestion)
    .then((data)=>{
        if (data.continue[0] === "Add a new Enginieer") {

            inquirer
            .prompt(engineerQuestion)
            .then((data)=>{

                // add validation here and add test to test.js

                let engineer = new Engineer(data.name,data.id,data.email,data.username);

                fs.appendFile("./dist/html/index.html",template.engineerTemplate(engineer),() => {
                    next();
                });
            }) 

        } else if (data.continue[0] === "Add a new Intern") {

            inquirer
            .prompt(internQuestion)
            .then((data) => {

                // add validation here and add test to test.js 

                let intern = new Intern(data.name,data.id,data.email,data.school);

                fs.appendFile("./dist/html/index.html",template.internTemplate(intern),() => {
                    next();
                });
            })

        } else {

            fs.appendFile("./dist/html/index.html",template.completeRoster(),() => {
                console.log("Team Roster Generated!");
            })
        }
    })
};

// calls the initial question function
askQuestion();








 