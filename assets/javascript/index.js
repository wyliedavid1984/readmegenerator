'use strict';
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [

    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of Your project?',
        default: 'Project Name'
    },
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'What is you github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: function (value) {
            let mail = value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            if (mail) {
                return true;
            } else {
                return "Please enter a valid Email address"
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of the project?'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'Will this require an installation?',
        default: "npm i"

    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the application used for?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'How can anyone make contributions?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to apply?',
        choices: [{
                key: 'Apache',
                name: 'apacheLicense',
                value: ['[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 'Apache']
            },
            {
                key: "BSD",
                name: "bsdLicense",
                value: ["[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", 'BSD']
            },
            {
                key: 'GNU_GPLv3',
                name: "gnuLicense",
                value: ["[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "GNU_gplv3"]
            },
            {
                key: "ISC",
                name: "iscLicense",
                value: ["[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", "ISC"]
            },
            {
                key: "MIT",
                name: "mitLicense",
                value: ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "MIT"]
            }

        ]
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Do you have any test for users to run?',
        default: "npm test",
    }

];

// // function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`../sample/${fileName}`, data, (err) => {
        err ? console.error(err) :
            console.log('Commit logged!')
    })

}


// // function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {

        writeToFile("README.md", generateMarkdown(response));
    });
}

// // function call to initialize program
init();