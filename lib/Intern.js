function generateIntern(data){
    console.log(data);
// Importing Employee constructor from user input
const Employee = require('./Employee');

// Manager constructor extends from employee data
class Intern extends Employee {
    constructor (name, id, email, officeNumber) {
        // Calls manager constructor function
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // Get role as Intern
    getRole () {
        return "Intern";
    }
}
}

// Export Manager data
module.exports = generateIntern;