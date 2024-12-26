# odin-todo-list

## Objective
Design and implement a TODO List web application that supports multiple project handling and local storage. The source code must be modular and adhere to SOLID principles.

## Features
1. View all projects.
2. View all todos in each project.
3. Expand a single todo to see/edit its details.
4. Delete a todo.
5. Manage application settings:
   - Delete local storage data.
   - Toggle dark/light mode.
   - Change username.
   - Clear completed tasks.
6. Save and manage tasks within projects:
   - Save tasks locally.
   - Delete, rename, or clear projects.
   - Save projects as templates for reuse.
7. Sort tasks:
   - By priority or due date.

## Technologies Used
- HTML, CSS, and JavaScript for front-end development.
- Webpack for module bundling.
- LocalStorage for data persistence.

## Code Structure
- `Task` class: Manages individual tasks.
- `Project` class: Manages collections of tasks.
- `UIController` module: Handles rendering and user interaction.
- `StorageController` module: Handles LocalStorage operations.
- `AppController` module: Coordinates interactions between components.
