# Readme Generator

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
-[Description](#Description)

-[Usage](#Usage)

-[Technologies](#Technologies)

-[Visuals](#Visuals)

-[Credits](#Credits)

-[Contact/Questions](#Contact)

## Description

We were all assigned to a project,  the project was to create an app that would auto generator a good readme.  It would all be create by a backend process through node and a npm called inquirer.  The application takes the user through a series of questions, and then generates a readme file with all the user input installed directly to the readme. It is generated in to a sample folder. 

## Usage

Tired of typing out every readme mark down?  Want and easier way to get it done? Well you have found it.  You just need to type in the following and you'll be prompted through the rest of the work.

    npm index.js

## Technologies

### Javascript

There were several function that were applied in this application. One was to generate the readme file with the users input.  Another was used to initialize the inquirer prompts to get the data from the user.  And lastly a function to write the file. I also use Ecma Script 5 documentation; template literals or `(`${}`)`, arrow function or `=>`, and the use of const. for variables throughout the code. I ended up using asynchronous javascript by using callback functions as well as promises with the .then method.   

#### Node

I used several aspects of node to make this application function. I utilized a built in api to node called File System. There are many different built-in methods that come with File System or fs, but I only needed one to get this project running successfully, and that was fs.writeFile.  This takes in the a path to the file, the data and a callback function that is generally used for error handling. There was use of modularization or module, I used the two parts to it by requiring files and module.exporting files.  It allowed me to use outside methods/functions in a separate file.  I used node package manager or npm to initialize (init) a json package to gather bits of data.  Then after that I used node package manager to install a module called inquirer, this also installs dependencies in the initial json package so I can use inquirer. Inquirer allows us to use types of questions to gather data from the user and store it in an object. We also use node to run the application without the use of any frontend materials(html, css, dom).  

## Visuals

<details>

<summary>ScreenShots/Videos</summary>

### Screen Shots

![CLI](./assets/images/CLI.png)
![CLI with README](./assets/images/CLIreadme.png)
![README](./assets/images/readme.png)

### Videos/GIF

click on the gif to be directed to the video
[![Gif of Video](./assets/images/projectVid.gif)](https://drive.google.com/file/d/1t7aA7rucaOM75FxzwVzR4NgKtaMrZdVo/view)

</details>

## Installation

    npm i

## Credits

* [Node Documents](https://nodejs.org/api/index.html)
* [npm Documents](https://www.npmjs.com/)
* [GitHub Inquirer](https://github.com/SBoudrias/Inquirer.js#readme)

## Contact

[@DavidWylie](https://github.com/wyliedavid1984)