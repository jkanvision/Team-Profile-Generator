const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");

const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return `<div class="card bg-light mb-3" style="max-width: 18rem;">
        <div class="card-header bg-danger text-white font-weight-bolder text-center">
          <h3>${Manager.empName}</h3>
          <h4>Manager</h4>
        </div>
        <div class="card-body">
          <div class="form-group mt-3 p-2">
            <div class="my-2">
              <input class="form-control" type="text" placeholder="${Manager.id}" readonly>
            </div>
            <div class="my-2">
              <input class="form-control" type="text" placeholder="${Manager.email}" readonly>
            </div>
            <div class="my-2">
              <input class="form-control" type="text" placeholder="${Manager.office}" readonly>
            </div>

          </div>
        </div>
      </div>
    </div>
         `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `<div class="col-12 col-md-4 ">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
          <div class="card-header bg-primary text-white font-weight-bolder text-center">
            <h3>${Engineer.empName}</h3>
            <h4>Engineer</h4>
          </div>
          <div class="card-body">
            <div class="form-group mt-3 p-2">
              <div class="my-2">
                <input class="form-control" type="text" placeholder="${Engineer.id}" readonly>
              </div>
              <div class="my-2">
                <input class="form-control" type="text" placeholder="${Engineer.email}" readonly>
              </div>
              <div class="my-2">
                <input class="form-control" type="text" placeholder="${Engineer.github}" readonly>
              </div>

            </div>
          </div>
        </div>
      </div>
        `;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `<div class="col-12 col-md-4 ">
        <div class="card bg-light mb-3" style="max-width: 18rem;">
          <div class="card-header bg-success text-white font-weight-bolder text-center">
            <h3>${Intern.empName}</h3>
            <h4>Intern</h4>
          </div>
          <div class="card-body">
            <div class="form-group mt-3 p-2">
              <div class="my-2">
                <input class="form-control" type="text" placeholder="${Intern.id}" readonly>
              </div>
              <div class="my-2">
                <input class="form-control" type="text" placeholder="${Intern.email}" readonly>
              </div>
              <div class="my-2">
                <input class="form-control" type="text" placeholder="${Intern.school}" readonly>
              </div>

            </div>
          </div>
        </div>
      </div>
        `;
    };

    // use the team array to generate pieces of html based on the employee role
    // const generateHTML = ({empName, id, email, office, github, school});
}

module.exports = team => {
    // template literal - html body that calls the generate team function
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Team Profile</title>
    </head>
    <body>
      <main class="d-flex min-vh-100">
        <div class="container-fluid my-auto">
          <div class="jumbotron jumbotron-fluid bg-info">
            <div class="container">
              <h1 class="display-3 text-center font-weight-bolder">My Team</h1>
            </div>
          </div>
          <div class = "row justify-content-center">
            <div class="col-12 col-md-4 ">
              ${generateTeam()}
              
          </div>

        </div>
      </main>
    

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    </body>
    </html>`;
}