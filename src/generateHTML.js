function generateHTML(data) {
    console.log(data);
      return`
      <div class="col-4 mt-4">
          <div class="card h-100">
              <div class="card-header">
                  <h3>${manager.name}</h3>
                  <h4>Manager</h4><i class="material-icons">content_paste</i>
              </div>
              <div class="card-body">
                  <p class="id">ID: ${manager.id}</p>
                  <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                  <p class="office">Office Number: ${manager.officeNumber}</p>
              </div>
          </div>
      </div>
      `;
  };
  // Created Employee card for HTML page
  const generateEmployee = function (employee) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${employee.id}</p>
                <p class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></p>
            </div>
        </div>
    </div>
    `
};  
    // Created Manager card for HTML page
    const generateManager = function (manager) {
        return `
        <div class="col-4 mt-4">
            <div class="card h-100">
                <div class="card-header">
                    <h3>${manager.name}</h3>
                    <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
                </div>
                <div class="card-body">
                    <p class="id">ID: ${manager.id}</p>
                    <p class="email">Email: <a href="mailto:${manager.email}">${engineer.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/${manager.github}">${manager.github}</a></p>
                </div>
            </div>
        </div>
        `
    };  
  
  // Created Engineer card for HTML page
  const generateEngineer = function (employee) {
      return `
      <div class="col-4 mt-4">
          <div class="card h-100">
              <div class="card-header">
                  <h3>${engineer.name}</h3>
                  <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
              </div>
              <div class="card-body">
                  <p class="id">ID: ${engineer.id}</p>
                  <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                  <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
              </div>
          </div>
      </div>
      `
  };
  
  // Created intern card for HTML page 
  const generateIntern = function (intern) {
      return `
      <div class="col-4 mt-4">
          <div class="card h-100">
              <div class="card-header">
                  <h3>${intern.name}</h3>
                  <h4>Intern</h4><i class="material-icons">assignment_ind</i>
              </div>
              <div class="card-body">
                  <p class="id">ID: ${intern.id}</p>
                  <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                  <p class="school">School: ${intern.school}</p>
              </div>
      </div>
  </div>
      `
  };
  
  // Pushed data from index to create HTML page
  generateHTML = (data) => {
  
      // Created empty array for storing info to page
      pageArray = []; 
  
      for (let i = 0; i < data.length; i++) {
          const employee = data[i];
          const role = employee.getRole(); 
  
  
          // Calling manager function to create card
          if (role === 'Manager') {
              const managerCard = generateManager(employee);
              // Pushing data to create cards
              pageArray.push(managerCard);
          }
  
          // Calling engineer function to create card
          if (role === 'Engineer') {
              const engineerCard = generateEngineer(employee);
              // Pushing data to create cards
              pageArray.push(engineerCard);
          }
  
          // Calling intern function to created card 
          if (role === 'Intern') {
              const internCard = generateIntern(employee);
              // Pushing data to create cards
              pageArray.push(internCard);
          }
          
      }
  
      // Joined strings to create employee cards
      const employeeCards = pageArray.join('')
  
      //Created team variable to generate team page with employee card data
      const generateTeam = generateTeamPage(employeeCards); 
      return generateTeam;
  
  }
  
  // Generating My Team page
  const generateTeamPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    </html>
  `;
  }

  module.exports = generateHTML;