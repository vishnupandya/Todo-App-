document.addEventListener("DOMContentLoaded" ,function() {
    let input =  document.querySelector("input");
let button = document.querySelector("button");
let list = document.querySelector(".list");

function addTask(taskText) {
    let newTask = document.createElement("li");
    let taskContent = document.createElement("span");   
    taskContent.innerText = taskText;

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click" , function() {
        newTask.remove();
    })

    newTask.appendChild(taskContent)
    newTask.appendChild(deleteButton)
    list.appendChild(newTask);
}

button.addEventListener("click" , function() {
    let taskText = input.value.trim();
    if(taskText !== " "){
        addTask(taskText);
        input.value = " ";
    }
})

button.addEventListener("keypress" , function(event) {
    if(event.key === "Enter"){
    let taskText = input.value.trim()
    if(taskText !== " "){
        addTask(taskText);
        input.value = "";
    }
}
})
})