//Function to create/render the license badge based on the license
function renderLicenseBadge(license) {
  if (license !== ""){ //If license is not empty
    let licensemod = license.replace(" ", "_"); //Replace spaces in license text with underscores
    licensemod = licensemod.replace("-", "--"); //Replace - with -- in license text
    let licenseimg = "https://img.shields.io/badge/License-" + licensemod + "-blue.svg"; //Create link for the badge image
    return licenseimg; //Return link for the badge image
  } else { //If license is empty
    return ""; //Return an empty string
  }
}

//Function to return the license link
function renderLicenseLink(i) {
  //Array with the license urls
  const licenseurl = ["unlicense.org/", "opensource.org/licenses/ISC", "opensource.org/licenses/MIT",
  "opensource.org/licenses/MPL-2.0",  "opensource.org/licenses/Apache-2.0", "www.boost.org/LICENSE_1_0.txt",
  "www.gnu.org/licenses/agpl-3.0", "www.gnu.org/licenses/gpl-3.0", "www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  "www.gnu.org/licenses/lgpl-3.0", "www.gnu.org/licenses/fdl-1.3", "opensource.org/licenses/BSD-3-Clause", "opensource.org/licenses/BSD-2-Clause", 
  "opensource.org/licenses/EPL-1.0", "opensource.org/licenses/IPL-1.0", "opendatacommons.org/licenses/by/", "opendatacommons.org/licenses/odbl/",
  "opendatacommons.org/licenses/pddl/", "https://opensource.org/licenses/Artistic-2.0", "opensource.org/licenses/OFL-1.1",  
  "www.wtfpl.net/about/", "opensource.org/licenses/Zlib", ""
];
  let url = licenseurl[i]; //Use the index of the selected license to extract the license url
  if (url !== ""){ //If the url is not empty
    let completeurl = "https://" + url; //Modify the license url
    return completeurl; //Return the complete license url
  } else { //If the url is empty
    return ""; //Return an empty string
  }
  

}

//Function to return the license section of the README
function renderLicenseSection(license, link) {
  if (link !== ""){ //If the license url is not empty
    //Create the license section including the license name and the license url
    let licsection = `This application was created under license ${license}. To get more details about this license follow this link:  
    * [Link to License](${link})`
    return licsection; //Return the license section of the README
  } else { //If the license url is empty
    return ""; //Return an empty string
  }
  
}

//Function to create a markdown
function generateMarkdown(data, i) {
  let badge = ""; //Initialize the badge section as an empty string
  if (data.License !== ""){ //If the user selected a license other than the empty one
    badge = `![License](${renderLicenseBadge(data.License)})`; //Create and store the complete section for the license badge calling the function to render the license badge
  }
  const link = renderLicenseLink(i); //Call the function to render the license link and store the link
  const lictext = renderLicenseSection(data.License, link); //Call the function to render and store the license section
  const gittext = "https://github.com/" + data.GitHub; //Create the link to the user GitHub
  //Return complete markdown text
  return `# ${data.Title} ${badge}     

## Table of Contents  
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description  
${data.Description}  

## Installation 
${data.Installation}  

## Usage  
${data.Usage}  

## License
${lictext}  

## Contributing 
${data.Contributing}  

## Tests  
${data.Test}  

## Questions
* If you any doubts or questions, you can find more information by accessing my GitHub profile using the following link: [${data.GitHub}](${gittext}).
* For additional questions, you can contact me by using the following email address: ${data.Mail}. Please consider the following:
  * Place the application name for which you have questions in the email subject.
  * Place your questions as accurate and descriptive as you can and include examples or images that could help understand your doubts to offer you better answers.
  * Consider that it can take a couple of days for me to answer your email.
`;
}

//Export generateMarkdown function to make it available
module.exports = generateMarkdown;
