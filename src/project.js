export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks  = [];
    }
    addTask(task) {
        this.tasks.push(task);
    }
    removeTask(taskID) {
        this.tasks = this.tasks.filter(task => task.taskID !== taskID);
    }
    renameProject(name) {
        this.name = name;
    }
    getTasks() {
        return this.tasks;
    }
    clearAllTasks() {
        this.tasks = [];
    }
    clearCompletedTasks() {
        this.tasks = this.tasks.filter(task => task.completed !== true);
    }
}