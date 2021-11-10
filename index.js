// Created link to generate html page
const generateHTML = require('./src/generateHTML');

// Created variables to link library to cards
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// Created fs and iquirer variables
const fs = require('fs'); 
const inquirer = require('inquirer');

// Created empty team array
const teamArray = []; 
// Created start of manager prompts 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the managers name?', 
            // Validated correct data was entered
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter manager's name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your ID number?",
            // Validated correct data was entered
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a valid number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?",
            // Validated correct data was entered
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your office number?",
            // Validated correct data was entered
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};
// Created inquirer to add employees to team
const addEmployee = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What is your role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is your name?", 
            // Validated correct data was entered
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your ID number?",
            // Validated correct data was entered
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a valid ID number!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email address?",
            // Validated correct data was entered
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email address!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your Github user name?",
            // Validated correct data was entered
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter a valid Github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What school did you or are you currently attending?",
            // Validated correct data was entered
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // Created data to add to HTML page

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};


// Created  a function to generate HTML page using correct file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // If there is an error log it
        if (err) {
            console.log(err);
            return;
        // Colsole the message when teams profile has been created
        } else {
            console.log("Team profile had been successfully created! Please check the correct the index.html file that appeared")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });