import inquirer from 'inquirer';
import _ from 'lodash';
import {addTask, markTaskAsDone, deleteTasks, veiwTask} from '.todoList.js';

let task = [];

async function mainMenu(){

const answer = await inquirer.prompt({
    type: 'list',
    name: 'action',
    message: 'what would you like to do?',
    choices: ['Add Task', 'Mark Task as Done', 'Delete Task', 'View Task', 'Exit']
});

if(answer.action === "Add Task"){
 const task = await inquirer.prompt([
{type: 'input', name: "task", message: "Enter Task:"}
 ]);
 tasks = addTask(tasks, task);

} else if(answer.action === 'Mark Task as Done'){
const {index} = 

} else if(answer.action === 'Delete Task'){

} else if(answer.action === 'View Task'){

} else {

}
}