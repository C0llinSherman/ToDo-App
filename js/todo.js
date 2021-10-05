class ToDo {
    constructor(description, completed = false) {
        this.id = Util.newGuid('todo');
        this.description = description;
        this.completed = completed;
    }
}
