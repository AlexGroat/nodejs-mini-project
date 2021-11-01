const fs = require("fs");
const inquirer = require("inquirer");

var myProfile = (inquirer.prompt)([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Tell me about yourself',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'Please include your LinkedIn',
        name: 'linkedin',
    },
    {
        type: 'input',
        message: 'Please include your Github',
        name: 'github',
    }
]);

myProfile.then(function (data) {
    const html = `  
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="./style.css">

                                <title>Document</title>
                            </head>
                            <body>
                                <h1 class="myprofile">${data.name}</h1>
                                <div class="myprofile">${data.location}</div>
                                <div class="myprofile">${data.bio}</div>
                                <div class="myprofile">${data.linkedin}</div>
                                <div class="myprofile">${data.github}</div>
                                <script type="text/javascript" src="index.js"></script>
                            </body>
                        </html>
                        `;
    fs.writeFile(`index.html`, html, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Success");
    });
})