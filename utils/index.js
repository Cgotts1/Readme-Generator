const inquirer = require("inquirer");
const fs = require("fs");

// Gets the generateMarkdown file and the functions within it
const {renderLicenseBadge, renderLicenseLink} = require('./generateMarkdown')

// Series of questions that will be shown in the terminal after running node
const questions = [
  {
    type: "input",
    message: "What is your Github username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "address",
  },
  {
    type: "input",
    message: "What is your project name?",
    name: "project",
  },
  {
    type: "input",
    message: "Please write a short description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "license",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    message: "What command should be run to install dependencies?", 
    name: "npmi",
    default: "npm i",
  },
  {
    type: "input",
    message: "What command should be run to run tests?", 
    name: "npmtest",
    default: "npm test",
  },
  {
    type: "input",
    message: "What does the user need to know about using the repo?",
    name: "using",
  },
  {
    type: "input",
    message: "What does the user need to know about contributing to the repo?",
    name: "contributing",
  },
];

// Enables prompting of questions and takes in users input
inquirer.prompt(questions).then((answers) => {
  const template = 
`# ${answers.project}

## <section id = "License">License</section>
${renderLicenseBadge(answers.license)} <br>
${renderLicenseLink(answers.license)}

## <section id = "Description">Description</section>
${answers.description}

## Table of Contents
1.) <a href = "#License">License</a><br>
2.) <a href = "#Description">Description</a><br>
3.) <a href = "#Installation">Installation</a> <br>
4.) <a href = "#Usage">Usage</a><br>
5.) <a href = "#Contributing">Contributing</a><br>
6.) <a href = "#Tests">Tests</a><br>
7.) <a href = "#Questions">Questions</a>

## <section id = "Installation">Installation</section>
Command to Install Dependencies: ${answers.npmi}

## <section id = "Usage">Usage</section>
Using the Repo: ${answers.using}

## <section id = "Contributing">Contributing</section>
Contributing to the Repo: ${answers.contributing}

## <section id = "Tests">Tests</section>
Command to Run Tests: ${answers.npmtest}

## <section id = "Questions">Questions</section>
If you have any questions, please feel free to contact me: <br><br>
1.) Github Username: ${answers.username} <br>
2.) Email Address: ${answers.address}`;

// Outputs readme file
  fs.writeFile("./README.md", template, () => {
    console.log("Generating README...");
  });
});