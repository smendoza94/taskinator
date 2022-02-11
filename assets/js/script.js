var formEl = document.querySelector("#task-form")
var taskToDoEl = document.querySelector("#tasks-to-do");

var createTaskHandler = function() {
    //prevents the browers from reloading the page (legacy behavior)
    event.preventDefault(); 
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);