// TODO: Crear una función que devuelva una credencial de licencia según la licencia en la que se pasa
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseBadge(license) {
  if (license !== ""){
    let licensemod = license.replace(" ", "_");
    licensemod = licensemod.replace("-", "--");
    let licenseimg = "https://img.shields.io/badge/License-" + licensemod + "-blue.svg";
    return licenseimg;
  } else {
    return "";
  }
}

// TODO: Crear una función que devuelva el enlace de licencia
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseLink(i) {
  const licenseurl = ["unlicense.org/", "opensource.org/licenses/ISC", "opensource.org/licenses/MIT",
  "opensource.org/licenses/MPL-2.0",  "opensource.org/licenses/Apache-2.0", "www.boost.org/LICENSE_1_0.txt",
  "www.gnu.org/licenses/agpl-3.0", "www.gnu.org/licenses/gpl-3.0", "www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
  "www.gnu.org/licenses/lgpl-3.0", "www.gnu.org/licenses/fdl-1.3", "opensource.org/licenses/BSD-3-Clause", "opensource.org/licenses/BSD-2-Clause", 
  "opensource.org/licenses/EPL-1.0", "opensource.org/licenses/IPL-1.0", "opendatacommons.org/licenses/by/", "opendatacommons.org/licenses/odbl/",
  "opendatacommons.org/licenses/pddl/", "https://opensource.org/licenses/Artistic-2.0", "opensource.org/licenses/OFL-1.1",  
  "www.wtfpl.net/about/", "opensource.org/licenses/Zlib", ""
];
  let url = licenseurl[i];
  if (url !== ""){
    let completeurl = "https://" + url;
    return completeurl;
  } else {
    return "";
  }
  

}

// TODO: Crear una función que devuelva la sección de licencia de README
// Si no hay licencia, devuelva una cadena vacía
function renderLicenseSection(license, link) {
  if (link !== ""){
    let licsection = `This application was created under license ${license}. To get more details about this license follow this link:  
    * [Link a Licencia](${link})`
    return licsection;
  } else {
    return "";
  }
  
}

// TODO: Crear una función para generar un markdown para README
function generateMarkdown(data, i) {
  let badge = "";
  if (data.License !== ""){
    badge = `![License](${renderLicenseBadge(data.License)})`;
  }
  const link = renderLicenseLink(i);
  const lictext = renderLicenseSection(data.License, link);
  const gittext = "https://github.com/" + data.GitHub;
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

module.exports = generateMarkdown;
