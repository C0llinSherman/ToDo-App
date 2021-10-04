class ToDoList {
    constructor(name, toDos = []) {
        this.id = Util.newGuid("toDoList");
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