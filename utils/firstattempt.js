// TODO: Include packages needed for this application
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [ 

    {
      type: 'input',
      message: 'How many bones are in the adult human body?',
      name: 'bones',
    },
    // {
    //   type: 'input',
    //   message: 'What is your Github username?',
    //   name: 'bones',
    // },
    // {
      //   type: 'input',
      //   message: 'What is your email address?',
      //   name: 'bones',
      // },
    // {
    //   type: 'input',
    //   message: 'What is your project name?',
    //   name: 'bones',
    // },
    // {
    //   type: 'input',
    //   message: 'Please write a short description of your project.',
    //   name: 'bones',
    // },
    // {
    //   type: 'input',
    //   message: 'What kind of license should your project have?',
    //   name: 'bones',
    // },
    // {
    //   type: 'input',
    //   message: 'What command should be run to install dependencies?',
    //   name: 'bones',
    // },
    // {
    //   type: 'input',
    //   message: 'What command should be run to run tests?',
    //   name: 'bones',
    // },
    // {
    //   type: 'input',
    //   message: 'What does the user need to know about using the repo?',
    //   name: 'bones',
    // },
    // {
    //   type: 'input',
    //   message: 'What does the user need to know about contributing to the repo?',
    //   name: 'bones',
    // },
  ]

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
// init();



























// const inquirer = require('inquirer');
// const fs = require("fs")
//   let questions = [
   
//     {
//       type: 'input',
//       message: 'How many bones are in the adult human body?',
//       name: 'bones',
//     },
    
//   ]
  



//   inquirer.prompt(questions).then((answers) => {
//     console.log(answers);
//     if(answers.bones == 206){
//       console.log("Correct!")
//     }else {
//       console.log("Incorrect!")
//     } 
//     let text = "# How many bones?"
//     text += `\nAnswer: ${answers.bones}`
//     console.log(text)
//     fs.writeFile('readme.md', text, (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
// });



  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    if(answers.bones == 206){
      console.log("Correct!")
    }else {
      console.log("Incorrect!")
    } 
    let text = "# How many bones?"
    text += `\nAnswer: ${answers.bones}`
    console.log(text)
    fs.writeFile('readme.md', text, (err) =>
  err ? console.error(err) : console.log('Success!')
);
  });