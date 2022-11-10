

// TODO: Crear una función para generar un markdown para README
function generateMarkdown(data, i) {
  
  return `# ${data.Title}     

## Table of Contents  
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
 

`;
}

module.exports = generateMarkdown;
