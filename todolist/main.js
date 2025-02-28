//cd ..

const inquirer = require('inquirer');

inquirer.prompt([

{type: 'input' , name: username, message: `What is your name?`},
{ type: 'list', name: 'langauge', message: `What is your favorite programming language?`, 
    choices: ['JavaScript', 'Python', 'Java', 'C#', 'Ruby'] }

]).then(answers => {

console.log(`hello, ${answers.username}. you love ${answers.language}!`);
});
