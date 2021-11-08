// Importing Employee constructor from user input
const Employee = require('./Employee');

// Manager constructor extends from employee data
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // Calls manager constructor function
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // Get role as Manager
    getRole () {
        return "Manager";
    }
}

// Export Manager data
module.exports = Manager; 