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
    let licsection = `Esta aplicación se encuentra bajo la licencia ${license}. Para conocer más detalles sobre esta licencia entra al siguiente link:  
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

## Tabla de Contenido  
* [Descripción](#descripción-de-la-aplicación)
* [Instrucciones de instalación](#instrucciones-de-instalación)
* [Información de uso de la aplicación](#información-de-uso-de-la-aplicación)
* [Instrucciones de contribución](#instrucciones-de-constribución)
* [Instrucciones para realizar pruebas](#instrucciones-para-realizar-pruebas)
* [Licencia](#licencia)
* [Preguntas](#preguntas)

## Descripción de la aplicación  
${data.Description}  

## Instrucciones de instalación  
${data.Installation}  

## Información de uso de la aplicación  
${data.Usage}  

## Instrucciones de constribución  
${data.Contributing}  

## Instrucciones para realizar pruebas  
${data.Test}  

## Licencia 
${lictext}  

## Preguntas  
* Si tienes dudas, puedes encontrar más información al acceder a mi perfil de Github mediante el siguiente Link: [${data.GitHub}](${gittext}). 
* Para preguntas adicionales puedes contactarme por medio de la siguiente dirección de correo electrónico: ${data.Mail}.
  * En el asunto del correo coloca el nombre de la aplicación sobre la que tienes preguntas.
  * Por favor coloca preguntas puntuales e incluye cualquier ejemplo o imagen que ayude a comprender tus dudas para ofrecerte una mejor respuesta.
  * Considera que es posible que tarde un par de días en contestar.
`;
}

module.exports = generateMarkdown;
