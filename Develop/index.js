// TODO: Incluir los paquetes necesarios para esta aplicación
var markedowngen = require("./utils/generateMarkdown");
var inq = require("inquirer");
var fs = require("fs");

// TODO: Crear una serie de preguntas para la entrada de usuario
const questions = [
    {
        type: "input",
        name: "Title",
        message: "¿Cuál es el título de tu proyecto?",
    },
    {
        type: "input",
        name: "Description",
        message: "¿Cuál es la descripción de tu proyecto?",
    },
    {
        type: "input",
        name: "Installation",
        message: "¿Cuáles son las instrucciones de instalación de tu proyecto?",
    },
    {
        type: "input",
        name: "Usage",
        message: "¿Cuál es la información de uso de tu proyecto?",
    },
    {
        type: "input",
        name: "Contributing",
        message: "¿Cuáles son las instrucciones de contribución para tu proyecto?",
    },
    {
        type: "input",
        name: "Test",
        message: "¿Cuáles son las instrucciones para realizar pruebas de tu proyecto?",
    },
    {
        type: "list",
        name: "License",
        message: "Escoge una licencia para tu proyecto",
        choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Sotware License 1.0", "Unlicensed"],
        loop: false,
    },

];

// TODO: Crear una función para escribir el archivo README
function writeToFile(fileName, data) {
    markedowngen(data);


}

// TODO: Crear una función para inicializar la aplicación
function init() {
    inq.prompt(questions);
}

// Llamada de función para inicializar la aplicación
init();
