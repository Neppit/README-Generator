// Include required packages
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
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

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateReadmeContent(data), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README file ${fileName} has been created successfully.`);
        }
    });
}

// Function to generate content for README file
function generateReadmeContent(data) {
    // Placeholder function; you should implement this to generate the actual content
    return `
 ${data}
`;
}

// Function to initialize the application
function init() {
    // Prompt user with questions and handle responses
    inquirer.prompt(questions)
        .then((answers) => {
            // Generate markdown content based on user responses
            const markdownContent = generateMarkdown(answers);
            // Write markdown content to README file
            writeToFile('README.md', markdownContent);
        })
        .catch((error) => {
            // Handle errors
            console.error(error);
        });
}

// Initialize the application
init();