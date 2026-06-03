// Get elements
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
    if (inputBox.value === '') {
        alert("Please write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        
        // Add delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

// Add event listener for Add button
document.querySelector("button").addEventListener("click", addTask);

// Add event listener for Enter key
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Toggle checked class and delete task
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  // ✅ FIXED: classList (small L)
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();  // ✅ ADDED: save after delete
    }
});

// Save data to localStorage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Load saved data from localStorage
function showTask() {
    const savedData = localStorage.getItem("data");  // ✅ FIXED: get karna hai, set nahi
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Load tasks when page opens
showTask();