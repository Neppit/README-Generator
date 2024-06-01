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
  // Generate README content with provided data
  return `
# ${data.projectTitle}

## Description
${data.description}

## Table of Contents
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
`;
}

// Export the generateMarkdown function
module.exports = generateMarkdown;