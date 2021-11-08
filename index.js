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

// Created manager Prompts
const addManager = async () => {
    const managerInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the manager of this team?',
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
    ]);
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager(name, id, email, officeNumber);
    teamArray.push(manager);
    console.log(manager);
};

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
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
        },
        {
            type: 'input',
            name: 'id',
            message: "What is employees ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is employees email address?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is employees github username?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the name of the interns school?",
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        //Storing employee data and pushing to array

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
// Create function to write file and push to index HTML page
const writeFile = data => {
    fs.writeFile('src/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Team profile created! Please check HTML")
        }
    })
}; 

// Create add manager function, then add employee and add to teamArray
addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
// then write data to HTML page
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
