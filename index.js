// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require('path');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        name: 'description',
        message: "What is your project's description?",
    },
    {
        type: 'input',
        name: 'table of contents',
        message: "What is your project's table of contents?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What are the instructions for using your project?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "What are the instructions for installing your project?",
    },
    {
        type: 'list',
        name: 'license',
        message: "What is your project's license?",
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'test',
        message: "What are the instructions for testing your project?",
        default: 'npm test',
    },
    {   
        type: 'input',
        name: 'github',
        message: "What is your github username?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email address?",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log('Generating README...');
        writeToFile('README.md', generateMarkdown({...inquirerResponses}));
    })
}

// Function call to initialize app
init();
