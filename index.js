const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const render = require('./src/page-template.js');


// function for creating manager - inquirer questions
  // take those questions and create a new Manager with the user provided answers
  

  // follow the same pattern for each type of employee
  // build a function for them that uses inquirer
const teamMembers = [];

// manager questions

// push that new Manager to the team members array

const newManager = () => {
    const questions = [ {
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
      },
    
    ];
    inquirer
      .prompt(questions)
      .then((answers) => teamMembers.push(newManager));
  };

// at the end of manager function, call a createTeam function
// this function would simply ask the user which type of employee they would like to add, based on their choice, run the corresponding function
const createTeam = () => {

};



// {
//     type: "list",
//     message: "Please select the position for the employee you want to add to your team.",
//     name: "newTeamMember",
//     choices: ["Engineer", "Intern", "finished building team"],
//   },
// at the end, use fs to write file while sending the team array over to the function you brought in from page-template.js