// Created employee class
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // Get name from input
    getName () {
        return this.name;
    }

    // Getting ID from input
    getId () {
        return this.id;
    }   

    // Getting email from input
    getEmail () {
        return this.email;
    }

    // // Getting office number from input
    // getofficeNumber(){
    //     return this.officeNumber;
    // }

    // Getting employee type from
    getRole () {
        return 'Employee'; 
    }
};

// to be exported 
module.exports = Employee; 