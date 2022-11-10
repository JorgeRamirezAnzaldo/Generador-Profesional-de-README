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
        message: "Which is the title of your application?",
    },
    {
        type: "editor",
        name: "Description",
        message: "Which is the description of your application?",
    },
    {
        type: "editor",
        name: "Installation",
        message: "Which are the installation instructions for your application?",
    },
    {
        type: "editor",
        name: "Usage",
        message: "Which is the usage information for your application?",
    },
    {
        type: "editor",
        name: "Contributing",
        message: "Which are the contribution instructions for your application?",
    },
    {
        type: "editor",
        name: "Test",
        message: "Which are the instructions to test your application?",
    },
    {
        type: "list",
        name: "License",
        message: "Choose a license for your application",
        choices: array,
        loop: false,
    },
    {
        type: "input",
        name: "GitHub",
        message: "Which is your GitHub user?",
    },
    {
        type: "input",
        name: "Mail",
        message: "Which is your email address?",
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
        writeToFile("README.md", answers);
    });
}

// Llamada de función para inicializar la aplicación
init();
