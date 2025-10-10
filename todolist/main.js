import inquirer from 'inquirer';
import _ from 'lodash';
import {addTask, markTaskAsDone, deleteTasks, viewTask} from './todoList.js';

//empty [] holds arrays of tasks
let tasks = [];


 let flag = true;

async function mainMenu(){
    while(flag == true){

const answer = await inquirer.prompt({
    type: 'list',
    name: "action",
    message: "what would you like to do?",
    choices: ["Add Task", "Mark Task as Done", "Delete Task", "View Task", "Exit"]
});
    

if(answer.action === "Add Task"){
 const {task} = await inquirer.prompt([
{type: 'input', 
    name: "task",
     message: "Enter Task:"}
 ]);
 tasks = addTask(tasks, task);

} else if (answer.action === 'Mark Task as Done'){
    //grabbing specific index from user
const {index} = await inquirer.prompt([
    {type: "number",
     name: "index", 
     message: "Enter task index to mark as 'done':"}
])
tasks = markTaskAsDone(tasks, index);

} else if(answer.action === 'Delete Task'){
    const {index} = await inquirer.prompt([
        {type: "number",
             name: "index", 
             message: "Enter task index to delete:"}
    ]);
tasks = deleteTasks(tasks, index);

} else if (answer.action === 'View Task'){
viewTask(tasks);

} else {
console.log('Goodbye!');
flag == false;
return;
}
}
}
mainMenu();

// const {sale} = {item: "perfume" , cost: 19.99, sale: true }
//sale = true
 