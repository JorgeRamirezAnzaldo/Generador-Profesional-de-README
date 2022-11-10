// TODO: Incluir los paquetes necesarios para esta aplicación
const markedowngen = require("./utils/generateMarkdown");
const inq = require("inquirer");
const fs = require("fs");
const array = ["Unlicense", "ISC", "MIT",  "MPL 2.0", "Apache 2.0",
"Boost 1.0", "AGPL v3", "GPL v3", "GPL v2", "LGPL v3", "FDL v1.3",
"BSD 3-Clause", "BSD 2-Clause", "EPL 1.0", "IPL 1.0", "ODC BY", "ODbL",
"PDDL", "Artistic 2.0", "OFL 1.1",
"WTFPL", "Zlib", ""];

// TODO: Crear una serie de preguntas para la entrada de usuario
const questions = [
    {
        type: "input",
        name: "Title",
        message: "¿Cuál es el título de tu aplicación?",
    },
    {
        type: "editor",
        name: "Description",
        message: "¿Cuál es la descripción de tu aplicación?",
    },
    {
        type: "editor",
        name: "Installation",
        message: "¿Cuáles son las instrucciones de instalación de tu aplicación?",
    },
    {
        type: "editor",
        name: "Usage",
        message: "¿Cuál es la información de uso de tu aplicación",
    },
    {
        type: "editor",
        name: "Contributing",
        message: "¿Cuáles son las instrucciones de contribución para tu aplicación?",
    },
    {
        type: "editor",
        name: "Test",
        message: "¿Cuáles son las instrucciones para realizar pruebas de tu aplicación?",
    },
    {
        type: "list",
        name: "License",
        message: "Escoge una licencia para tu aplicación",
        choices: array,
        loop: false,
    },
    {
        type: "input",
        name: "GitHub",
        message: "¿Cuál es tu usuario de GitHub?",
    },
    {
        type: "input",
        name: "Mail",
        message: "¿Cuál es tu correro electrónico?",
    },

];

// TODO: Crear una función para escribir el archivo README
function writeToFile(fileName, data) {
    for (var i = 0; i < array.length; i++){
        if (data.License === ""){
            i = array.length - 1;
            break;
        } else if (array[i].startsWith(data.License)){
            break;
        }
    }
    const text = markedowngen(data, i);
    fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log("File successfully created"));

}

// TODO: Crear una función para inicializar la aplicación
function init() {
    inq.prompt(questions)
    .then((answers) => {
        writeToFile("ReadMe.md", answers);
    });
}

// Llamada de función para inicializar la aplicación
init();
