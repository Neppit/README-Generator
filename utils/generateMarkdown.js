// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
      return `![License](https://img.shields.io/badge/License-${license}-brightgreen)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
      return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
      return `## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more details.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.projectTitle}

## Description
${data.description}

## Usage
${data.usage}

## Credits
${data.credits}

${renderLicenseSection(data.license)}

${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
