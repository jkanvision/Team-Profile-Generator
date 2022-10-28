const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');

const teamMembers = [];

// manager questions
inquirer
  .prompt([
  {
  type: "input",
  message: "What is your name?",
  name: "empName",
  },
  {
  type: "input",
  message: "What is your employee ID number?.",
  name: "id",
  },
  {
  type: "input",
  message: "What is your email?",
  name: "email",
  },
  {
  type: "input",
  message: "What is your office number?",
  name: "office",
  }

  ])
  .then((answers) => {
    const manager = new Manager(
      answers.empName,
      answers.id,
      answers.email,
      answers.office
    );
  }

// push new Manager to the team members array
// teamMembers.push(manager);

// at the end of manager function, call a createTeam function
// this function would simply ask the user which type of employee they would like to add, based on their choice, run the corresponding function
// const createTeam = () => {
//   inquirer
//     .prompt(
//       {
//         type: "list",
//         message: "Please select the position of the employee you want to add to your team.",
//         name: "newTeamMember",
//         choices: ["engineer", "intern", "finished building team"],
//       }
//     )
//     .then((answer) => {
//       switch (answer) {
//         case "engineer":
          
//           break;
      
//         case "intern":

//           break;
        
//           case "finished building team":
          
//             break;
//       }
//     });
  


// };
// createTeam();

// follow the same pattern for each type of employee
// build a function for them that uses inquirer


  )