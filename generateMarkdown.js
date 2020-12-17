// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data[0].name.projectTitle}
  
  ## ${data[1].name.description}

  ${data[1].type}

  
`;
}

module.exports = generateMarkdown;
