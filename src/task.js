export default class Task {
    static id = 1;
    #ID;
    constructor(title, description = "", dueDate = null, priority = null) {
        this.title       = title;
        this.description = description;
        if (dueDate) 
            this.dueDate = new Date(dueDate);
        this.priority    = priority;
        this.completed   = false;
        this.#ID = Task.id++;
    }
    markComplete() {
        this.completed = true;
    }
    markIncomplete() {
        this.completed = false;
    }
    toggleComplete() {
        if (this.completed) {
            this.markIncomplete();
        }
        else {
            this.markComplete();
        }
    }
    updateDetails(title, description, dueDate, priority) {
        if (title)       this.title       = title;
        if (description) this.description = description;
        if (dueDate)     this.dueDate     = new Date(dueDate);
        if (priority)    this.priority    = priority;
    }
    getFormattedDueDate() {
        return this.dueDate.toLocaleDateString();
    }
}