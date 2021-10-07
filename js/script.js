let lists = []



const LISTS = 'lists'
const existingLists = retrieve();
if (existingLists) {
    lists = existingLists;
} else {
    let currentList = new ToDoList('Shopping');
    currentList.addToDo(new ToDo("Bananas"))
    currentList.addToDo(new ToDo("Eggs"))
    currentList.addToDo(new ToDo("Sugar"))
    currentList.addToDo(new ToDo("Apples"))
    lists.push(currentList)
}

let currentList = lists[0]






// Default List


function createList() {
    let newList = document.getElementById("createList").value;
    if (newList !== "") {
        let list = new ToDoList(newList);
        lists.push(list)
        render();
        document.getElementById("createList").value = ""
        save()
    }
}
function createListItem() {
    let newListItem = document.getElementById("createListItem").value;
    // if (newListItem !== "") {
    currentList.addToDo(new ToDo(newListItem))
    render()
    document.getElementById("createListItem").value = ""
    save()
    // }
    // document.getElementById("createListItem").value = ""
}


render()
function render() {
    // list name
    // document.getElementById('current-list-name').innerText = currentList.name;
    // lists
    let listHtml = '<ul class="list-group">';
    lists.forEach((lists) => {
        listHtml += `<li class="list-group-item">${lists.name}</li>`;
    });
    listHtml += '</ul>';
    document.getElementById('lists').innerHTML = listHtml;
    //list items
    let listItemsHTML = '<ul class="list-group todos">';
    currentList.toDos.forEach((ToDo) => {
        listItemsHTML += `
        <li class="list-group-item listItem">
                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="...">
                                ${ToDo.description}
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
