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
    render()
    save()
}
// Create Lists
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
//Create List Items
function createListItem() {
    const content = document.getElementById("createListItem").value;
    if (content !== "") {
        currentList.toDos.push(new ToDo(content))
        render()
        save()
        document.getElementById("createListItem").value = ""
    }
}
render()
save()
function save() {
    localStorage.setItem(LISTS, JSON.stringify(lists));
}
function retrieve() {
    return JSON.parse(localStorage.getItem(LISTS))
}
