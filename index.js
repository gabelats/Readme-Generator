// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project",
  },
  {
    type: "list",
    name: "license",
    message: "What license is your project using?",
    choices: ["MIT", "BSD 3", "APPACHIE 2.0", "GPL 3.O", "none"],
  },
  {
    type: "input",
    name: "Description",
    message: "Please provide a project description?",
  },
  {
    type: "input",
    name: "Installation",
    message: "What steps are needed to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the use of your project",
  },
  {
    type: "input",
    name: "credits",
    message: "Who worked on this project",
  },
  {
    type: "input",
    name: "test",
    message: "how do you test this",
  },
  {
    type: "input",
    name: "github",
    message: "Whats your Github username?",
  },
  {
    type: "input",
    name: "email",
    message: "Whats your email?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responsesObj) => {
    console.log(responsesObj);
    writeToFile("README.md", generateMarkdown({ ...responsesObj }));
  });
}

// Function call to initialize app
init();
