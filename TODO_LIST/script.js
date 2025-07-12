const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";  // clears the before text written after added
    saveData();
}

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); // removes parent (li)
        saveData();
    }
}, false);

// call this when ever newly added task
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML) // name and value. whatever content in list Container stored in browser with name of data
}

// to display whenever we opened again
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();