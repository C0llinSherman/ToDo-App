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
}
function createListItem() {
    const content = document.getElementById("createListItem").value;
    currentList.toDos.push(new ToDo(content))
    render()
    save()
    document.getElementById("createListItem").value = ""

}

// Edit Lists

function editLists() {
    let editHTML = `<button class="btn btn-secondary" type="button" id="button-addon1"
    onclick="saveEdits()">Save Edits</button>
    <ul class="list-group todos">`;
    console.log(currentList)
    for (let i = 0; i < currentList.toDos.length; i++) {
        editHTML += `
        <li class="list-group-item listItem">
                                    <span>
                                        <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                       <input type="text" value="${currentList.toDos[i].description}">
                                    </span>
                                    <span>
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
    currentList.toDos[toDoNum].description = "rename"
}


function deleteToDo(num) {
    console.log("Delete")
    console.log(num)
    currentList.toDos.splice(num, 1)
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
    currentList.toDos.forEach((ToDo) => {
        listItemsHTML += `
        <li class="list-group-item listItem">
                            <div>
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                ${ToDo.description}
                            </div>    
                            </li>
        `;
    });
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
