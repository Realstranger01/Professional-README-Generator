const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

console.log("Welcome to Professional-README-Generator");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'editor',
    name: 'description',
    message: 'Please provide a brief description of your project. Be sure to save before closing the editor when you are done.',
  },
  {
    type: 'editor',
    name: 'installation',
    message: 'Please provide installation instructions. Be sure to save before closing the editor when you are done.',
  },
  {
    type: 'editor',
    name: 'usage',
    message: 'Please provide usage instructions. Be sure to save before closing the editor when you are done.',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license would you like your project to have?',
    choices: ['MIT', 'Apache', 'GPL', 'BSD'],
  },
  {
    type: 'editor',
    name: 'contributing',
    message: 'Please provide contribution guidelines. Be sure to save before closing the editor when you are done.',
  },
  {
    type: 'editor',
    name: 'tests',
    message: 'Please provide testing instructions. Be sure to save before closing the editor when you are done.',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// function to write README file
function writeToFile(fileName, data) {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFileSync(filePath, data);
}

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdownData = generateMarkdown(answers);
      writeToFile('README.md', markdownData);
      console.log('Successfully wrote README.md file');
    })
    .catch((err) => {
      console.error(err);
    });
}


// function call to initialize program
init();
