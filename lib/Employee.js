// Created employee constructors
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Returning name from user input
    getName () {
        return this.name;
    }

    // Return ID from user input
    getId () {
        return this.id;
    }   

    // Return email from user input
    getEmail () {
        return this.email;
    }

    // Return employee type from user input
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 