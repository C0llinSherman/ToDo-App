function editListGroups() {
    let editHTML = `<button class="btn btn-secondary" type="button" id="button-addon1"
    onclick="saveEdits()">Save Edits</button>
    <ul class="list-group">`;
    lists[0].name
    for (let i = 0; i < lists.length; i++) {
        editHTML += `
        <li class="list-group-item listItem">
                                    <span>
                                        
                                       <input type="text" value="${lists[i].name}">
                                    </span>
                                    <span>
                                        <button class="btn btn-secondary btn-sm" type="button" id="button-addon1"
                                        onclick="deleteToDoList(${i})">Delete</button>
                                    </span>
                                </li>`;
    }
    editHTML += `</ul>`
    document.getElementById("lists").innerHTML = editHTML
}
function editLists() {
    let editHTML = `<button class="btn btn-secondary" type="button" id="button-addon1"
    onclick="saveEdits()">Save and Close</button>
    <ul class="list-group todos">`;
    for (let i = 0; i < currentList.toDos.length; i++) {
        editHTML += `
        <li class="list-group-item listItem">
                                    <span>
                                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                       <span id="descript${i}">${currentList.toDos[i].description}</span>
                                    </span>
                                    <span>
                                    <button class="btn btn-secondary btn-sm" type="button" id="button-addon1"
                                    onclick="rename(${i})">Rename</button>
                                        <button class="btn btn-secondary btn-sm" type="button" id="button-addon1"
                                        onclick="deleteToDo(${i})">Delete</button>
                                    </span>
                                </li>`;
    }
    editHTML += `</ul>`
    document.getElementById("listItems").innerHTML = editHTML
}
function rename(toDoNum) {
    let renameHTML = `<input id="value${toDoNum}"type=text value="${currentList.toDos[toDoNum].description}"></input>
                    <button class="btn btn-secondary btn-sm" onclick="renameSave(${toDoNum})">Save</button>`
    document.getElementById(`descript${toDoNum}`).innerHTML = renameHTML
}
function renameSave(toDoNum) {
    let rename = document.getElementById(`value${toDoNum}`).value
    currentList.toDos[toDoNum].description = rename
    save()
    render()
    editLists()
}
function deleteToDoList(num) {
    lists.splice(num, 1)
    currentList = lists[0]
    save()
    render()
}
function deleteToDo(num) {
    currentList.toDos.splice(num, 1)
    save()
    render()
}
function unmarkComplete(num) {
    currentList.toDos[num].completed = false
    save()
    render()
}
function markComplete(num) {
    currentList.toDos[num].completed = true
    save()
    render()
}
function clearCompleted() {
    for (let j = 5; j > 0; j--) {
        for (let i = 0; i < currentList.toDos.length; i++) {
            if (currentList.toDos[i].completed === true) {
                currentList.toDos.splice(i, 1)
            }
        }
        save()
        render()
    }
}

function saveEdits() {
    save();
    render();
}