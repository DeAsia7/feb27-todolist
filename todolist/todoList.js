export function addTask(tacks, task) {
    const taskObject = {
        "name": task, //string
        "done": false //boolean
    }
tasks.push(taskObject);

console.log(`new task added: ${taskObject.name}`)
return tasks;
}

export function markTaskAsDone(tasks, index) {
if(tasks [index]) {
tasks[index].done = true;
console.log(`Task marked as done: ${tasks[index].name}!`);
} else { 
    console.log("tasks does not exist. please check index value.")
}
}

export function deleteTasks(tasks, index) {
if (tasks[index]) {
  const deletedTasks =  tasks.splice(index, 1); 
  console.log(`task has been deleted: ${deletedTask[0].name}`)
} else { 
    console.log("tasks does not exist. please check index value.")
}
return tasks;
}

export function viewTask() {
const groupedTasks = _.groupedBy(tasks, "done");

console.log("\n\n\n pending tasks:");
(groupedTasks[false] || []).forEach((task)), i => 
console.log(`${i}. ${task.name}`);
 
console.log("\n\n\n Done tasks:");
(groupedTasks[true] || []).forEach((task), i => 
console.log(`${i}. ${task.name}`));
}


/*
define each task
-action  or whatever the user types
-the ability to be marked as done
.splice is taking away how many elements u want. (1) only one will be deleted
*/