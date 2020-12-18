// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.projectName}

## Table of Contents

-[Description](#Description)
-[Installation](#Installation)
-[Usage](#Usage)
-[Contributors](#Contributors)
-[Test](#Tests)
-[Contact](#Contact)

## Description
  
${data.description}
  
## Installation

${data.installation}
  
## Usage

${data.usage}
  
## Contributors

${data.contribution}

## Tests

${data.tests}

## Contact

* [${data.gitHubUser}](https://github.com/${data.gitHubUser})
${data.email}

`;

}

module.exports = generateMarkdown;