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
        name: 'description',
        message: 'Please enter a description of the project?'

    },
    {
        type: 'confirm',
        name: 'installation',
        message: 'Will this require an installation?',
        default: false,
        // displayData: () =>{
        //     if(installation){

        //     }
        // }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What are the usages for the application?'
    },
    {
        type: 'confirm',
        name: 'contribution',
        message: 'Were there any collaborators/ or third party assets?',
        default: true,
        validate:
        // addCollaborators: () =>{
        //     if(contribution){
        //         type: input,
        //         name: collaborators,
        //         message: "Who are they?"
        //     }
        // }
    }, {
        type: 'list',
        name: 'license',
        message: 'What type of license would you like to apply?',
        choices: [{
                key: 'Apache',
                name: 'apacheLincense',
                value: '![License](https: //img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
            },
            {
                key: 'GNU_GPLv3',
                name: "gnuLicense",
                value: "![License: GPL v3](https: //img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
            },
            {
                key: "MIT",
                name: "mitLicense",
                value: "![License: MIT](https: //img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
            },
            {
                key: "ISC",
                name: "iscLicense"
                value: "![License: ISC](https: //img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
            },
            {
                key: "BSD",
                name: "bsdLicense",
                value: "![License](https: //img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
            }
        ]
    },
    {
        type: 'confirm',
        name: 'tests',
        message: 'Do you have any test for users to run?',
        default: false,
        validate: function (){
            if(true
        }
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
    }
];

// // function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(`./sample/${fileName}`, data, (err) => {
        err ? console.error(err) :
            console.log('Commit logged!')
    })

}


// // function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {

        console.log(response);

        writeToFile("README.md", generateMarkdown(response));
    });
}

// // function call to initialize program
init();