import { elements } from './elements.js'

export default class UIController {
    static openModal(modal) {
        modal.showModal();
    }

    static openDialog(dialog) {
        dialog.show();
    }

    static closeDialog(modal) {
        modal.close();
    }

    static clearInputValue(element) {
        element.value = "";
    }

    static getInputValue(element) {
        return element.value;
    }

    static togglePriorityActivity(button) {
        if (elements.addTaskPriorityLow != button)
            elements.addTaskPriorityLow.classList.add("inactive");
        if (elements.addTaskPriorityMedium != button)
            elements.addTaskPriorityMedium.classList.add("inactive");
        if (elements.addTaskPriorityHigh != button)
            elements.addTaskPriorityHigh.classList.add("inactive");
        if (button.classList.contains("inactive"))
            button.classList.remove("inactive");
        else 
            button.classList.add("inactive");
    }

    static clearPriority() {
        elements.addTaskPriorityLow.classList.add("inactive");
        elements.addTaskPriorityMedium.classList.add("inactive");
        elements.addTaskPriorityHigh.classList.add("inactive");
    }

    static addTask(task) {
        const taskDiv       = document.createElement("div");
        taskDiv.className   = "task";
        taskDiv.id          = task.id + "";
        taskDiv.textContent = task.title;
        elements.taskContainer.appendChild(taskDiv);
    }
}