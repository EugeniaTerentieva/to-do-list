import { TASKS_CHANGED } from "../constants.js";

export class TaskStorage {

    tasks = [];
    changeEvent = new CustomEvent(TASKS_CHANGED);

    createTask(task) {

        if (!task) {
            throw new Error("Task should not be empty");
        }

        this.tasks.push(task);

        document.dispatchEvent(this.changeEvent);
    }
}