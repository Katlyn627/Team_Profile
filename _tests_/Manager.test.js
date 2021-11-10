// Created Manager constructor to test against data
const Manager = require('../lib/Manager');

// Created Manager object to test office number
test('creates an Manager object', () => {
    const manager = new Manager('name', 90, 'email', 50);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Test to determine role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('name', 90, 'email',);

    expect(manager.getRole()).toEqual("Manager");
}); 