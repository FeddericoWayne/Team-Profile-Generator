// module imports
const inquirer = require("inquirer");
const fs = require("fs");
const template = require("./src/template-helper");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


// array of questions for manager information
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

// array of main menu question
const nextQuestion = [
    {
        type: "checkbox",
        name: "continue",
        message: "What would you like to do next?",
        choices: ["Add a new Enginieer","Add a new Intern","Finish building the team and generate team roster"]
    }
];

// array of qustions for engineer information
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

// array of questions for intern information
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



// initial question for the manager's information
function askQuestion() {

    // creates html file with <head> elements with the initialTemplate function
    fs.appendFile("./dist/html/index.html",template.initialTemplate(),() => {
    });

    // inquirer will prompt the user to answer questions about the new manager
    inquirer
    .prompt(managerQuestion)
    .then((data)=> {

        // check to see if the entered email is in the correct format
        // if not, to prompt the manager info questions again
        if(!data.email.includes("@")) {
            console.log("Please enter a valid email!")

            // wipes the html content clean for the re-do
            fs.writeFile("./dist/html/index.html","",() => {

                // make inquirer ask for manager info again
                askQuestion();
            });

        } else {        
            
            // instantiates new Manager with data collected from inquirer prompt
            let manager = new Manager(data.name,data.id,data.email,data.number);
    
                // appends the manager template to existing html file and makes inquirer prompt the main menu
                fs.appendFile("./dist/html/index.html",template.managerTemplate(manager),() => {
                    next();
                }
            );
        }


    })

};

// main menu question that allows the user to select what to do next
function next() {

    inquirer
    .prompt(nextQuestion)
    .then((data)=>{

        // if user chooses to enroll a new engineer
        if (data.continue[0] === "Add a new Enginieer") {

            // makes inquirer ask the user for the new engineer's information
            inquirer
            .prompt(engineerQuestion)
            .then((data)=>{

                // checks if the email entered is in the correct email format
                if(!data.email.includes("@")) {

                    // alerts user to enter a correct email
                    console.log("Please enter a valid email!");
                    // takes user back to main menu to start again
                    next();

                } else {

                    // instantiates new Engineer with information gathered from inquirer prompt
                    let engineer = new Engineer(data.name,data.id,data.email,data.username);

                    // uses enginieerTemplate to generate html content and appends it to existing html file and takes the user back to main menu
                    fs.appendFile("./dist/html/index.html",template.engineerTemplate(engineer),() => {
                        next();
                    });
                }

            }) 

        // if user chooses to enroll a new intern
        } else if (data.continue[0] === "Add a new Intern") {

            // makes inquirer gather information about the new intern
            inquirer
            .prompt(internQuestion)
            .then((data) => {

                // checks if email entered is in the correct format
                if(!data.email.includes("@")) {
                    // alerts user to enter a correct email
                    console.log("Please enter a valid email!");
                    // takes user back to main menu to start again
                    next();
                } else {

                    // instantiate new Intern 
                    let intern = new Intern(data.name,data.id,data.email,data.school);

                    // appends generated html content to exisiting html file by using internTemplate
                    fs.appendFile("./dist/html/index.html",template.internTemplate(intern),() => {

                        // brings user back to main menu
                        next();
                    });
                }

            })

        } else {

            // if user chooses to finish the process and complete the roster
            // the completeRoster function completes the html page
            fs.appendFile("./dist/html/index.html",template.completeRoster(),() => {

                // alerts user that the team roster is now ready to view
                console.log("Team Roster Generated!");
            })
        }
    })
};

// alerts user that process has begun
console.log("Let's build your team!");

// calls the initial question function
askQuestion();








 