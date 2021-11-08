// Importing Employee constructor from user input
const Employee = require('./Employee');

// Engineer constructor extends from Employee input
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // Call employee contructor function
        super (name, id, email); 

        this.school = school; 
    }

    // Return school user input
    getSchool () {
        return this.school;
    }

    // Get role as Intern
    getRole () {
        return "Intern";
    }
}

// Export engineer data
module.exports = Intern; 