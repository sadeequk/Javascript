
let tasks;

tasks.sort((a, b) => {
  const priorityOrder = { High: 3, Medium: 2, Low: 1 };
  return priorityOrder[b.priority] - priorityOrder[a.priority];
});

console.log("Sorted tasks by priority:", tasks);



const incompleteTasks = tasks.filter(task => task.status === "Incomplete");
console.log("Incomplete tasks:", incompleteTasks);



const taskToFind = "Finish Report";
const foundTask = tasks.find(task => task.name === taskToFind);
if (foundTask) {
  console.log("Task found:", foundTask);
} else {
  console.log(`Task "${taskToFind}" not found.`);
}


const firstThreeTasks = tasks.slice(0, 3);
console.log("First three tasks:", firstThreeTasks);


const taskToUpdate = "Buy Groceries";
const indexToUpdate = tasks.findIndex(task => task.name === taskToUpdate);

if (indexToUpdate !== -1) {
  tasks[indexToUpdate].status = "Complete";
  console.log("Updated tasks after marking task as complete:", tasks);
} else {
  console.log(`Task "${taskToUpdate}" not found.`);
}


tasks.reverse();
console.log("Reversed tasks:", tasks);


const additionalTasks = [
  { name: "New Task 1", priority: "Low", status: "Incomplete", deadline: "2023-12-31" },
  { name: "New Task 2", priority: "Medium", status: "Incomplete", deadline: "2023-12-31" },
];

const combinedTasks = tasks.concat(additionalTasks);
console.log("Combined tasks:", combinedTasks);
