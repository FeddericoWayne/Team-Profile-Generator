// function to initiate the html page
function initialTemplate() {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../dist/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@600&family=Roboto+Condensed&display=swap" rel="stylesheet">
    <title>My Team</title>
</head>
<body>
    <header id="header">
        <h1 id="header-text">TEAM ROSTER</h1>
    </header>
    <div id=team-wrapper>
`
};

// function to generate and return manager div with information gathered by inquirer
function managerTemplate(manager) {
    return `
        <div id=manager-wrapper>
            <div class="card">
                <h3>${manager.getName().toUpperCase()}</h3>
                <h4>${manager.getRole().toUpperCase()}</h4>
                <img src="../../assets/images/manager.png" alt="manager-icon">
            </div>
            <p>ID: ${manager.getId()}</p>
            <p>Email: <a href="mailto:${manager.getEmail()}" target="blank">${manager.getEmail()}</a></p>
            <p>Office Number: ${manager.officeNumber}</p>
        </div>
    `
};

// function to generate and return engineer div with information gathered by inquirer
function engineerTemplate(engineer) {
    return `
        <div id=engineer-wrapper>
            <div class="card">
                <h3>${engineer.getName().toUpperCase()}</h3>
                <h4>${engineer.getRole().toUpperCase()}</h4>
                <img src="../../assets/images/engineer.png" alt="engineer-icon">
            </div>
            <p>ID: ${engineer.getId()}</p>
            <p>Email: <a href="mailto:${engineer.getEmail()}" target="blank">${engineer.getEmail()}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.getGithub().toLowerCase()}" target="blank">${engineer.getGithub()}</a></p>

        </div>
    `
}

// function to generate and return intern div with information gathered by inquirer
function internTemplate(intern) {
    return `
        <div id=intern-wrapper>
            <div class="card">
                <h3>${intern.getName().toUpperCase()}</h3>
                <h4>${intern.getRole().toUpperCase()}</h4>
                <img src="../../assets/images/intern.png" alt="intern-icon">
            </div>
            <p>ID: ${intern.getId()}</p>
            <p>Email: <a href="mailto:${intern.getEmail()}" target="blank">${intern.getEmail()}</a></p>
            <p>School: ${intern.getSchool()}</p>
        </div>
    `
}

// function to close and complete the html page
function completeRoster() {
    return`
    </div>
</body>
</html>
`
}


// exports all template functions 
module.exports = {
    initialTemplate,
    managerTemplate,
    engineerTemplate,
    internTemplate,
    completeRoster,
}