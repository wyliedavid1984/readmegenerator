'use strict';
const fs = require('fs');
const inquirer = require('inquirer');

// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of Your project?',
        default: 'Project Name'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project?'

    },
    {
        type: 'confirm',
        name: 'installation',
        message: 'Will this require an installation?',
        default: false,
        // map: function (this) {

        // }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usages for the application?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Were there any collaborators?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any test for users to run?'
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'What is you github user name?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to apply?',
        choices: ['Apache', 'GNU_GPLv3', 'MIT', 'ISC'],
        filter: function (val) {
            return val.toLowerCase();
        }
    },
];

// // function to write README file
function writeToFile(fileName, data) {

    const fileName = README.md;

    fs.writeFile("./sample/fileName", )

}


// // function to initialize program
function init() {
inquirer.prompt(questions).then((answers) => {
    
      console.log(response);
      console.log(response.name)
      const userFile = `${response.name.toLowerCase().split(" ").join('')}.json`;

      fs.writeFile("./samples/userFile", JSON.stringify(response, null, "\t"), (err) => {
          err ? console.error(err) : console.log('Commit logged!')

      })
});
}

// // function call to initialize program
init();



