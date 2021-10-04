const lists = []


class ToDoList {
    constructor(id, name, toDos = []) {
        this.id = id;
        this.name = name;
        this.toDos = toDos;
    }
    addToDo(toDo) {
        this.toDos.push(toDo);
    }
    removeToDo(id) {
        this.toDos = this.toDos.filter(toDo => toDo.id != id);
    }
    clearCompleted() {
        this.toDos = this.toDos.filter(toDo => !toDo.Completed);
    }
}

class ToDo {
    constructor(id, description, completed = false) {
        this.id = id;
        this.description = description;
        this.completed = completed;
    }
}

let groceryList = new ToDoList(1, 'shopping');

groceryList.addToDo(new ToDo(1, "bananas"))
groceryList.addToDo(new ToDo(2, "eggs"))
groceryList.addToDo(new ToDo(3, "sugar"))
groceryList.addToDo(new ToDo(4, "apple"))

console.log(groceryList)

lists.push(groceryList)
console.log(lists)




function createList() {
    let newList = document.getElementById("createList").value;
    let list = new ToDoList(Math.random, newList);
    lists.push(list)
    console.log(newList);
    // document.getElementById("createList").value = ""
}

function createListItem() {
    let newListItem = document.getElementById("createListItem").value;
    console.log(newListItem);
    // document.getElementById("createListItem").value = ""
}


