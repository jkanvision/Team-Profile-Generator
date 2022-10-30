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
    teamMembers.push(manager);
    createTeam();
  });




// function to prompt user for next team member or end task 
const createTeam = () => {
  inquirer
    .prompt(
      {
        type: "list",
        message: "Please select the position of the employee you want to add to your team.",
        name: "newTeamMember",
        choices: ["Engineer", "Intern", "finished building team"],
      }
    )
    .then((answer) => {
      switch (answer.newTeamMember) {

        case "Engineer":
          addEngineer();
        break;

        case "Intern":
          addIntern();
        break;

        case "finished building team":
          writeToFile();
        break;
            
      }
    });
  }; 

// function to prompt for engineer properties 
const addEngineer = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "empName",
      },
      {
        type: "input",
        message: "What is his/her ID number?.",
        name: "id",
      },
      {
        type: "input",
        message: "What is his/her email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is his/her github profile URL?",
        name: "github",
      }

    ])
    .then((answers) => {
      const engineer = new Engineer(
        answers.empName,
        answers.id,
        answers.email,
        answers.github
      );
      teamMembers.push(engineer);
      createTeam();
    });

};

// function to prompt for intern properties
const addIntern = () => {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "empName",
      },
      {
        type: "input",
        message: "What is his/her ID number?.",
        name: "id",
      },
      {
        type: "input",
        message: "What is his/her email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is his/her school name?",
        name: "school",
      }

    ])
    .then((answers) => {
      const intern = new Intern(
        answers.empName,
        answers.id,
        answers.email,
        answers.school
      );
      teamMembers.push(intern);
      createTeam();
    });

};

const writeToFile = () => {
  fs.writeFile("./dist/team.html", render(teamMembers), (err) => err ? console.log(err) : console.log("Generating Team Profile...")) 
};

