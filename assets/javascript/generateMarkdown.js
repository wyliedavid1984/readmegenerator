// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.projectName}

## License Badge

${data.license[0]}

click on the badge for more info.

<details>
<summary>Table of Contents</summary>

-[Description](#Description)

-[Installation](#Installation)

-[Usage](#Usage)

-[Contributors](#Contributors)

-[Test](#Tests)

-[Contact](#Contact)

</details>

## Description
  
${data.description}
  
## Installation


    ${data.installation}


## Usage

${data.usage}

### Screen Shots
  
## Contributors

${data.contributions}

## Tests


    ${data.tests}


## Credits


## License

${data.license[1]}

## Contact

* [${data.gitHubUser} GitHub account](https://github.com/${data.gitHubUser})

* [${data.email}]

`;

}

module.exports = generateMarkdown;