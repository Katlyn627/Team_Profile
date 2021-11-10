
// Importing Employee constructor from user input
const Employee = require("./Employee");

// Engineer constructor extends from Employee input
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Call employee contructor function
        super (name, id, email);

        this.github = github; 
    }

    // Return github user input
    getGithub () {
        return this.github;
    }

     // Get role as Engineer
    getRole () {
        return "Engineer";
    }
}

// Export engineer data
module.exports = Engineer; 