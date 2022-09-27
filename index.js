// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are required to install the project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Give instructions on how to use the project:'
    },
    {
        type: 'list',
        name: 'liscense',
        choices: ['MIT', 'Apache', 'BSD']
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can someone contribute to this project?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How do you test this project?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
