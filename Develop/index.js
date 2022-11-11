//Include the generateMarkdown javascript file
const markedowngen = require("./utils/generateMarkdown");
//Include the inquirer package
const inq = require("inquirer");
//Include the fs module
const fs = require("fs");
//Define the array with the licenses 
const array = ["Unlicense", "ISC", "MIT",  "MPL 2.0", "Apache 2.0",
"Boost 1.0", "AGPL v3", "GPL v3", "GPL v2", "LGPL v3", "FDL v1.3",
"BSD 3-Clause", "BSD 2-Clause", "EPL 1.0", "IPL 1.0", "ODC BY", "ODbL",
"PDDL", "Artistic 2.0", "OFL 1.1",
"WTFPL", "Zlib", ""];

/*Create questions for the application title, description, installation instructions, usage information, contribution instructions,
test instructions, license and GitHub user and email address*/
const questions = [
    {
        type: "input",
        name: "Title",
        message: "Which is the title of your application?",
    },
    //Questions with type editor to allow the user to introduce multiple lines
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
    //Question for the license with type list, displaying all the license options contained in array
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

//Function to create/write the README.md file
function writeToFile(fileName, data) {
    //Determine the index of the selected license
    for (var i = 0; i < array.length; i++){ //Loop over the license array
        if (data.License === ""){ //If the user selected an empty license
            i = array.length - 1; //Index is the last one
            break; //Interrupt loop
        } else if (array[i].startsWith(data.License)){ //When the selected license matches the element in the license array
            break; //Interrupt loop
        }
    }
    const text = markedowngen(data, i); //Call function to generate the text for the README.md file
    fs.writeFile(fileName, text, (err) =>
    err ? console.error(err) : console.log("File successfully created")); //Write file with its proper text and display error/success messages

}

//Function to initialize application
function init() {
    inq.prompt(questions) //Display all questions
    .then((answers) => {
        writeToFile("README.md", answers); //Call function to write file when all questions are answered
    });
}

//Call initialization function
init();
