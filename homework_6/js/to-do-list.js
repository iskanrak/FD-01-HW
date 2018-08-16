var arrayTask = [];
function createList() {
    var addTask = document.createElement('li');
    addTask.className = "task";
    var task = typeTask.value;
    addTask.innerHTML =task;
    list.appendChild(addTask);
    arrayTask.push(task);
    typeTask.value = "";
}
addTask.addEventListener('click', createList);

function clearList() {
    var all_clear = document.getElementById("list");
    while (all_clear.firstChild) {
        all_clear.removeChild(all_clear.firstChild);
    }
}
clearTask.addEventListener('click', clearList);

function mark_ComplitedTask(event){
    event.target.classList.toggle("task-complete");
}
list.addEventListener('click', mark_ComplitedTask);