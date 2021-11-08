// Created packages for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('.');

// Created a function to write date to the README file

function writeToFile(fileName, data) {
    fs.writeFileSync(`${fileName}.html`, data,(err) => {
        if (err) throw err;
        console.log('Team Profile Created');
      }) 
}

// Create async function to initialize app and get inquirer prompts and answers

async function init() {
    // let answers = await userInput();
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the role of this team member?', 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the managers ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the managers email address?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the managers office number?",
        }
    ]).then((answers) => {
console.log(answers);
writeToFile(("index.html"),(generateHTML(answers)));
})
} 

// Function call to initialize application
init();