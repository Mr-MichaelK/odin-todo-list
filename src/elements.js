export const elements = {
    // Add Task Elements
    openAddTaskButton    : document.querySelector(".title"),
    addTaskModal         : document.querySelector(".addTaskModal"),
    addTaskModalX        : document.querySelector(".addTaskModal .closeContainer img"),
    addTaskInput         : document.querySelector("#taskTitleInput"),
    addTaskPriorityLow   : document.querySelector("#low"),
    addTaskPriorityMedium: document.querySelector("#medium"),
    addTaskPriorityHigh  : document.querySelector("#high"),
    addTaskDueDateInput  : document.querySelector("#dueDateInput"),
    addTaskDescription   : document.querySelector(".description textarea"),
    addTaskCancel        : document.querySelector(".addTaskModal #cancel"),
    addTaskAdd           : document.querySelector(".addTaskModal #add"),
    taskContainer        : document.querySelector(".taskContainer"),

    // Option Elements
    openOptionButton: document.querySelector(".settingsIconContainer img"),
    optionsDialog   : document.querySelector(".optionsModal"),
    optionsDialogX  : document.querySelector(".optionsModal .closeContainer img"),

    // New Project Elements
    newProjectModal          : document.querySelector(".newProject"),
    openNewProjectModalButton: document.querySelector("#newProjectButton"),
    newProjectModalX         : document.querySelector(".newProject .closeContainer img"),
    newProjectNameInput      : document.querySelector("#newProjectName"),
    newProjectSaveIcon       : document.querySelector(".newProject #save"),
    newProjectModalCancel    : document.querySelector(".newProject #cancel"),
    newProjectModalConfirm   : document.querySelector(".newProject #confirm"),

    // Load Template Elements
    openLoadTemplateButton: document.querySelector("#loadTemplateButton"),
    loadTemplateModal     : document.querySelector(".loadTemplate"),
    loadTemplateX         : document.querySelector(".loadTemplate #close"),
    loadTemplateContainer : document.querySelector(".templateContainer"),

    // Load Project Elements
    openLoadProjectButton: document.querySelector(".loadProjectButton"),
    loadProjectModal     : document.querySelector(".loadProject"),
    loadProjectX         : document.querySelector(".loadProject .closeContainer img"),
    loadProjectContainer : document.querySelector(".projectContainer"),

    // Save as Template Elements
    openSaveTemplateButton      : document.querySelector("#saveTemplateButton"),
    saveTemplateModal           : document.querySelector(".saveAsTemplate"),
    saveTemplateModalX          : document.querySelector(".saveAsTemplate .closeContainer img"),
    saveTemplateNameAsPName     : document.querySelector(".saveAsTemplate #saveName"),
    saveTemplateNewNameDiv      : document.querySelector(".newName"),
    saveTemplateSaveAll         : document.querySelector(".saveAsTemplate #saveAll"),
    saveTemplateSelectedTasksDiv: document.querySelector(".selectedTasks"),
    saveTemplateCancel          : document.querySelector(".saveAsTemplate #cancel"),
    saveTemplateSave            : document.querySelector(".saveAsTemplate #save"),

    // Rename Project Elements
    openRenameProjectButton: document.querySelector("#renameProjectButton"),
    projectName            : document.querySelector(".projecttitle"),
    renameProjectModal     : document.querySelector(".renameProject"),
    renameProjectModalX    : document.querySelector(".renameProject .closeContainer img"),
    renameProjectInput     : document.querySelector(".renameProject input"),
    renameProjectCancel    : document.querySelector(".renameProject #cancel"),
    renameProjectSave      : document.querySelector(".renameProject #save"),

    // Clear Completed Tasks
    clearCompletedTasksButton: document.querySelector("#clearCompletedTasksButton"),

    // Clear Tasks
    clearAllTasksButton: document.querySelector("#clearAllTasksButton"),

    // Delete Project
    deleteProjectButton: document.querySelector("#deleteProjectButton"),

    // Sort Elements
    sortModalButton  : document.querySelector(".orderingModal"),
    priorityIncButton: document.querySelector("#priority #inc"),
    prioritydecButton: document.querySelector("#priority #dec"),
    dueDateIncButton : document.querySelector("#dueDate #inc"),
    dueDateDecButton : document.querySelector("#dueDate #dec"),

    // Settings Elements
    openSettingsModalButton: document.querySelector(".settings"),
    settingsModal          : document.querySelector(".appsettingsModal"),
    settingsUsernameInput  : document.querySelector(".appsettingsModal input"),
    settingsSaveDataIcon   : document.querySelector("#settingsSaveDataIcon"),
    settingsDeleteDataIcon : document.querySelector("#settingsDeleteDataIcon"),
    settingsAutoClearIcon  : document.querySelector("#settingsAutoClearIcon"),
    settingsModalCancel    : document.querySelector(".appsettingsModal #cancel"),
    settingsModalConfirm   : document.querySelector(".appsettingsModal #confirm"),

    // Username Elements
    openUsernameModalButton: document.querySelector(".username"),
    usernameModal          : document.querySelector(".usernameModal"),
    usernameInput          : document.querySelector(".usernameModal input"),
    usernameModalCancel    : document.querySelector(".usernameModal #cancel"),
    usernameModalConfirm   : document.querySelector(".usernameModal #confirm"),
}