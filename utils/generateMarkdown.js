// Function to generate a license badge based on the license type
function renderLicenseBadge(license) {
  if (license) {
      return `![License](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
  return ''; // Return an empty string if no license is provided
}

// Function to generate a license link based on the license type
function renderLicenseLink(license) {
  if (license) {
      return `[License](https://opensource.org/licenses/${license})`;
  }
  return ''; // Return an empty string if no license is provided
}

// Function to generate the license section of the README
function renderLicenseSection(license) {
  if (license) {
      return `## License\n\nThis project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more details.`;
  }
  return ''; // Return an empty string if no license is provided
}

// Function to generate markdown content for README
function generateMarkdown(data) {
  // Generate GitHub profile link
  const githubLink = `https://github.com/${data.github}`;

  // Generate README content with provided data
  return `
# ${data.projectTitle}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
- GitHub: [${data.github}](${githubLink})
- Email: ${data.email}
`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;