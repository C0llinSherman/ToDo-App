const LISTS = 'lists'
const existingLists = retrieve();
let lists = []

let currentList
if (!existingLists) {
    let currentList = new ToDoList('Shopping');
    currentList.addToDo(new ToDo("Bananas"))
    currentList.addToDo(new ToDo("Eggs"))
    currentList.addToDo(new ToDo("Sugar"))
    currentList.addToDo(new ToDo("Apples"))
    lists.push(currentList)
} else {
    lists = existingLists;
    currentList = lists[0]
}

currentList = lists[0]


// Set Current List

function changeCurrentList(listNum) {
    currentList = lists[listNum]
    console.log(lists[listNum])
    render()
    save()
}

// Default List


function createList() {
    let newList = document.getElementById("createList").value;
    if (newList !== "") {
        let list = new ToDoList(newList);
        lists.push(list)
        render();
        save()
        document.getElementById("createList").value = ""
    }
    currentList = lists[lists.length - 1]
    save()
    render()
}
function createListItem() {
    const content = document.getElementById("createListItem").value;
    currentList.toDos.push(new ToDo(content))
    render()
    save()
    document.getElementById("createListItem").value = ""

}

// Edit Lists
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
    console.log(currentList)
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
        console.log(currentList)

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
    console.log(rename)
    currentList.toDos[toDoNum].description = rename
    save()
    render()
    editLists()
}

function deleteToDoList(num) {
    console.log("Delete")
    console.log(num)
    lists.splice(num, 1)
    currentList = lists[0]
    save()
    render()
}

function deleteToDo(num) {
    console.log("Delete")
    console.log(num)
    currentList.toDos.splice(num, 1)
    save()
    render()
}

function unmarkComplete(num) {
    console.log("false")
    currentList.toDos[num].completed = false
    console.log(currentList.toDos[num].completed)
    save()
    render()
}

function markComplete(num) {
    console.log("true")
    currentList.toDos[num].completed = true
    console.log(currentList.toDos[num].completed)
    save()
    render()
}

function clearCompleted() {
    for (let i = 0; i < currentList.toDos.length; i++) {
        if (currentList.toDos[i].completed === true) {
            currentList.toDos.splice(i, 1)
        }
    }
    save()
    render()
}

function saveEdits() {

    save();
    render();
}

render()
function render() {
    // list name
    document.getElementById('current-list-name').innerText = currentList.name;
    // lists
    let listHtml = '<ul class="list-group">';
    for (let i = 0; i < lists.length; i++) {
        listHtml += `<li class="list-group-item" onclick="changeCurrentList(${i})">${lists[i].name}</li>`;
    }
    listHtml += '</ul>';
    document.getElementById('lists').innerHTML = listHtml;


    //list items
    let listItemsHTML = '<ul class="list-group todos">';
    for (let i = 0; i < currentList.toDos.length; i++) {
        if (currentList.toDos[i].completed === true) {
            listItemsHTML += `
        <li class="list-group-item listItem">
                            <div>
                                <input id="flexCheckChecked" class="form-check-input me-1" type="checkbox" value="true" aria-label="..." onclick="unmarkComplete(${i})"checked>
                                ${currentList.toDos[i].description}
                            </div>    
                            </li>
        `;
        }
        else {
            listItemsHTML += `
        <li class="list-group-item listItem">
                            <div>
                                <input class="form-check-input me-1" type="checkbox" value="false" aria-label="..." onclick="markComplete(${i})">
                                ${currentList.toDos[i].description}
                            </div>    
                            </li>
        `;
        };


    }
    listItemsHTML += `</ul>`
    document.getElementById('listItems').innerHTML = listItemsHTML;
}
save()
function save() {
    localStorage.setItem(LISTS, JSON.stringify(lists));

}

function retrieve() {
    return JSON.parse(localStorage.getItem(LISTS))
}
