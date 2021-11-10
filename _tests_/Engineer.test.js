// Created Engineer constructor to test against data
const Engineer = require('../lib/Engineer');

// Created Engineer object to test email
test('creates an Engineer object', () => {
    const engineer = new Engineer('name', 90, 'email');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Test to determine github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('name', 90, 'email');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Test to determine role from getRole()
test('gets role of employee', () => {
    const engineer = new Engineer('name', 90, 'email');

    expect(engineer.getRole()).toEqual("Engineer");
});