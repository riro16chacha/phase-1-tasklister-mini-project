document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document
    .getElementById("create-task-form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      getTasks();
    });
  //i want the user to submit new task by just pressing enter
  document
    .getElementById("new-task-description")
    .addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        getTasks();
      }
    });
});
//this function will append and remove the new tasks to the DOM
function getTasks() {
  const taskInput = document.getElementById("new-task-description").value;
  const tasks = document.getElementById("tasks");
  const newTasks = document.createElement("li");
  newTasks.textContent = `${taskInput}  `;
  tasks.appendChild(newTasks);
  let btn = document.createElement("button");
  btn.innerText = "Delete";
  let editBtn = document.createElement("button");
  newTasks.appendChild(btn);
  btn.addEventListener("click", () => {
    newTasks.remove();
  });
  // Clear the input field after submitting the form
  document.getElementById("new-task-description").value = "";
  editTasks();
}