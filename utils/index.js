const inquirer = require("inquirer");
const fs = require("fs");

// const getFile = require('./generateMarkdown')

// getFile

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
    message: "What command should be run to install dependencies?", //Needs answer
    name: "npmi",
  },
  {
    type: "input",
    message: "What command should be run to run tests?", //Needs answer
    name: "npmtest",
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

inquirer.prompt(questions).then((answers) => {
  const template = 
`# ${answers.project}

## Description
${answers.description}

## Table of Contents
<a href = "#Installation">Installation</a>
<a href = "#Description">Description</a>
<a href = "#Usage">Usage</a>
<a href = "#Contributing">Contributing</a>
<a href = "#Tests">Tests</a>
<a href = "#Questions">Questions</a>


## Installation <section id = "Installation"></section>
Command to Install Dependencies: ${answers.npmi}

## Usage <section id = "Usage"></section>
Using the Repo: ${answers.using}

## Contributing
Contributing to the Repo: ${answers.contributing}

## Tests
Command to Run Tests: ${answers.npmtest}

## Questions  <section id = "Questions"></section>
If you have any questions, please feel free to contact me:
Github Username: ${answers.username}
Email Address: ${answers.address}`;

  fs.writeFile("./README.md", template, () => {
    console.log("Generating README...");
  });
});







// Github Username: ${answers.username}
// Email Address: ${answers.address}
// Project Name: ${answers.project}
// Project Description: ${answers.description}
// License: ${answers.license}
// Command to Install Dependencies: ${answers.npmi}
// Command to Run Tests: ${answers.npmtest}
// Using the Repo: ${answers.using}
// Contributing to the Repo: ${answers.contributing}