// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === true){
    return "License Badge"
  } else {
    return " "
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === true){
    return " "
  } else {
    return " "
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === true){
    return "License Badge"
  } else {
    return " "
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}



`;
}

module.exports = generateMarkdown;





//  ${data.usage}
//  ${data.credits}
//  ${data.license}


// ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)