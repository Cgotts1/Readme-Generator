const inquirer = require("inquirer");
const fs = require("fs");


// const getFile = require('./generateMarkdown')

// getFile


const questions = [
  {
      type: 'input',
      message: 'What is your Github username?',
      name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'address',
      },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'project',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project.',
      name: 'description',
    },
    {
      type: 'list',
      message: 'What kind of license should your project have?',
      name: 'license',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',   //Needs answer
      name: 'npmi',
    },
    {
      type: 'input',
      message: 'What command should be run to run tests?',            //Needs answer
      name: 'npmtest',                                     
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'using',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contributing',
    }
];

inquirer.prompt(questions).then((answers) => {
  const template = `
        
# Github Username: ${answers.username}
## Email Address: ${answers.address}
            <p>Project Name: ${answers.project}</p>
            <p>Project Description: ${answers.description}</p>
            <p>License: ${answers.license}</p>
            <p>Command to Install Dependencies: ${answers.npmi}</p>
            <p>Command to Run Tests: ${answers.npmtest}</p>
            <p>Using the Repo: ${answers.using}</p>
            <p>Contributing to the Repo: ${answers.contributing}</p>

        
    `;

  fs.writeFile("./README.md", template, () => {
    console.log("Generating README...");
  });
});
// gjgjg