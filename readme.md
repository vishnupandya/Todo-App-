document.addEventListener("DOMContentLoaded", function() {
    // Get the input field, button, and list container
    let input = document.querySelector("input");
    let button = document.querySelector("button");
    let list = document.querySelector(".list");

    // Function to add a new task
    function addTask(taskText) {
        // Create a new list item
        let newTask = document.createElement("li");

        // Create the text part of the task
        let taskContent = document.createElement("span");
        taskContent.innerText = taskText;

        // Create the delete button
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button");

        // Delete task when button is clicked
        deleteButton.addEventListener("click", function() {
            newTask.remove();
        });

        // Add task content and delete button to the new task
        newTask.appendChild(taskContent);
        newTask.appendChild(deleteButton);

        // Add the new task to the list
        list.appendChild(newTask);
    }

    // When the "Add" button is clicked
    button.addEventListener("click", function() {
        let taskText = input.value.trim();  // Get the text from input
        if (taskText !== "") {  // Only add the task if text is not empty
            addTask(taskText);
            input.value = "";  // Clear the input field
        }
    });

    // Optional: Allow pressing "Enter" to add a task
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            let taskText = input.value.trim();
            if (taskText !== "") {
                addTask(taskText);
                input.value = "";  // Clear the input field
            }
        }
    });
});
