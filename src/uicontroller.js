import { elements } from './elements.js'
import settingsCheck from '../assets/settingsCheckbox.svg'
import settingsCheckEmpty from '../assets/settingsCheckboxempty.svg'

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

    static getCheckboxValue(icon) {
        if (icon.src === settingsCheck) 
            return true;
        else 
            return false;
    }

    static toggleCheckbox(icon) {
        if (this.getCheckboxValue(icon)) 
            icon.src = settingsCheckEmpty;
        else 
            icon.src = settingsCheck;
    }

    static resetCheckbox(icon, setVal = true) {
        if (setVal) {
            icon.src = settingsCheck;
        }
        else {
            icon.src = settingsCheckEmpty;
        }
    }

    static addProject(project) {

    }

    static renderTemplates() {
        // for each template saved in local storage, create a div and add it to loadTemplateContainer
    }

    static clearRenderedTemplates() {
        // for each rendered template, remove from DOM
    }

    static renderProjects() {
        // for each project saved in local storage, create a div and add it to loadProjectContainer
    }

    static clearRenderedProjects() {
        // for each rendered project, remove from DOM
    }

    static toggleNewNameDiv() {
        this.toggleCheckbox(elements.saveTemplateNameAsPName);
        if (this.getCheckboxValue(elements.saveTemplateNameAsPName)) {
            elements.saveTemplateNewNameDiv.innerHTML = '';
        }
        else {
            elements.saveTemplateNewNameDiv.innerHTML = '<label for="newTemplateName">New Template Name:</label><input type="text" id="newTemplateName" name="newTemplateName" maxlength="30" placeholder="Project">';
        }
    }

    static toggleTaskSelection() {
        this.toggleCheckbox(elements.saveTemplateSaveAll);
        if (this.getCheckboxValue(elements.saveTemplateSaveAll)) {
            elements.saveTemplateSelectedTasksDiv.innerHTML = '';
        }
        else {
            elements.saveTemplateSelectedTasksDiv.innerHTML = '<h2>Select the tasks to include:</h2>';
            // for each task in current project, append them to the div
        }
    }

    static clearSaveTemplateModal() {
        this.resetCheckbox(elements.saveTemplateNameAsPName);
        this.resetCheckbox(elements.saveTemplateSaveAll);
        elements.saveTemplateSelectedTasksDiv.innerHTML = '';
        elements.saveTemplateNewNameDiv.innerHTML = '';
    }
}