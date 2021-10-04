class ToDo {
    constructor(description, completed = false) {
        this.id = Util.newGuid("toDo");
        this.description = description;
        this.completed = completed;
    }
}