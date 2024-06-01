// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage instructions:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List credits (e.g., contributors, libraries, resources):'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateReadmeContent(data), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README file ${fileName} has been created successfully.`);
        }
    });
}

function generateReadmeContent(data) {
    // Generate the content of the README file based on the user input data
    return `
 ${data}
`;
}

// Example content generation - customize this based on your requirements

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Function call to initialize app
init();