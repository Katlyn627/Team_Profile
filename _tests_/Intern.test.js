// Created Inter constructor to run tests against data
const Intern = require('../lib/Intern');

//Created Intern object  to test school
test('creates an Intern object', () => {
    const intern = new Intern('name', 90, 'email', 'school');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Tests from getSchool()
test('gets employee school', () => {
    const intern = new Intern('name', 90, 'email', 'school');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Tests role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('name', 90, 'email', 'school');

    expect(intern.getRole()).toEqual("Intern");
}); 
