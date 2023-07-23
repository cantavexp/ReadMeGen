// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return '';
  } else {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
}

  


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return '';
  }
  return `* [License](#license)`;
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return '';
  }
  return `## License
  This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Project Title
  ${data.title}
  ## Description
  ${data.description} 
  ## Table of Contents
 
  * [Usage](#usage)
${renderLicenseLink(data.license)}
  * [Installation](#installation)
  ${data.installation}

  * [License](#license)
  ${data.license}
  ${renderLicenseSection(data.license)}
  * [Test](#test)
  run the following command:
  ${data.test}
* [Contributing](#contributing)
    ${data.contributing}  





    ## Contact
    ${data.email}
    ${data.github}
    


    

   
  
 
  
  
 

`;
}

module.exports = generateMarkdown;
