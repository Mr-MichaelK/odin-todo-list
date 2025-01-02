import Project from './project.js'
import Task from './task.js'
import { elements } from './elements.js'
import UIController from './uicontroller.js'

export default class AppController {
    p = 3;
    // Add Task Methods

    openAddTaskModal() {
        elements.openAddTaskButton.addEventListener("click", () => UIController.openModal(elements.addTaskModal));
        // ensure min date is now
    }

    closeAddTaskModal() {
        elements.addTaskModalX.addEventListener("click", () => {
            UIController.closeDialog(elements.addTaskModal);
        });
    
        elements.addTaskCancel.addEventListener("click", () => {
            UIController.closeDialog(elements.addTaskModal);
            // clear the content with UIController
            UIController.clearInputValue(elements.addTaskInput);
            // note to self: clear priority
            UIController.clearPriority();
            UIController.clearInputValue(elements.addTaskDueDateInput);
            UIController.clearInputValue(elements.addTaskDescription);
        });
    }

    priorityEventListeners() {
        elements.addTaskPriorityLow.addEventListener("click", () => UIController.togglePriorityActivity(elements.addTaskPriorityLow));
        elements.addTaskPriorityMedium.addEventListener("click", () => UIController.togglePriorityActivity(elements.addTaskPriorityMedium));
        elements.addTaskPriorityHigh.addEventListener("click", () => UIController.togglePriorityActivity(elements.addTaskPriorityHigh));
    }

    addTask() {
        elements.addTaskAdd.addEventListener("click", () => {
            // retrieve content with UIController
            let title       = UIController.getInputValue(elements.addTaskInput);
            if (!title) {
                alert("Cannot a task without a title.")
                return;
            }
            // retrieve priority
            let priority    = this.p;
            let dueDate     = UIController.getInputValue(elements.addTaskDueDateInput);
            let description = UIController.getInputValue(elements.addTaskDescription);

            // send content to Task
            let task = new Task(title, description, dueDate, priority);

            // add Task to Project

            // close the modal
            UIController.closeDialog(elements.addTaskModal);

            // clear modal with UIController
            UIController.clearInputValue(elements.addTaskInput);
            // note to self: clear priority
            UIController.clearPriority();
            UIController.clearInputValue(elements.addTaskDueDateInput);
            UIController.clearInputValue(elements.addTaskDescription);

            // add the task to screen using UIController
            UIController.addTask(task);
            
            // save to local storage

        })
    }

    addTaskEventListeners() {
        this.openAddTaskModal();
        this.closeAddTaskModal();
        this.priorityEventListeners();
        this.addTask();
    }

    // Option Methods

    openOptionsDialog() {
        elements.openOptionButton.addEventListener("click", () => UIController.openDialog(elements.optionsDialog));
    }

    closeOptionsDialog() {
        elements.optionsDialogX.addEventListener("click", () => UIController.closeDialog(elements.optionsDialog));
    }

    optionEventListeners() {
        this.openOptionsDialog();
        this.closeOptionsDialog();
    }
    
    // New Project Modal Methods

    openNewProjectModal() {
        elements.openNewProjectModalButton.addEventListener("click", () => UIController.openModal(elements.newProjectModal));
    }

    closeNewProjectModal() {
        elements.newProjectModalCancel.addEventListener("click", () => {
            UIController.closeDialog(elements.newProjectModal);
            // clear the content with UIController
            UIController.clearInputValue(elements.newProjectNameInput);
            UIController.resetCheckbox(elements.newProjectSaveIcon);
        });

        elements.newProjectModalX.addEventListener("click", () => {
            elements.newProjectModal.close();
            // clear the content with UIController
            UIController.clearInputValue(elements.newProjectNameInput);
            UIController.resetCheckbox(elements.newProjectSaveIcon);
        });
    }

    toggleNewProjectSave() {
        elements.newProjectSaveIcon.addEventListener("click", () => UIController.toggleCheckbox(elements.newProjectSaveIcon));
    }

    createNewProject() {
        elements.newProjectModalConfirm.addEventListener("click", () => {
            // get the content from UI with UIController
            let projectName = UIController.getInputValue(elements.newProjectNameInput);
            let saveStatus  = UIController.getCheckboxValue(elements.newProjectSaveIcon);

            // close the modal
            elements.newProjectModal.close();

            // clear the content
            UIController.clearInputValue(elements.newProjectNameInput);
            UIController.resetCheckbox(elements.newProjectSaveIcon);

            // create new project

            // save project with local storage

            // render new project

        }); 
    }

    newProjectEventListeners() {
        this.openNewProjectModal();
        this.closeNewProjectModal();
        this.toggleNewProjectSave();
        this.createNewProject();
    }

    // Load Template Methods 

    openLoadTemplateModal() {
        elements.openLoadTemplateButton.addEventListener("click", () => {
            UIController.openModal(elements.loadTemplateModal);
            // render templates with UIController
            UIController.renderTemplates();
        });
    }

    closeLoadTemplateModal() {
        elements.loadTemplateX.addEventListener("click", () => {
            // clear rendered templates with UIController
            UIController.clearRenderedTemplates();
            UIController.closeDialog(elements.loadTemplateModal);
        })
    }

    loadTemplateEventListeners() {
        this.openLoadTemplateModal();
        this.closeLoadTemplateModal();
    }

    // Load Project Methods

    openLoadProjectModal() {
        elements.openLoadProjectButton.addEventListener("click", () => {
            UIController.openModal(elements.loadProjectModal);
            // render projects with UIController
            UIController.renderProjects();
        });
    }

    closeLoadProjectModal() {
        elements.loadProjectX.addEventListener("click", () => {
            // clear rendered projects with UIController
            UIController.clearRenderedProjects();
            UIController.closeDialog(elements.loadProjectModal);
        })
    }

    loadProjectEventListeners() {
        this.openLoadProjectModal();
        this.closeLoadProjectModal();
    }

    // Save As Template Methods

    openSaveTemplateModal() {
        elements.openSaveTemplateButton.addEventListener("click", () => UIController.openModal(elements.saveTemplateModal));
    }

    closeSaveTemplateModal() {
        elements.saveTemplateModalX.addEventListener("click", () => {
            UIController.closeDialog(elements.saveTemplateModal);
            // clear content 
            UIController.clearSaveTemplateModal();
        });

        elements.saveTemplateCancel.addEventListener("click", () => {
            UIController.closeDialog(elements.saveTemplateModal);
            // clear content 
            UIController.clearSaveTemplateModal();
        });
    }

    saveTemplateToggleNewName() {
        elements.saveTemplateNameAsPName.addEventListener("click", () => UIController.toggleNewNameDiv());
    }

    saveTemplateToggleSelectTasks() {
        elements.saveTemplateSaveAll.addEventListener("click", () => UIController.toggleTaskSelection());
    }

    saveTemplateSave() {
        elements.saveTemplateSave.addEventListener("click", () => {
            // retrieve modal content
            let templateName;
            if (UIController.getCheckboxValue(elements.saveTemplateNameAsPName)) {
                // set templateName to current project name
            }
            else {
                templateName = UIController.getInputValue(document.querySelector("#newTemplateName"));
            }

            if (!templateName) {
                alert("Cannot save a template without a name!");
                return;
            }

            // close the modal
            UIController.closeDialog(elements.saveTemplateModal);
    
            // clear its content
            UIController.clearSaveTemplateModal();

            // save to local storage
        
        })
    }

    saveTemplateEventListeners() {
        this.openSaveTemplateModal();
        this.closeSaveTemplateModal();
        this.saveTemplateToggleNewName();
        this.saveTemplateToggleSelectTasks();
        this.saveTemplateSave();
    }

    // Rename Modal Methods

    /*changeProjectName() {
        elements..addEventListener("click", () => {
            // get the content with UIController

            // clear the content with UIController

            // close the modal

            // update project name in Project and localStorage

            // update project name on UI with UIController

        })
    }*/

    init() {
        this.addTaskEventListeners();
        this.optionEventListeners();
        this.newProjectEventListeners();
        this.loadTemplateEventListeners();
        this.loadProjectEventListeners();
        this.saveTemplateEventListeners();
    }
}